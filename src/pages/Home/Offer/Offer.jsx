import React from 'react';
import img from '../../../assets/slider-3.jpg'
import 'aos/dist/aos.css';

const Offer = () => {
    return (
        <div className="hero min-h-screen rounded-md mb-28" style={{ backgroundImage: `url(${img})` }} data-aos='flip-up'>
            <div className="hero-overlay bg-[#F6C01E] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-black text-4xl font-bold">15% Discount<br />On All Kid's Cars Toys</h1>
                    <p className="mb-5 text-2xl font-bold text-black">Offer Expires on</p>
                    {/* countdown */}
                    <div className='bg-[#FD6C35] flex justify-center p-10 rounded-xl'>
                        <div className="flex gap-5">
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                days
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div>
                                <span className="countdown font-mono text-4xl">
                                    <span style={{ "--value": 20 }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;