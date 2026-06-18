import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOfferById, offerTheme } from '../data/exclusiveOffersData'
import { useAppContext } from '../context/AppContext'

const OfferDetail = () => {
    const { id } = useParams()
    const { currency } = useAppContext()
    const offer = getOfferById(id)
    const [mainImage, setMainImage] = useState(null)

    const gallery = offer?.detailGallery ?? []

    useEffect(() => {
        if (offer?.detailGallery?.length) {
            setMainImage(offer.detailGallery[0])
            scrollTo(0, 0)
        }
    }, [offer])

    if (!offer) {
        return (
            <div className="pt-32 pb-24 px-6 text-center min-h-[60vh]">
                <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Offer not found</h1>
                <Link to="/offers" className="text-orange-500 font-medium hover:underline">Exclusive offers</Link>
            </div>
        )
    }

    const cfg = offerTheme

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

            {/* Hero */}
            <section className="relative pt-28 pb-12 px-6 md:px-16 lg:px-24 xl:px-32 z-10">
                <Link
                    to="/offers"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-orange-600 mb-8 transition-colors"
                >
                    <span className="text-orange-400">←</span>
                    Exclusive offers
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    <div className="group/gallery space-y-4">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(249,115,22,0.15)] aspect-[4/3]">
                            <img
                                src={mainImage}
                                alt={offer.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/gallery:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className={`absolute top-4 left-4 bg-gradient-to-r ${cfg.badge} px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg flex items-center gap-2`}>
                                {offer.priceOff}% OFF
                            </div>
                            <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-gray-800">
                                {offer.category}
                            </span>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {gallery.map((img, i) => (
                                <div
                                    key={i}
                                    role="presentation"
                                    onClick={() => setMainImage(img)}
                                    className={`relative rounded-2xl overflow-hidden aspect-square cursor-pointer transition-all duration-300 hover:-translate-y-1 ${mainImage === img ? 'ring-2 ring-orange-400 ring-offset-2 shadow-lg shadow-orange-200/50' : 'opacity-75 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className={`inline-flex items-center gap-1.5 ${cfg.tag} border text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit`}>
                            <span>⏱</span> Valid until {offer.expiryFull}
                        </div>

                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                            {offer.title}
                        </h1>
                        <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-medium mb-6">
                            {offer.tagline}
                        </p>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-orange-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                            <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-orange-400" />
                        </div>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">{offer.longDescription}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="col-span-2 sm:col-span-2 px-5 py-5 rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Package pricing</p>
                                <p className="text-gray-400 line-through text-sm">{currency}{offer.originalFrom}</p>
                                <p className="text-3xl font-bold text-gray-900">{currency}{offer.discountedFrom}</p>
                                <p className="text-xs text-gray-500 mt-2">{offer.currencyNote}</p>
                                <p className={`mt-3 inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${cfg.badge}`}>
                                    Save {offer.priceOff}% on eligible stays
                                </p>
                            </div>
                            <div className="px-5 py-5 rounded-3xl bg-[#F6F9FC] border border-gray-100">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Stay length</p>
                                <p className="text-xl font-bold text-gray-900">{offer.validNights}</p>
                            </div>
                            <div className="px-5 py-5 rounded-3xl bg-[#F6F9FC] border border-gray-100">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Guests</p>
                                <p className="text-xl font-bold text-gray-900">Up to {offer.maxGuests}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-16 z-10">
                <div className="text-center mb-12">
                    <p className="text-sm font-medium text-orange-500 mb-2">✦ Package perks ✦</p>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
                        Package <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Highlights</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offer.highlights.map((h, i) => (
                        <div
                            key={h.title}
                            className="group p-6 rounded-3xl bg-[#F6F9FC] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)] hover:border-orange-200 transition-all duration-500"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.badge} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                                {i + 1}
                            </div>
                            <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">{h.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                            <div className={`mt-4 h-[2px] w-12 bg-gradient-to-r ${cfg.accentLine} group-hover:w-full transition-all duration-500`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Inclusions + redeem */}
            <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-orange-50/40 to-white z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                        <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 text-lg">✓</span>
                            What&apos;s Included
                        </h3>
                        <ul className="space-y-4">
                            {offer.inclusions.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-600">
                                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                        <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 text-lg">→</span>
                            How to Redeem
                        </h3>
                        <ol className="space-y-5">
                            {offer.howToRedeem.map((step, i) => (
                                <li key={step} className="flex gap-4">
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${cfg.badge} text-white text-sm font-bold flex items-center justify-center`}>
                                        {i + 1}
                                    </span>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-1">{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-16 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Participating <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Destinations</span>
                    </h3>
                    <p className="text-gray-500 text-sm mb-8">Available at select properties in these locations</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {offer.destinations.map((dest) => (
                            <span
                                key={dest}
                                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 text-orange-700 text-sm font-semibold"
                            >
                                {dest}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms — always visible */}
            <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 pb-24 z-10">
                <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-[2.5rem] bg-[#F6F9FC] border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
                    <p className="text-sm text-gray-500 mb-6">Offer valid until {offer.expiryFull}</p>
                    <ul className="space-y-3">
                        {offer.terms.map((t) => (
                            <li key={t} className="text-sm md:text-base text-gray-600 flex gap-3 leading-relaxed">
                                <span className="text-orange-400 font-bold">•</span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cfg.accentLine} opacity-50`} />
        </div>
    )
}

export default OfferDetail
