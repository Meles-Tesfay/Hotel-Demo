import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import heroVideo from "../assets/sobana/sobana.mp4";

const Hero = () => {
  const { navigate, user, axios, setSearchedCities } = useAppContext();
  const [destination, setDestination] = useState("");
  const onSearch = async (e) => {
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);

    if (user) {
      await axios.post("/api/user/store-recent-search", {
        recentSearchedCity: destination,
      });
      setSearchedCities((prev) => {
        const updated = [...prev, destination];
        if (updated.length > 3) updated.shift();
        return updated;
      });
    }
  };

  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24
         xl:px-32 pt-32 pb-10 text-white min-h-[80vh] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability while keeping the image vibrant on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 pointer-events-none"></div>

      <div className="relative z-10 w-full animate-fade-in-up mt-10">

        
        <p className="font-['Playfair_Display'] italic text-[#f3e5ab] text-xl md:text-2xl mt-4 mb-2 drop-shadow-lg opacity-90 tracking-wide">
          Where every stay is a story
        </p>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-[80px] lg:leading-[90px] font-extrabold max-w-4xl drop-shadow-2xl leading-tight group/title cursor-default transition-all duration-500 hover:translate-x-2">
          Your perfect stay <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] transition-all duration-500 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
            starts here.
          </span>
        </h1>

        <p className="max-w-2xl mt-6 text-lg md:text-2xl text-gray-200 font-light drop-shadow-lg leading-relaxed transition-all duration-500 hover:translate-x-1 cursor-default tracking-wide">
          <span className="text-white font-semibold">Comfort</span> • <span className="text-white font-semibold">Quality</span> • <span className="text-white font-semibold">Excellent Service</span>
        </p>



        {/* Premium Widget Search Bar — desktop/tablet only */}
        <form
          onSubmit={onSearch}
          className="hidden md:flex bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-[2rem] p-2.5 mt-8 flex-row items-stretch gap-2.5 w-full max-w-[960px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)] relative z-20 border border-transparent"
        >


          {/* Check In */}
          <div className="flex-1 w-full bg-gray-50/80 hover:bg-[#fdfbf7] border border-transparent hover:border-[#d4af37] rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-[#c5a059] focus-within:ring-4 focus-within:ring-[#f3e5ab] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={assets.calenderIcon}
                alt="Check In"
                className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300"
              />
              <label
                htmlFor="checkIn"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-[#c5a059] transition-colors duration-300"
              >
                Check in
              </label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="w-full text-base font-bold text-gray-900 outline-none bg-transparent [color-scheme:light] cursor-text"
            />
          </div>

          {/* Check Out */}
          <div className="flex-1 w-full bg-gray-50/80 hover:bg-[#fdfbf7] border border-transparent hover:border-[#d4af37] rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-[#c5a059] focus-within:ring-4 focus-within:ring-[#f3e5ab] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={assets.calenderIcon}
                alt="Check Out"
                className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300"
              />
              <label
                htmlFor="checkOut"
                className="text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-[#c5a059] transition-colors duration-300"
              >
                Check out
              </label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="w-full text-base font-bold text-gray-900 outline-none bg-transparent [color-scheme:light] cursor-text"
            />
          </div>

          {/* Guests & Button Container */}
          <div className="flex items-stretch w-auto gap-2.5">
            <div className="w-32 bg-gray-50/80 hover:bg-[#fdfbf7] border border-transparent hover:border-[#d4af37] rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-[#c5a059] focus-within:ring-4 focus-within:ring-[#f3e5ab] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={assets.guestsIcon}
                  alt="Guests"
                  className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300"
                />
                <label
                  htmlFor="guests"
                  className="text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-[#c5a059] transition-colors duration-300"
                >
                  Guests
                </label>
              </div>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="w-full text-base font-bold text-gray-900 placeholder-gray-400 outline-none bg-transparent"
                placeholder="0"
              />
            </div>

            <button
              type="submit"
              aria-label="Search"
              className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] w-16 rounded-[1.5rem] shadow-lg shadow-[#d4af37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center flex-shrink-0 h-full group/btn"
            >
              <img
                src={assets.searchIcon}
                alt=""
                className="w-5 h-5 group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-500"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
