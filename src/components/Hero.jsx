import React from 'react'
import { matchPath } from 'react-router-dom'

const Hero = () => {
    // Temporary cities array for the datalist
    const cities = [
        "New York",
        "London",
        "Paris",
        "Tokyo",
        "Sydney",
        "Dubai",
        "Singapore",
        "Rome",
        "Bangkok",
        "Barcelona"
    ];

    return (
        <div>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * { font-family: 'Poppins', sans-serif; }
                `}
            </style>

            {/* <svg className="size-full absolute -z-10 inset-0" width="1440" height="720" viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
                <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
                <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
            </svg> */}

            {/* --- HERO / HOME SECTION (replaced for better responsiveness) --- */}
            <section id="Home" className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mt-30">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-neutral-200 text-white text-xs">
                            <div className="flex items-center">
                                <img className="size-7 rounded-full border-3 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                                <img className="size-7 rounded-full border-3 border-white -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                                <img className="size-7 rounded-full border-3 border-white -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                            </div>
                            <p className="-translate-x-2 text-neutral-100">Trusted by 1M+ travelers </p>
                        </div>
                        <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-semibold max-w-xl text-white">
                            Stay. Relax. Book with ease.
                        </h1>
                        <p className="text-center md:text-left text-sm font-medium text-neutral-200 max-w-lg mt-2">
                            Discover handpicked hotels, best rates, and instant booking for your perfect stay
                        </p>
                        <div className="flex items-center gap-4 mt-8 text-sm">
                            <button className="bg-neutral-100 hover:bg-neutral-200 text-black active:scale-95 rounded-md px-7 h-11 cursor-pointer">
                                Browse Hotels
                            </button>
                            <button className="flex items-center gap-2 border border-slate-100 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon text-neutral-100 cursor-pointer" aria-hidden="true">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                <span className='text-neutral-100'>View Special Offers</span>
                            </button>
                        </div>
                    </div>
                    <img src="/img/hero.jpg" alt="" className="size-full absolute -z-10 inset-0" width="1440" height="720" viewBox="0 0 1440 720" />
                </div>
            </section>

            {/* --- SEARCH FORM (replaced with responsive grid) --- */}
            <form className="bg-neutral-100 text-neutral-800 rounded-lg p-4 grid grid-cols-1 md:grid-cols-12 gap-4 max-w-[82%] mx-auto mt-10 items-end">
                <div className="col-span-1 md:col-span-4">
                    <div className="flex items-center gap-2">
                        {/* small icon */}
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="destinationInput" className="text-sm">Destination</label>
                    </div>
                    <input
                        list="destinations"
                        id="destinationInput"
                        type="text"
                        className="w-full rounded border border-neutral-300 px-3 py-2 mt-1 text-sm outline-none"
                        placeholder="Type here"
                        required
                    />
                    <datalist id="destinations">
                        {cities.map((city, index) => (
                            <option value={city} key={index} />
                        ))}
                    </datalist>
                </div>

                <div className="col-span-6 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="checkIn" className="text-sm">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className="w-full rounded border border-neutral-300 px-3 py-2 mt-1 text-sm outline-none" />
                </div>

                <div className="col-span-6 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="checkOut" className="text-sm">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className="w-full rounded border border-neutral-300 px-3 py-2 mt-1 text-sm outline-none" />
                </div>

                <div className="col-span-6 md:col-span-2">
                    <label htmlFor="guests" className="text-sm">Guests</label>
                    <input min={1} max={10} id="guests" type="number" className="w-full rounded border border-neutral-300 px-3 py-2 mt-1 text-sm outline-none" placeholder="1" />
                </div>

                <button type="submit" className="col-span-1 md:col-span-2 bg-black text-white rounded-md px-4 py-2 w-full">
                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                        <span>Search</span>
                    </div>
                </button>
            </form>

            <section id='About' className='h-100'>

            </section>
        </div>
    )
}

export default Hero