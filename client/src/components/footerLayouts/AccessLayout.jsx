import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const AccessLayout = ({ page }) => {
    usePageScroll(page.slug)
    const digital = page.sections[0]
    const property = page.sections[1]
    const request = page.sections[2]

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [requestForm, setRequestForm] = useState({
        name: '',
        email: '',
        details: '',
        assistanceType: 'Mobility Access'
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setRequestForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmitRequest = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* ─── HERO SECTION (preserved) ─── */}
            <section className="pt-28 px-6 md:px-20 pb-16 bg-gradient-to-br from-indigo-900 to-indigo-950 text-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    <BackLink className="text-indigo-200 hover:text-white !mb-8" />
                    <p className="text-indigo-300 text-sm font-bold uppercase mt-8 tracking-widest">{page.badge}</p>
                    <h1 className="font-playfair text-5xl md:text-7xl font-bold mt-4 max-w-3xl leading-tight">
                        {page.titleLead} <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300">{page.titleHighlight}</span>
                    </h1>
                    <p className="text-indigo-100 text-lg md:text-xl mt-6 max-w-2xl font-light">{page.subtitle}</p>
                </div>
                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
            </section>

            {/* ─── INTRO (compact) ─── */}
            <section className="px-6 md:px-20 -mt-6 pb-12 relative z-10">
                <div className="max-w-4xl mx-auto rounded-2xl border border-indigo-500/20 bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 shadow-xl">
                    <div className="flex items-start gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                            <FooterIcon name="♿" className="w-5 h-5 text-indigo-300" />
                        </div>
                        <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest pt-2">Our commitment</p>
                    </div>
                    {page.intro.map((p, i) => (
                        <p
                            key={i}
                            className={`leading-relaxed ${i === 0 ? 'text-slate-200 text-sm md:text-base' : 'text-slate-400 text-sm mt-3'}`}
                        >
                            {p}
                        </p>
                    ))}
                    {page.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800">
                            {page.stats.map((s) => (
                                <div key={s.label} className="text-center sm:text-left">
                                    <p className="text-xl font-bold text-indigo-400">{s.value}</p>
                                    <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ─── DIGITAL WCAG STANDARDS ─── */}
            <section className="py-16 px-6 md:px-20 bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Online Experience</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold">{digital.heading}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {digital.items.map((item, i) => (
                            <div key={item.title} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
                                <span className="text-indigo-400 font-mono text-xs font-bold bg-indigo-550/10 px-2 py-0.5 rounded-full">WCAG 2.1 · AA compliant</span>
                                <h3 className="font-bold text-lg mt-4 mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROPERTY ACCESSIBILITY FEATURES ─── */}
            <section className="py-16 px-6 md:px-20 bg-slate-900/60 border-t border-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">On-Property Accommodations</p>
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold">{property.heading}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {property.items.map((item, i) => (
                            <div key={item.title} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                                    <FooterIcon name={item.icon} className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-base text-white mt-2">{item.title}</h3>
                                <p className="text-slate-400 text-xs mt-3 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── REQUEST ACCOMMODATIONS & INTERACTIVE FORM ─── */}
            <section className="py-16 px-6 md:px-20 bg-white text-gray-900 rounded-t-[3rem] shadow-2xl">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                    
                    {/* Left side: Info block */}
                    <div className="md:col-span-7 space-y-8">
                        <div>
                            <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">Request Process</p>
                            <h2 className="font-playfair text-4xl font-bold text-slate-900">{request.heading}</h2>
                        </div>
                        
                        <div className="space-y-4">
                            {request.items.map((item) => (
                                <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Mockup Request Form */}
                    <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                        {!formSubmitted ? (
                            <form onSubmit={handleSubmitRequest} className="space-y-4">
                                <div>
                                    <h3 className="font-playfair text-2xl font-bold text-slate-900 font-serif">Assisted Stay Booking</h3>
                                    <p className="text-slate-500 text-xs mt-1">Specify details so our partner coordinators can verify with the property.</p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={requestForm.name}
                                        onChange={handleInputChange}
                                        placeholder="Jordan Vance"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={requestForm.email}
                                        onChange={handleInputChange}
                                        placeholder="jordan@example.com"
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Accommodation Category</label>
                                    <select
                                        name="assistanceType"
                                        value={requestForm.assistanceType}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-600 focus:outline-none focus:border-indigo-500"
                                    >
                                        <option value="Mobility Access">Mobility & Step-free Access</option>
                                        <option value="Visual / Auditory">Visual / Auditory Aid</option>
                                        <option value="Service Animal">Service Animal Accommodation</option>
                                        <option value="Other Assistance">Other Request</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Provide Details</label>
                                    <textarea
                                        required
                                        rows="3"
                                        name="details"
                                        value={requestForm.details}
                                        onChange={handleInputChange}
                                        placeholder="E.g. Wheelchair height requirements, roll-in shower request, or braille materials..."
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 resize-none"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 text-xs font-bold shadow-md transition-all active:scale-[0.98]">
                                    Submit Stay Request
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 font-serif">Request Logged</h4>
                                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                                        Your request is sent to our inclusion team. We will confirm accessibility with the hotel manager and email you in 24 hours.
                                    </p>
                                </div>
                                <button onClick={() => setFormSubmitted(false)} className="text-xs text-indigo-600 hover:underline font-semibold">
                                    Submit another request
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact box */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <ContactPanel block={page.contactBlock} />
                </div>
            </section>
        </div>
    )
}

export default AccessLayout
