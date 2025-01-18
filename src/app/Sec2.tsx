import React from 'react';

const Sec2: React.FC = () => {
    const links = [
        { text: 'Cloud Platforms →', href: '#' },
        { text: 'Platform API →', href: '#' },
        { text: 'Self-Hosted License →', href: '#' }
    ];

    return (
        <section className="flex flex-col min-h-fit md:flex-row justify-between px-16 py-10">
            <div className="text-left w-[50%]">
                <h1 className="text-3xl font-bold mb-4">Build with Stability AI.</h1>
            </div>
            <div className="w-[50%]">
                <div className="max-w-md text-left">
                    <p className="text-gray-700 mb-6 text-md">
                        Stability AI licenses offer flexibility for your generative AI needs by combining our range of
                        state-of-the-art open models with self-hosting benefits.
                    </p>
                    <ul className="space-y-4">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-blue-500 font-semibold hover:underline">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sec2;
