import React, { useState } from 'react'
import { BackLink, ContactPanel, usePageScroll } from './FooterShared'
import { FooterIcon } from './FooterIcons'

const quickActions = [
    { icon: 'calendar', label: 'Change Booking', color: 'from-blue-500 to-indigo-600' },
    { icon: 'receipt', label: 'Request Receipt', color: 'from-emerald-500 to-teal-600' },
    { icon: 'bell', label: 'Add Amenities', color: 'from-purple-500 to-violet-600' },
    { icon: 'x', label: 'Cancel Stay', color: 'from-rose-500 to-pink-600' },
    { icon: 'message-square', label: 'Live Chat', color: 'from-amber-500 to-orange-500' },
    { icon: 'phone', label: 'Call Support', color: 'from-cyan-500 to-blue-500' },
]

const faqCategories = ['All', 'Booking', 'Payment', 'Cancellation', 'Hospitality']

const allFaqs = [
    { q: 'How do I apply an exclusive offer?', a: 'Open the offer detail page to review terms and eligible dates. Promo codes are shown in the redemption steps at checkout. Offers auto-apply when your dates match the criteria.', cat: 'Booking' },
    { q: 'Can I modify my check-in dates?', a: 'Date changes depend on the hotel\'s cancellation policy and availability. Contact support or the property directly. We recommend checking your booking confirmation for modification windows.', cat: 'Booking' },
    { q: 'What is hospitality ordering?', a: 'Book spa, dining, tours, or other services from the Hospitality page. Orders appear in My Bookings alongside your room reservation and can be managed or cancelled separately.', cat: 'Hospitality' },
    { q: 'Is my payment secure?', a: 'We use AES-256 encryption and PCI-DSS compliant payment processors. Pay at Hotel options are confirmed directly at the property with no card stored.', cat: 'Payment' },
    { q: 'How do I get a refund?', a: 'Refunds follow the property\'s cancellation policy. Approved refunds process within 5–10 business days to your original payment method. Email cancel@hoteldemo.com with your booking ID.', cat: 'Cancellation' },
    { q: 'Can I cancel a spa or dining order?', a: 'Hospitality orders can typically be cancelled at least 48 hours before the scheduled service. Contact support with your booking ID for assistance.', cat: 'Hospitality' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and bank transfers for select bookings. Pay at Hotel is available at participating properties.', cat: 'Payment' },
    { q: 'Do I need an account to book?', a: 'Yes, a free guest account is required to complete a booking. This allows you to track reservations, manage hospitality orders, and contact properties through our secure messaging system.', cat: 'Booking' },
]

const HelpLayout = ({ page }) => {
    usePageScroll(page.slug)
    const steps = page.sections[0]
    const faqs = page.sections[1]
    const [activeFaqCat, setActiveFaqCat] = useState('All')
    const [openFaq, setOpenFaq] = useState(0)
    const [clickedAction, setClickedAction] = useState(null)

    const filteredFaqs = activeFaqCat === 'All' ? allFaqs : allFaqs.filter(f => f.cat === activeFaqCat)

    return (
        <div className="min-h-screen bg-white">
            {/* ─── HERO (preserved) ─── */}
            <section className="pt-28 pb-16 px-6 bg-[#49B9FF] text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <BackLink className="text-white/80 hover:text-white justify-center !flex" />
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mt-8">
                        {page.titleLead} {page.titleHighlight}
                    </h1>
                    <p className="mt-4 text-white/90 text-lg">{page.subtitle}</p>
                    <div className="mt-10 mx-auto max-w-md h-14 rounded-full bg-white/20 backdrop-blur flex items-center px-6 text-white/70 text-sm">
                        Search help articles… (browse below)
                    </div>
                </div>
            </section>

            {/* ─── INTRO CARD ─── */}
            <section className="px-6 md:px-16 -mt-8 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    {page.intro.map((p, i) => (
                        <p key={i} className="text-gray-600 text-center mb-3 last:mb-0">{p}</p>
                    ))}
                </div>
            </section>

            {/* ─── QUICK ACTIONS ─── */}
            <section className="px-6 md:px-16 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-2">Quick Actions</p>
                        <h2 className="font-playfair text-3xl font-bold text-gray-900">What do you need help with?</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {quickActions.map((action) => (
                            <button
                                key={action.label}
                                onClick={() => setClickedAction(action.label)}
                                className={`group relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                    clickedAction === action.label
                                        ? 'border-[#49B9FF] bg-blue-50 shadow-md'
                                        : 'border-gray-100 bg-white hover:border-gray-200'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    <FooterIcon name={action.icon} className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{action.label}</span>
                                {clickedAction === action.label && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#49B9FF] rounded-full flex items-center justify-center text-white text-[9px] font-bold">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                    {clickedAction && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-200 text-center">
                            <p className="text-sm text-[#49B9FF] font-semibold">✓ We've opened <strong>{clickedAction}</strong> — a support agent will assist you shortly.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── STEPS TIMELINE ─── */}
            <section className="px-6 md:px-16 py-16 bg-[#F6F9FC]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-2">Getting Started</p>
                        <h2 className="font-playfair text-3xl font-bold text-gray-900">{steps.heading}</h2>
                    </div>
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[#49B9FF] via-blue-300 to-indigo-300 hidden md:block" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {steps.items.map((item, i) => (
                                <div key={item.title} className="relative flex flex-col items-center text-center group">
                                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#49B9FF] to-indigo-600 text-white font-black text-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:shadow-blue-300 transition-all duration-300">
                                        {i + 1}
                                        <div className="absolute inset-0 rounded-full border-4 border-white shadow-inner" />
                                    </div>
                                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 w-full">
                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ACCORDION ─── */}
            <section className="px-6 md:px-16 py-20">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-[#49B9FF] text-xs font-bold uppercase tracking-[0.4em] mb-2">FAQ</p>
                        <h2 className="font-playfair text-3xl font-bold text-gray-900">{faqs.heading}</h2>
                    </div>

                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {faqCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setActiveFaqCat(cat); setOpenFaq(0) }}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                    activeFaqCat === cat
                                        ? 'bg-[#49B9FF] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {filteredFaqs.map((faq, i) => (
                            <div
                                key={faq.q}
                                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                                    openFaq === i ? 'border-[#49B9FF] shadow-lg shadow-blue-50' : 'border-gray-100 hover:border-gray-200'
                                }`}
                            >
                                <button
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white"
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                            openFaq === i ? 'bg-[#49B9FF] text-white' : 'bg-gray-100 text-gray-500'
                                        } transition-colors duration-300`}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#49B9FF]' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-5 bg-white">
                                        <div className="ml-11 text-sm text-gray-600 leading-relaxed border-l-2 border-[#49B9FF] pl-4">
                                            {faq.a}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CONTACT ─── */}
            <section className="px-6 md:px-16 pb-24 max-w-2xl mx-auto">
                <ContactPanel block={page.contactBlock} theme="emerald" />
            </section>
        </div>
    )
}

export default HelpLayout
