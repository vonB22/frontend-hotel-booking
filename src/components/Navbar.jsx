import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 bg-neutral-950/20 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <svg fill="#ffffff" height="44px" width="44px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" stroke="#ffffff" className={` ${isScrolled && "invert opacity-80"}`}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M474.074,404.54v-0.001V290.764h25.283l-54.78-50.567h35.818c10.472,0,18.963-8.49,18.963-18.963 c0-10.472-8.49-18.963-18.963-18.963H451.13c6.114-3.148,10.303-9.508,10.303-16.856c0-10.472-8.49-18.963-18.963-18.963h-77.783 l-29.673-27.389l-29.673,27.389h-1.932c-3.195,0-6.201,0.799-8.842,2.193c-2.14-6.136-5.073-13.016-9.088-20.052 c-11.745-20.577-34.973-46.113-78.935-50.906c-4.104-0.445-8.202-0.602-12.233-0.461c-2.925-2.782-6.084-5.38-9.453-7.771 c-18.63-13.219-38.691-19.922-59.63-19.922c-41.69,0-71.594,27.103-72.846,28.257l-27.606,25.428l25.291,4.899 C23.919,147.298,11.57,170.12,5.754,187.982c-8.484,26.051-5.196,47.046-4.792,49.354l4.81,27.563l23.819-14.679 c19.367-11.935,39.89-17.988,60.996-17.988c9.668,0,19.442,1.206,29.529,3.652l-3.029,42.486l-12.839-1.502l4.967,61.305H98.682 l13.169,65.839l-0.09,0.528H56.899v37.925H512V404.54H474.074z M335.016,190.676l67.342,62.163H267.672L335.016,190.676z M195.957,404.54h-57.623l-0.148-0.53l13.169-65.839h-12.706l17.912-55.181l-11.653-1.364l15.174-30.181 c11.243,6.242,20.919,13.644,29.09,22.246l-18.497,17.074h25.283V404.54z M190.64,225.742c0.456-9.572-5.112-18.802-14.518-22.525 c-7.179-2.843-14.921-1.81-20.955,2.072c-1.741-6.961-6.676-13.015-13.857-15.858c-9.557-3.784-20.129-0.726-26.311,6.826 c-8.249-1.292-16.401-1.954-24.414-1.954c-17.003,0.001-33.633,2.882-49.731,8.599c0.43-1.54,0.92-3.112,1.477-4.71 c8.17-23.426,26.798-41.456,55.367-53.588l27.975-11.879l-22.969-19.904c-0.31-0.268-0.645-0.555-1.004-0.861 c6.858-2.586,14.862-4.502,23.529-4.502c12.916,0,25.594,4.349,37.681,12.926c3.527,2.502,6.595,5.363,9.118,8.503l6.972,8.668 l10.969-1.856c3.981-0.674,8.168-0.779,12.467-0.308c22.105,2.408,38.761,12.826,49.502,30.963 c0.662,1.121,1.287,2.24,1.871,3.354c-0.468-0.01-0.908-0.018-1.315-0.023l-30.393-0.355l13.042,27.454 c4.217,8.876,7.288,17.531,9.227,25.947l-27.346,25.243C209.241,239.724,200.442,232.306,190.64,225.742z M436.149,404.539 h-82.171v-75.85h-37.925v75.85h-82.171V290.764h202.267V404.539z"></path> </g> </g> </g></svg>
                <span className={`text-white text-xl font-semibold tracking-wide ${isScrolled && "invert opacity-80"}`}>
                    InstaStay
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <svg className={`h-6 w-6 text-white transition-all duration-500 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-white h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar