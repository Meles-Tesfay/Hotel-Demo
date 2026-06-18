import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'

const CancelLayout = ({ page }) => {
    usePageScroll(page.slug)
    const types = page.sections[0]
    const howTo = page.sections[1]
    const hospitality = page.sections[2]

    const [stayDate, setStayDate] = useState('')
    const [cancelDate, setCancelDate] = useState('')
    const [calculatedType, setCalculatedType] = useState('Flexible')
    const [calcResult, setCalcResult] = useState(null)

    const handleCalculate = (e) => {
        e.preventDefault()
        if (!stayDate || !cancelDate) return

        const stay = new Date(stayDate)
        const cancel = new Date(cancelDate)
        const diffTime = stay.getTime() - cancel.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays <= 0) {
            setCalcResult({
                status: 'Non-Refundable',
                message: 'Cancellation date is on or after check-in date.',
                percent: 0,
                color: 'text-rose-600 bg-rose-50 border-rose-200'
            })
        } else if (calculatedType === 'Flexible') {
            if (diffDays >= 2) {
                setCalcResult({
                    status: 'Full Refund',
                    message: `Cancelled ${diffDays} days before check-in. Meets the 48h deadline.`,
                    percent: 100,
                    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
                })
            } else {
                setCalcResult({
                    status: 'No Refund / Partial Charge',
                    message: `Cancelled only ${diffDays} days before check-in. Missed the 48h deadline.`,
                    percent: 0,
                    color: 'text-amber-600 bg-amber-50 border-amber-200'
                })
            }
        } else if (calculatedType === 'Moderate') {
            if (diffDays >= 7) {
                setCalcResult({
                    status: 'Full Refund',
                    message: `Cancelled ${diffDays} days before check-in. Meets the 7-day moderate deadline.`,
                    percent: 100,
                    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
                })
            } else if (diffDays >= 2) {
                setCalcResult({
                    status: '50% Refund',
                    message: `Cancelled ${diffDays} days before check-in. Eligible for 50% credit.`,
                    percent: 50,
                    color: 'text-blue-600 bg-blue-50 border-blue-200'
                })
            } else {
                setCalcResult({
                    status: 'No Refund',
                    message: `Cancelled only ${diffDays} days before check-in.`,
                    percent: 0,
                    color: 'text-amber-600 bg-amber-50 border-amber-200'
                })
            }
        } else if (calculatedType === 'Non-refundable') {
            setCalcResult({
                status: 'No Refund',
                message: 'Non-refundable rate types are not eligible for refunds.',
                percent: 0,
                color: 'text-rose-600 bg-rose-50 border-rose-200'
            })
        } else if (calculatedType === 'Pay at Hotel') {
            if (diffDays >= 1) {
                setCalcResult({
                    status: 'Free Cancellation',
                    message: 'No charge. Booking will be cancelled without no-show fees.',
                    percent: 100,
                    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
                })
            } else {
                setCalcResult({
                    status: 'First Night Charge',
                    message: 'No-show fee applies (equivalent to first night room rate).',
                    percent: 0,
                    color: 'text-amber-600 bg-amber-50 border-amber-200'
                })
            }
        }
    }

    const typeBadges = {
        'Flexible': 'bg-emerald-500 text-white',
        'Moderate': 'bg-blue-500 text-white',
        'Non-refundable': 'bg-rose-500 text-white',
        'Pay at Hotel': 'bg-amber-500 text-black',
    }

    const typeDetails = {
        'Flexible': {
            desc: 'Cancel up to 48 hours before check-in for a full refund.',
            charge: '0% before 48h, 100% after',
            refund: 'Original payment method, 5-10 business days'
        },
        'Moderate': {
            desc: 'Cancel up to 7 days before check-in for a full refund, or 50% refund between 7 days and 48 hours.',
            charge: '0% before 7d, 50% before 48h, 100% after',
            refund: 'Original payment method / hotel credit'
        },
        'Non-refundable': {
            desc: 'No refund after booking. Best rate guarantee applies.',
            charge: '100% at booking confirmation',
            refund: 'Not eligible'
        },
        'Pay at Hotel': {
            desc: 'No deposit required. Pay directly at check-in. Cancel at least 24 hours prior to check-in.',
            charge: '0% until check-in day, 1 night rate for no-shows',
            refund: 'No charge processed'
        }
    }

    return (
        <div className="min-h-screen bg-[#faf8f5] text-slate-800">
            {/* ─── HERO SECTION (preserved) ─── */}
            <section className="pt-28 px-6 md:px-20 pb-16 bg-[#fffbf7] border-b border-orange-100">
                <div className="max-w-5xl mx-auto">
                    <BackLink className="text-orange-700 hover:text-orange-950 !mb-8" />
                    <p className="text-orange-700 text-xs font-bold uppercase tracking-[0.4em] mb-4">{page.badge}</p>
                    <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                        {page.titleLead} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">{page.titleHighlight}</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl border-l-4 border-orange-500 pl-4 leading-relaxed">{page.subtitle}</p>
                </div>
            </section>

            {/* ─── INTRO ─── */}
            <section className="max-w-4xl mx-auto px-6 py-12">
                {page.intro.map((p, i) => (
                    <p key={i} className="text-gray-600 text-base leading-relaxed mb-4 last:mb-0">
                        {p}
                    </p>
                ))}
            </section>

            {/* ─── POLICY CATEGORY COMPARISON ─── */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">Policy Overview</p>
                    <h2 className="font-playfair text-3xl font-bold text-gray-900">{types.heading}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {types.items.map((item) => {
                        const details = typeDetails[item.title] || {}
                        return (
                            <div key={item.title} className="bg-white rounded-3xl p-6 shadow-sm border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-playfair text-xl font-bold text-gray-900">{item.title}</h3>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${typeBadges[item.title] || 'bg-slate-200 text-slate-800'}`}>
                                            {item.title === 'Flexible' ? 'Popular' : 'Active'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">{item.description}</p>
                                </div>
                                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Charge Penalty:</span>
                                        <span className="font-semibold text-gray-700">{details.charge}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Refund Method:</span>
                                        <span className="font-semibold text-gray-700 text-right">{details.refund}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* ─── REFUND CALCULATION UTILITY ─── */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-[2.5rem] border border-orange-100 p-8 md:p-12 shadow-sm grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-6 space-y-4">
                        <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">Refund Estimator</p>
                        <h2 className="font-playfair text-3xl font-bold text-slate-900">Check Refund Eligibility</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Input your check-in date, cancellation date, and the rate policy to estimate if you will receive a refund.
                        </p>
                    </div>

                    <form onSubmit={handleCalculate} className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Planned Check-In</label>
                                <input
                                    required
                                    type="date"
                                    value={stayDate}
                                    onChange={(e) => setStayDate(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-gray-800"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Cancellation Date</label>
                                <input
                                    required
                                    type="date"
                                    value={cancelDate}
                                    onChange={(e) => setCancelDate(e.target.value)}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Policy Type</label>
                            <select
                                value={calculatedType}
                                onChange={(e) => setCalculatedType(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700"
                            >
                                <option value="Flexible">Flexible (48h)</option>
                                <option value="Moderate">Moderate (7d / 48h)</option>
                                <option value="Non-refundable">Non-refundable</option>
                                <option value="Pay at Hotel">Pay at Hotel</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 text-xs font-bold transition-all shadow-md">
                            Estimate Refund
                        </button>

                        {calcResult && (
                            <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${calcResult.color}`}>
                                <p className="font-bold text-sm uppercase">Result: {calcResult.status} ({calcResult.percent}%)</p>
                                <p className="text-gray-700 font-medium">{calcResult.message}</p>
                            </div>
                        )}
                    </form>
                </div>
            </section>

            {/* ─── HOW TO CANCEL STEPS ─── */}
            <section className="bg-slate-900 text-white px-6 md:px-16 py-20 rounded-t-[3.5rem]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Self-Service Guide</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold">{howTo.heading}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {howTo.items.map((item, index) => (
                            <div key={item.title} className="relative group p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all duration-300">
                                <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>
                                <h3 className="font-bold text-white text-base mt-4">{item.title}</h3>
                                <p className="text-slate-400 text-xs mt-3 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* ─── HOSPITALITY ADD-ONS ─── */}
                    <div className="mt-24 border-t border-slate-800 pt-16">
                        <div className="text-center mb-12">
                            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Spa & Dining</p>
                            <h2 className="font-playfair text-3xl font-bold">{hospitality.heading}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {hospitality.items.map((item) => (
                                <blockquote key={item.title} className="p-6 rounded-2xl bg-slate-950 border-l-4 border-orange-500 border-y border-r border-y-slate-800 border-r-slate-800">
                                    <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed italic">"{item.description}"</p>
                                </blockquote>
                            ))}
                        </div>
                    </div>

                    {/* Contact panel */}
                    <div className="mt-20 max-w-2xl mx-auto">
                        <ContactPanel block={page.contactBlock} theme="orange" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CancelLayout
