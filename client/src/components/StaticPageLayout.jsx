import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const StaticPageLayout = ({ page }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [page.slug])

    const accent = page.accent || 'blue'

    const badgeClass =
        accent === 'orange'
            ? 'from-orange-50 to-pink-50 border-orange-200 text-orange-600'
            : accent === 'emerald'
              ? 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-700'
              : 'from-blue-50 to-cyan-50 border-blue-200 text-blue-600'

    const gradientTitle =
        accent === 'orange'
            ? 'from-orange-400 to-pink-500'
            : accent === 'emerald'
              ? 'from-emerald-500 to-teal-600'
              : 'from-[#49B9FF] to-blue-700'

    const dotColor =
        accent === 'orange' ? 'bg-orange-400' : accent === 'emerald' ? 'bg-emerald-500' : 'bg-[#49B9FF]'

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <div className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 ${accent === 'orange' ? 'bg-orange-100' : accent === 'emerald' ? 'bg-emerald-100' : 'bg-blue-100'}`} />
            <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl translate-x-1/3 pointer-events-none opacity-30 ${accent === 'orange' ? 'bg-pink-100' : 'bg-violet-100'}`} />

            {/* Hero */}
            <section className="relative pt-28 pb-16 px-6 md:px-16 lg:px-24 xl:px-32 z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 mb-8 transition-colors">
                    <span>←</span> Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div>
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${badgeClass} border px-4 py-2 rounded-full text-xs font-semibold mb-6`}>
                            <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
                            {page.badge}
                        </div>
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {page.titleLead && <span>{page.titleLead} </span>}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientTitle}`}>
                                {page.titleHighlight || page.title}
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">{page.subtitle}</p>
                        <div className="flex items-center gap-3">
                            <div className={`h-[2px] w-12 bg-gradient-to-r from-transparent ${accent === 'orange' ? 'to-orange-400' : accent === 'emerald' ? 'to-emerald-500' : 'to-[#49B9FF]'}`} />
                            <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
                            <div className={`h-[2px] w-12 bg-gradient-to-l from-transparent ${accent === 'orange' ? 'to-orange-400' : accent === 'emerald' ? 'to-emerald-500' : 'to-[#49B9FF]'}`} />
                        </div>
                    </div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] aspect-[4/3]">
                        <img src={page.heroImage} alt={page.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-12 z-10">
                <div className="max-w-4xl mx-auto">
                    {page.intro.map((para, i) => (
                        <p key={i} className="text-gray-600 text-base md:text-lg leading-relaxed mb-5 last:mb-0">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* Stats */}
            {page.stats?.length > 0 && (
                <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-12 z-10">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {page.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center p-6 rounded-3xl bg-[#F6F9FC] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                            >
                                <p className={`text-3xl md:text-4xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r ${gradientTitle}`}>
                                    {stat.value}
                                </p>
                                <p className="text-sm text-gray-500 mt-2 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Feature cards */}
            {page.sections?.map((section, idx) => (
                <section
                    key={section.heading}
                    className={`relative px-6 md:px-16 lg:px-24 xl:px-32 py-16 z-10 ${idx % 2 === 1 ? 'bg-gradient-to-b from-gray-50/80 to-white' : ''}`}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                            {section.heading}
                        </h2>
                        {section.subheading && (
                            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">{section.subheading}</p>
                        )}
                        {!section.subheading && <div className="mb-10" />}

                        {section.type === 'cards' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    >
                                        {item.icon && (
                                            <span className="text-2xl mb-4 block">{item.icon}</span>
                                        )}
                                        <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'list' && (
                            <div className="max-w-3xl mx-auto space-y-4">
                                {section.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-colors"
                                    >
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${accent === 'orange' ? 'bg-gradient-to-r from-orange-400 to-pink-500' : accent === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-[#49B9FF] to-blue-600'}`}>
                                            •
                                        </span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'steps' && (
                            <ol className="max-w-3xl mx-auto space-y-6">
                                {section.items.map((item, i) => (
                                    <li key={item.title} className="flex gap-5">
                                        <span className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold ${accent === 'orange' ? 'bg-gradient-to-r from-orange-400 to-pink-500' : accent === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-[#49B9FF] to-blue-600'}`}>
                                            {i + 1}
                                        </span>
                                        <div className="pt-1">
                                            <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-500 leading-relaxed">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {section.type === 'faq' && (
                            <div className="max-w-3xl mx-auto space-y-4">
                                {section.items.map((item) => (
                                    <div key={item.title} className="p-6 rounded-2xl bg-[#F6F9FC] border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'grid-text' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {section.items.map((item) => (
                                    <div key={item.title} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                                        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            ))}

            {/* Contact / info block — text only */}
            {page.contactBlock && (
                <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 pb-24 z-10">
                    <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-[2.5rem] bg-[#F6F9FC] border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                        <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">{page.contactBlock.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">{page.contactBlock.description}</p>
                        <ul className="space-y-3">
                            {page.contactBlock.details.map((line) => (
                                <li key={line} className="flex items-start gap-3 text-gray-600">
                                    <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </div>
    )
}

export default StaticPageLayout
