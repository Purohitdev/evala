import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Sec6: React.FC = () => {
    return (
        <div className="bg-white py-16 px-24 border-t">
            <div className="w-full mx-auto flex  items-center justify-between gap-8">
                <div className="w-[50%] ">
                    <h2 className="text-2xl font-semibold leading-tight mb-4">
                        Stay Tuned. <br />
                        Subscribe to Updates.
                    </h2>
                    <div className="flex items-center border-b border-black">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-4 py-2 text-gray-600 focus:outline-none"
                        />
                        <button className="px-4 py-2 text-black font-semibold hover:text-gray-800">
                            →
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 text-2xl text-black">
                    <FaFacebookF className="cursor-pointer hover:text-gray-600 transition-colors" />
                    <FaLinkedinIn className="cursor-pointer hover:text-gray-600 transition-colors" />
                    <FaYoutube className="cursor-pointer hover:text-gray-600 transition-colors" />
                    <FaTwitter className="cursor-pointer hover:text-gray-600 transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default Sec6;
