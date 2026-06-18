import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=900&q=80`

const supportImages = {
    'Guest bookings': '1566073771259-6a8506099945',
    'Hotel owners': '1556761175-5973dc0f32e7',
    'Billing': '1559526324-593bc073d938',
    'Technical issues': '1573164713714-d95e436ab8d6',
}

const SupportLayout = ({ page }) => {
    usePageScroll(page.slug)
    const topics = page.sections[0]
    const channels = page.sections[1]

    const [activeTopic, setActiveTopic] = useState('Guest bookings')
    const [ticketSubmitted, setTicketSubmitted] = useState(false)
    const [ticketForm, setTicketForm] = useState({
        name: '',
        email: '',
        bookingId: '',
        message: '',
        priority: 'Normal'
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTicketForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmitTicket = (e) => {
        e.preventDefault()
        setTicketSubmitted(true)
    }

    const resetTicketForm = () => {
        setTicketForm({
            name: '',
            email: '',
            bookingId: '',
            message: '',
            priority: 'Normal'
        })
        setTicketSubmitted(false)
    }

    const getTopicAdvice = (topic) => {
        switch (topic) {
            case 'Guest bookings':
                return {
                    title: 'Manage Your Stays & Reservations',
                    advice: 'For date changes, extra amenities, or cancellation requests, please have your Booking ID (HB-XXXXXX) ready. Most changes can be done directly from the guest dashboard.',
                    tips: [
                        'Check your confirmation email for direct host contacts.',
                        'Review cancellation deadlines before submitting requests.',
                        'Refunds are processed back to the original payment method.'
                    ]
                }
            case 'Hotel owners':
                return {
                    title: 'Partner Dashboard & Listings Help',
                    advice: 'If you are looking to update room availability, modify seasonal pricing, or appeal a verification status, our Partner Relations team is here to assist.',
                    tips: [
                        'PMS integrations syncing issues are resolved within 2 hours.',
                        'Use the Owner Priority Line for immediate rate updates.',
                        'Monthly payout statements can be downloaded under Reports.'
                    ]
                }
            case 'Billing':
                return {
                    title: 'Invoices, Refunds & Payment Methods',
                    advice: 'If you see an unexpected charge, need an official invoice with tax details, or want to update your payout details, our finance desk will verify your identity first.',
                    tips: [
                        'Credit card authorization issues are often bank-side.',
                        'VAT / Corporate invoices can be generated automatically.',
                        'Refunds take 5-10 business days depending on your bank.'
                    ]
                }
            case 'Technical issues':
                return {
                    title: 'Portal Login & Browser Bugs',
                    advice: 'Trouble signing into your guest account, loading the room search, or experiencing errors in the owner dashboard? Let us know your operating system and browser.',
                    tips: [
                        'Clear your browser cache or try an incognito window.',
                        'We support Safari, Chrome, Edge, and Firefox latest versions.',
                        'Password reset links expire after 1 hour.'
                    ]
                }
            default:
                return {
                    title: 'General Support Desk',
                    advice: 'How can we help you today? Pick a topic to get specialized assistance from our expert team.',
                    tips: []
                }
        }
    }

    const currentAdvice = getTopicAdvice(activeTopic)

    return (
        <div className="min-h-screen bg-[#0f172a] text-white">
            {/* ─── HERO SECTION (preserved structural bindings but fully stylized) ─── */}
            <section className="pt-28 px-6 md:px-20 pb-16 text-center max-w-5xl mx-auto">
                <BackLink className="text-slate-400 hover:text-white !mb-8" />
                <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-4">{page.badge}</p>
                <h1 className="font-playfair text-5xl md:text-7xl font-bold leading-tight">
                    {page.titleLead} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-cyan-300">{page.titleHighlight}</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">{page.subtitle}</p>
            </section>

            {/* ─── STATS GRID ─── */}
            <section className="max-w-6xl mx-auto px-6 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {page.stats.map((s) => (
                        <div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:border-[#49B9FF]/50 transition-all duration-300">
                            <p className="text-3xl font-extrabold text-[#49B9FF]">{s.value}</p>
                            <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── INTERACTIVE KNOWLEDGE ROUTER ─── */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <div className="bg-slate-900/60 rounded-[2.5rem] border border-slate-800 p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="font-playfair text-3xl font-bold">How can we assist you today?</h2>
                        <p className="text-slate-400 text-sm mt-2">Select a topic below for instant support steps and contact details.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {topics.items.map((item) => {
                            const isSelected = activeTopic === item.title
                            return (
                                <button
                                    key={item.title}
                                    onClick={() => setActiveTopic(item.title)}
                                    className={`p-6 rounded-2xl text-left border-2 transition-all duration-300 flex flex-col justify-between h-40 ${
                                        isSelected
                                            ? 'bg-gradient-to-br from-[#49B9FF]/20 to-[#0284c7]/20 border-[#49B9FF] shadow-lg shadow-cyan-950/30'
                                            : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-[#49B9FF] text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}>
                                        <FooterIcon name={item.icon} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-white">{item.title}</h3>
                                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* DYNAMIC TOPIC ADVICE & PREVIEW PANEL */}
                    <div className="grid md:grid-cols-12 gap-8 items-stretch bg-slate-950/60 rounded-3xl p-6 md:p-8 border border-slate-800">
                        <div className="md:col-span-8 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-[#49B9FF] uppercase tracking-widest">{activeTopic} Help</span>
                                <h3 className="font-playfair text-2xl font-bold mt-2 text-white">{currentAdvice.title}</h3>
                                <p className="text-slate-300 text-sm mt-4 leading-relaxed">{currentAdvice.advice}</p>

                                <div className="mt-6">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Check Tips:</h4>
                                    <ul className="space-y-2">
                                        {currentAdvice.tips.map((tip, index) => (
                                            <li key={index} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#49B9FF] mt-1.5 shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 rounded-2xl overflow-hidden relative min-h-[220px]">
                            <img
                                src={unsplash(supportImages[activeTopic] || '1556761175-5973dc0f32e7')}
                                alt={activeTopic}
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CONTACT CHANNELS & TICKET SYSTEM ─── */}
            <section className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-12 gap-8 items-start">
                {/* Contact Channels List */}
                <div className="md:col-span-6 space-y-4">
                    <h2 className="font-playfair text-3xl font-bold mb-6">Contact Channels</h2>
                    {channels.items.map((item, i) => (
                        <div
                            key={item.title}
                            className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shadow-inner shrink-0 text-[#49B9FF]">
                                    <FooterIcon
                                        name={i === 0 ? 'mail' : i === 1 ? 'phone' : i === 2 ? 'chat' : 'key'}
                                        className="w-5 h-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simulated Ticket Submission Form */}
                <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#49B9FF] to-cyan-400" />
                    
                    {!ticketSubmitted ? (
                        <form onSubmit={handleSubmitTicket} className="space-y-4">
                            <div>
                                <h3 className="font-playfair text-2xl font-bold text-white">Submit a Support Ticket</h3>
                                <p className="text-slate-400 text-xs mt-1">We typically reply within 2-4 business hours.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={ticketForm.name}
                                        onChange={handleInputChange}
                                        placeholder="Jane Doe"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#49B9FF] transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={ticketForm.email}
                                        onChange={handleInputChange}
                                        placeholder="jane@example.com"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#49B9FF] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Booking ID (Optional)</label>
                                    <input
                                        type="text"
                                        name="bookingId"
                                        value={ticketForm.bookingId}
                                        onChange={handleInputChange}
                                        placeholder="HB-123456"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#49B9FF] transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Priority Level</label>
                                    <select
                                        name="priority"
                                        value={ticketForm.priority}
                                        onChange={handleInputChange}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-400 focus:outline-none focus:border-[#49B9FF] transition-all"
                                    >
                                        <option value="Normal">Normal (default)</option>
                                        <option value="Urgent">Urgent (Stays within 24h)</option>
                                        <option value="Critical">Critical (Check-in issues)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Describe Your Issue</label>
                                <textarea
                                    required
                                    rows="4"
                                    name="message"
                                    value={ticketForm.message}
                                    onChange={handleInputChange}
                                    placeholder="Please provide details about your request or issue..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#49B9FF] transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#49B9FF] to-cyan-400 text-white rounded-xl py-3 text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all duration-300"
                            >
                                Submit Support Ticket
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-10 space-y-6">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                                ✓
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-playfair text-2xl font-bold text-white">Ticket Submitted Successfully!</h3>
                                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                                    Thanks {ticketForm.name}, we've received your request. A confirmation email has been sent to <strong>{ticketForm.email}</strong>.
                                </p>
                            </div>
                            <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 text-left max-w-sm mx-auto">
                                <p className="text-xs text-slate-400"><strong>Ticket ID:</strong> TKT-{Math.floor(100000 + Math.random() * 900000)}</p>
                                <p className="text-xs text-slate-400 mt-1"><strong>Topic:</strong> {activeTopic}</p>
                                <p className="text-xs text-slate-400 mt-1"><strong>Priority:</strong> {ticketForm.priority}</p>
                            </div>
                            <button
                                onClick={resetTicketForm}
                                className="text-xs font-semibold text-[#49B9FF] hover:underline"
                            >
                                Submit another ticket
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── BEFORE YOU WRITE PRE-SUPPORT NOTICE ─── */}
            <section className="px-6 md:px-20 pb-24 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2rem] border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.3em] mb-2">{page.contactBlock.title}</p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{page.contactBlock.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {page.contactBlock.details.map((detail, index) => (
                                <div key={index} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-center">
                                    <p className="text-xs text-slate-400 leading-normal">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SupportLayout
