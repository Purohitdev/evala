"use client"
import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

type ProfileSectionProps = {
    title: string;
    subtitle: string;
    onCompareClick: () => void;
    disabled: boolean;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, subtitle, onCompareClick, disabled }) => {
    return (
        <div className="min-h-[90vh] w-full border border-gray-400 p-5">
            <div className="min-h-[15vh] flex items-center gap-5 justify-between border-b border-gray-400 pb-6">
                <div className="flex items-center gap-4">
                    <div className="border border-gray-400 h-[8rem] w-[8rem] rounded-full"></div>
                    <div>
                        <h1 className="font-semibold text-2xl">{title}</h1>
                        <p className="font-medium">{subtitle}</p>
                    </div>
                </div>

                {!disabled && (
                    <div>
                        <button
                            onClick={onCompareClick}
                            className={`bg-black text-white flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-800 transition`}
                        >
                            Compare
                            <GoArrowUpRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Sec1: React.FC = () => {
    const [sections, setSections] = useState([
        { id: 1, title: "ZDYCFHKJLSK;", subtitle: "rtytjhsdklc", disabled: false },
    ]);

    const addSection = (id: number) => {
        if (sections.filter(section => section.disabled).length < 1) {
            setSections((prevSections) =>
                prevSections.map((section) =>
                    section.id === id ? { ...section, disabled: true } : section
                ).concat({
                    id: prevSections.length + 1,
                    title: "ZDYCFHKJLSK;",
                    subtitle: "rtytjhsdklc",
                    disabled: false,
                })
            );
        }
    };

    return (
        <div className="min-h-screen  px-10 py-10 flex justify-center">
            <div className="bg-gray-200 min-h-[90vh] w-[95vw] rounded-3xl flex  gap-4 p-10">
                {sections.map((section, index) => (
                    <ProfileSection
                        key={index}
                        title={section.title}
                        subtitle={section.subtitle}
                        onCompareClick={() => addSection(section.id)}
                        disabled={section.disabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sec1;
