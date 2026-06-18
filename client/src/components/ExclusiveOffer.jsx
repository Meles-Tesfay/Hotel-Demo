import React from 'react'
import { Link } from 'react-router-dom'
import { exclusiveOffers } from '../assets/assets'

// Single unified orange accent for all cards
const cardConfig = {
    badge: 'from-orange-400 to-pink-500',
    border: 'hover:border-orange-300',
    glow: 'hover:shadow-[0_20px_50px_rgba(249,115,22,0.22)]',
    tag: 'bg-orange-50 text-orange-600 border-orange-200',
    btnAccent: 'from-orange-400 to-orange-500',
    accentLine: 'from-orange-400 to-pink-500',
    lightBg: 'group-hover:bg-orange-50/50',
}

const ExclusiveOffer = () => {
    return (
        <div className='relative flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 py-24 overflow-hidden bg-white group/section'>

            {/* Soft ambient background blobs — same as FeaturedDestination */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 group-hover/section:-translate-x-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none transition-all duration-1000 group-hover/section:translate-x-1/3"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none transition-all duration-1000 group-hover/section:scale-125"></div>

            {/* Section Header */}
            <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full mb-14 gap-6 relative z-10'>
                <div>
                    {/* Accent pill */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 px-5 py-2 rounded-full text-sm font-medium text-orange-600 mb-5 shadow-sm cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(249,115,22,0.25)] hover:border-orange-300">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                        ✦ Limited Time Only ✦
                    </div>
                    <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default'>
                        <span className="inline-block transition-all duration-500 hover:-translate-y-1">Exclusive</span>
                        {' '}
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-500 hover:-translate-y-1 hover:from-pink-400 hover:to-orange-400 hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">Offers</span>
                    </h2>

                    {/* Animated divider */}
                    <div className="flex items-center gap-3 mb-5 group/divider cursor-default">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-orange-400 transition-all duration-700 group-hover/divider:w-24 group-hover/divider:shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-400 transition-all duration-500 group-hover/divider:scale-150 group-hover/divider:shadow-[0_0_14px_rgba(249,115,22,1)] group-hover/divider:bg-white group-hover/divider:ring-4 group-hover/divider:ring-orange-400"></div>
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-orange-400 transition-all duration-700 group-hover/divider:w-24 group-hover/divider:shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                    </div>

                    {/* Description — glass card reveal on hover */}
                    <div className="relative group/desc cursor-default max-w-lg">
                        {/* Glass background reveal */}
                        <div className="absolute inset-0 -m-3 rounded-2xl bg-gradient-to-r from-orange-50/0 via-pink-50/0 to-orange-50/0 scale-95 opacity-0 group-hover/desc:opacity-100 group-hover/desc:scale-100 group-hover/desc:from-orange-50/80 group-hover/desc:via-pink-50/60 group-hover/desc:to-orange-50/80 transition-all duration-500 border border-transparent group-hover/desc:border-orange-100"></div>
                        <p className='relative z-10 text-gray-600 text-base md:text-lg font-medium leading-relaxed transition-all duration-500 group-hover/desc:text-gray-900 group-hover/desc:text-xl group-hover/desc:font-semibold px-3 py-1.5'>
                            Take advantage of our limited-time offers and special packages to enhance your stay.
                        </p>
                        {/* Bottom accent sweep line */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full group-hover/desc:w-3/4 transition-all duration-700"></div>
                    </div>
                </div>

                {/* View All — outline ghost style matching FeaturedDestination */}
                <Link to="/offers" onClick={() => scrollTo(0, 0)} className="relative group/va flex-shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover/va:opacity-30 blur-md transition-all duration-500"></div>
                    <span className="relative flex items-center gap-3 px-8 py-3.5 rounded-2xl font-semibold text-base border-2 border-orange-400 text-orange-500 bg-transparent overflow-hidden transition-all duration-300 group-hover/va:text-white group-hover/va:border-pink-500 group-hover/va:-translate-y-0.5 active:scale-95">
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 translate-x-[-101%] group-hover/va:translate-x-0 transition-transform duration-500 ease-out"></span>
                        <span className="relative z-10 flex items-center gap-2.5">
                            View All Offers
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-orange-400 group-hover/va:border-white transition-all duration-300 group-hover/va:bg-white/20">
                                <svg className="w-3.5 h-3.5 group-hover/va:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </span>
                    </span>
                </Link>
            </div>

            {/* Offer Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10'>
                {exclusiveOffers.map((item) => {
                    const cfg = cardConfig
                    return (
                        <Link
                            key={item._id}
                            to={`/offers/${item._id}`}
                            onClick={() => scrollTo(0, 0)}
                            className={`group relative rounded-3xl overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-3 ${cfg.glow} ${cfg.border} shadow-[0_4px_20px_rgba(0,0,0,0.07)] block`}
                        >
                            {/* Image with zoom */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle gradient at bottom of image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Discount badge */}
                                <div className={`absolute top-3 left-3 bg-gradient-to-r ${cfg.badge} px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1.5`}>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {item.priceOff}% OFF
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className={`p-5 transition-all duration-500 ${cfg.lightBg}`}>
                                {/* Expiry tag */}
                                <div className={`inline-flex items-center gap-1.5 ${cfg.tag} border text-xs font-medium px-3 py-1 rounded-full mb-3`}>
                                    <span>⏱</span> Expires {item.expiryDate}
                                </div>

                                <p className='font-playfair text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors'>{item.title}</p>
                                <p className='text-gray-500 text-sm leading-relaxed mb-5'>{item.description}</p>

                                {/* CTA row */}
                                <div className="flex items-center justify-between mt-auto pt-2">
                                    <span className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${cfg.btnAccent} shadow-md shadow-orange-500/20 transition-all duration-300 group-hover:shadow-[0_4px_15px_rgba(249,115,22,0.4)] group-hover:-translate-y-0.5 overflow-hidden`}>
                                        View Offer
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">Save {item.priceOff}%</span>
                                </div>
                            </div>

                            {/* Bottom colorful accent line sweeps in on hover */}
                            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cfg.accentLine} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ExclusiveOffer