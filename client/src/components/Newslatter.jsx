import React from 'react'

const Newslatter = () => {
    return (
        <div className="relative flex flex-col items-center max-w-6xl w-full mx-auto px-6 md:px-12 py-16 my-10 bg-white rounded-[2rem] overflow-hidden group/news shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none transition-all duration-1000 group-hover/news:bg-blue-50/80"></div>
            
            <div className="relative z-10 flex flex-col items-center w-full group/content">
                {/* Accent Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 mb-6 uppercase tracking-widest shadow-sm hover:scale-110 hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                    Newsletter
                </div>

                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 transition-transform duration-500 group-hover/content:scale-105">
                    Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-[length:200%_auto] hover:animate-[pulse_2s_ease-in-out_infinite] transition-all duration-500 cursor-default">Inspired</span>
                </h2>
                
                <div className="relative group/desc cursor-default max-w-2xl mb-10">
                    {/* Background glass reveal */}
                    <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-blue-50/0 via-indigo-50/0 to-blue-50/0 scale-95 opacity-0 group-hover/desc:opacity-100 group-hover/desc:scale-100 group-hover/desc:from-blue-50/80 group-hover/desc:via-indigo-50/60 group-hover/desc:to-blue-50/80 transition-all duration-500 border border-transparent group-hover/desc:border-blue-100 backdrop-blur-sm shadow-xl shadow-blue-500/5"></div>
                    <p className="relative z-10 text-gray-500 text-center text-base md:text-lg leading-relaxed transition-all duration-500 group-hover/desc:text-gray-900 group-hover/desc:text-xl group-hover/desc:font-semibold">
                        Join our VIP newsletter and be the first to discover hidden gems, exclusive resort offers, and highly curated travel itineraries.
                    </p>
                    {/* Bottom accent line that grows on hover */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover/desc:w-3/4 transition-all duration-700"></div>
                </div>

                {/* Input form */}
                <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-2xl gap-3">
                    <div className="relative w-full group/input">
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-0 group-hover/input:opacity-30 group-focus-within/input:opacity-100 blur transition-all duration-500"></div>
                        <input 
                            type="email" 
                            className="relative w-full bg-gray-50 text-gray-900 px-6 py-4 border border-gray-200 rounded-2xl outline-none focus:bg-white transition-all duration-300 placeholder:text-gray-400 font-medium z-10 hover:border-blue-300" 
                            placeholder="Enter your email address" 
                            required
                        />
                    </div>
                    
                    <button className="relative group/btn w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-500 shadow-lg shadow-gray-900/20 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] active:scale-95 flex-shrink-0 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                            Subscribe
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                    </button>
                </div>

                <p className="text-gray-400 mt-6 text-xs text-center flex items-center justify-center gap-1.5 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </div>
    )
}

export default Newslatter