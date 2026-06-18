import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const heroTrustPoints = [
    { icon: '🔐', title: 'Secure bookings', text: 'Encrypted payments and protected account data on every transaction.' },
    { icon: '✅', title: 'Verified partners', text: 'Properties reviewed before listing rooms or hospitality services.' },
    { icon: '🛡️', title: 'Clear policies', text: 'Cancellation rules, house policies, and offer terms shown upfront.' },
    { icon: '📞', title: 'Fast reporting', text: 'Safety desk for property issues, disputes, and urgent on-stay concerns.' },
]

const SafetyLayout = ({ page }) => {
    usePageScroll(page.slug)
    const pillars = page.sections[0]
    const guidelines = page.sections[1]

    const [concernForm, setConcernForm] = useState({
        name: '',
        email: '',
        propertyName: '',
        stayDates: '',
        description: '',
        category: 'Property Condition'
    })
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setConcernForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmitConcern = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* ─── HERO (Help Center style) ─── */}
            <section className="pt-28 pb-16 px-6 bg-emerald-600 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <BackLink className="text-white/80 hover:text-white justify-center !flex" />
                    <p className="mt-6 text-white/70 text-xs font-bold uppercase tracking-widest">{page.badge}</p>
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mt-4">
                        {page.titleLead} {page.titleHighlight}
                    </h1>
                    <p className="mt-4 text-white/90 text-lg">{page.subtitle}</p>
                    <a
                        href="#report-concern"
                        className="mt-10 mx-auto max-w-md h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center px-6 text-white/90 text-sm font-medium hover:bg-white/30 transition-colors"
                    >
                        Report a safety concern… (form below)
                    </a>
                </div>
            </section>

            {/* ─── INTRO CARD ─── */}
            <section className="px-6 md:px-16 -mt-8 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    {page.intro.map((p, i) => (
                        <p key={i} className="text-gray-600 text-center mb-3 last:mb-0 leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            {/* ─── STATS & TRUST HIGHLIGHTS ─── */}
            <section className="px-6 md:px-16 py-12">
                <div className="max-w-5xl mx-auto">
                    {page.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {page.stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="text-center p-5 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition-colors"
                                >
                                    <p className="text-2xl font-bold text-emerald-600">{s.value}</p>
                                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider leading-snug">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {heroTrustPoints.map((point) => (
                            <div
                                key={point.title}
                                className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">{point.icon}</span>
                                    <h3 className="font-bold text-sm text-gray-900">{point.title}</h3>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SAFETY PILLARS ─── */}
            <section className="px-6 md:px-16 py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">Our Core Promise</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">{pillars.heading}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.items.map((item) => (
                            <div
                                key={item.title}
                                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between min-h-[240px]"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <FooterIcon name={item.icon} className="w-6 h-6 text-white" />
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500 text-xs mt-3 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── GUEST GUIDELINES ─── */}
            <section id="report-concern" className="bg-white text-gray-900 px-6 md:px-16 py-20 border-t border-gray-100 scroll-mt-28">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Guidelines Checklist */}
                    <div className="md:col-span-7">
                        <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">Community Safety</p>
                        <h2 className="font-playfair text-4xl font-bold mb-10 text-slate-900">{guidelines.heading}</h2>
                        
                        <div className="space-y-6">
                            {guidelines.items.map((item, index) => (
                                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Reporting Form Mockup */}
                    <div className="md:col-span-5 bg-slate-50 border border-slate-150 rounded-3xl p-8 shadow-sm">
                        {!submitted ? (
                            <form onSubmit={handleSubmitConcern} className="space-y-4">
                                <div>
                                    <h3 className="font-playfair text-2xl font-bold text-slate-900">Report a Concern</h3>
                                    <p className="text-slate-500 text-xs mt-1">Submit property, guest, or safety issues directly to our safety desk.</p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={concernForm.name}
                                        onChange={handleInputChange}
                                        placeholder="Alex Miller"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 transition-all text-slate-800"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={concernForm.email}
                                        onChange={handleInputChange}
                                        placeholder="alex@example.com"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 transition-all text-slate-800"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Property Name</label>
                                        <input
                                            type="text"
                                            name="propertyName"
                                            value={concernForm.propertyName}
                                            onChange={handleInputChange}
                                            placeholder="Ocean Crest Villa"
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 transition-all text-slate-800"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Category</label>
                                        <select
                                            name="category"
                                            value={concernForm.category}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 transition-all text-slate-600"
                                        >
                                            <option value="Property Condition">Property Issue</option>
                                            <option value="Host Misbehavior">Host Issue</option>
                                            <option value="Payment Security">Payment Issue</option>
                                            <option value="Other">Other Concern</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Description</label>
                                    <textarea
                                        required
                                        rows="3"
                                        name="description"
                                        value={concernForm.description}
                                        onChange={handleInputChange}
                                        placeholder="Detail what happened. Attachments can be sent in response to our confirmation email."
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 transition-all resize-none text-slate-800"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 text-xs font-bold transition-all shadow-md active:scale-[0.98]"
                                >
                                    Send Safety Report
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Safety Case Logged</h4>
                                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                                        We have initiated a safety case review for your report. A trust representative will contact you shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-xs text-emerald-600 hover:underline font-semibold"
                                >
                                    Log another issue
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact desk */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <ContactPanel block={page.contactBlock} theme="emerald" />
                </div>
            </section>
        </div>
    )
}

export default SafetyLayout
