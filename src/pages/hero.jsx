import React from "react";
import "./hero.css";

const Hero = () => {
    return (
        <section className="welcome-page">
            {/* Overlay */}
            <div className="welcome-overlay"></div>

            {/* Content */}
            <div className="welcome-content">
                <h1 className="welcome-title">
                    Discover Your Perfect Stay
                </h1>
                <p className="welcome-subtitle">
                    Book luxury hotels, resorts, and homestays at the best prices.
                </p>

                {/* Booking Form */}
                <form className="welcome-form">
                    <div className="form-grp">
                        <label htmlFor="destination" className="sr-only">
                            Destination
                        </label>
                        <input
                            id="destination"
                            type="text"
                            placeholder="Where are you going?"
                            className="form-inpt"
                        />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="checkin" className="sr-only">
                            Check-in Date
                        </label>
                        <input
                            id="checkin"
                            type="date"
                            className="form-inpt"
                        />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="checkout" className="sr-only">
                            Check-out Date
                        </label>
                        <input
                            id="checkout"
                            type="date"
                            className="form-inpt"
                        />
                    </div>
                    <button className="form-btn">
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
