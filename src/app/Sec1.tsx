"use client";

import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";


function Sec1() {
    const [activeTab, setActiveTab] = useState('Image'); // Default tab is 'Image'

    const renderContent = () => {
        switch (activeTab) {
            case 'Image':
                return (
                    <div className="h-[50vh] w-full bg-gray-300 text-black flex">
                        <div className=" w-[50%] flex justify-center items-center">
                            <div className="w-[70%]">
                                <h1 className='text-2xl font-semibold'>Stable Diffusion 1 Medium.</h1>
                                <p className='mt-3'>Is our most advanced text-to-image Al model with two billion parameters, excelling in photorealism, handling complex prompts, generating clear text, and offering unparalleled creative possibilities.</p>
                                <div className="flex mt-3 gap-3">
                                    <button className="bg-black text-white flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-800 transition">
                                        Try Eval.ai
                                        <GoArrowUpRight />
                                    </button>
                                    <button className=" text-black flex items-center gap-2 rounded-lg px-4 py-2">
                                        xyszxjos
                                        <GoArrowUpRight />
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                );
            case 'Video':
                return (
                    <div className="h-[50vh] w-full bg-gray-300 text-black flex">
                        <div className=" w-[50%] flex justify-center items-center">
                            <div className="w-[70%]">
                                <h1 className='text-2xl font-semibold'>Stable Diffusion 2 Medium.</h1>
                                <p className='mt-3'>Is our most advanced text-to-image Al model with two billion parameters, excelling in photorealism, handling complex prompts, generating clear text, and offering unparalleled creative possibilities.</p>
                                <div className="flex mt-3 gap-3">
                                    <button className="bg-black text-white flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-800 transition">
                                        Try Eval.ai
                                        <GoArrowUpRight />
                                    </button>
                                    <button className=" text-black flex items-center gap-2 rounded-lg px-4 py-2">
                                        xyszxjos
                                        <GoArrowUpRight />
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                );
            case 'Audio':
                return (
                    <div className="h-[50vh] w-full bg-gray-300 text-black flex">
                    <div className=" w-[50%] flex justify-center items-center">
                        <div className="w-[70%]">
                            <h1 className='text-2xl font-semibold'>Stable Diffusion 3 Medium.</h1>
                            <p className='mt-3'>Is our most advanced text-to-image Al model with two billion parameters, excelling in photorealism, handling complex prompts, generating clear text, and offering unparalleled creative possibilities.</p>
                            <div className="flex mt-3 gap-3">
                                <button className="bg-black text-white flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-800 transition">
                                    Try Eval.ai
                                    <GoArrowUpRight />
                                </button>
                                <button className=" text-black flex items-center gap-2 rounded-lg px-4 py-2">
                                    xyszxjos
                                    <GoArrowUpRight />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                );
            case '3d Object':
                return (
                    <div className="h-[50vh] w-full bg-gray-300 text-black flex">
                    <div className=" w-[50%] flex justify-center items-center">
                        <div className="w-[70%]">
                            <h1 className='text-2xl font-semibold'>Stable Diffusion 4 Medium.</h1>
                            <p className='mt-3'>Is our most advanced text-to-image Al model with two billion parameters, excelling in photorealism, handling complex prompts, generating clear text, and offering unparalleled creative possibilities.</p>
                            <div className="flex mt-3 gap-3">
                                <button className="bg-black text-white flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-800 transition">
                                    Try Eval.ai
                                    <GoArrowUpRight />
                                </button>
                                <button className=" text-black flex items-center gap-2 rounded-lg px-4 py-2">
                                    xyszxjos
                                    <GoArrowUpRight />
                                </button>
                            </div>
                        </div>

                    </div>
                 


                </div>
                );
            default:
                return <p>Select a tab to see content</p>;
        }
    };

    return (
        <div className='min-h-[60vh] w-full px-16 py-4'>
            <div className="nav-tab w-full h-[50px] flex items-center justify-center gap-4">
                {['Image', 'Video', 'Audio', '3d Object'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 rounded-md ${activeTab === tab ? 'border-gray border-2 border text-black bg-gray-100' : 'border'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="nav-data w-full  rounded-3xl min-h-[50vh] mt-5 overflow-hidden">
                {renderContent()}
            </div>
        </div>
    );
}

export default Sec1;
