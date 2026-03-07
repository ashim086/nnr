"use client";

import { Heart, Shield, Users, Clock } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Nepali Hospitality",
        desc: "We bring the warmth and care of Nepali culture to every move",
    },
    {
        icon: Shield,
        title: "Reliability & Respect",
        desc: "Your belongings are treated with utmost care and respect",
    },
    {
        icon: Users,
        title: "Community Focused",
        desc: "Proudly serving the Nepali community in Sydney and beyond",
    },
    {
        icon: Clock,
        title: "On-Time Service",
        desc: "We value your time and always arrive when promised",
    },
];

export default function About() {
    return (
        <section id="about" className="py-16 px-6 bg-white">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/truck1.jpg"
                                alt="NNR Removal Truck"
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <img
                                src="/truck2.jpg"
                                alt="NNR Team at Work"
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <img
                                src="/team.jpg"
                                alt="Namaste Nepal Team"
                                className="col-span-2 w-full h-56 object-cover rounded-xl"
                            />
                        </div>
                        {/* Decorative badge */}
                        <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-xl px-6 py-4 shadow-lg">
                            <p className="text-3xl font-bold">5+</p>
                            <p className="text-sm">Years Experience</p>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Namaste!
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We are <strong>Namaste Nepal Removal</strong>, a hardworking Nepali-owned and operated business 
                            dedicated to serving the Auburn and wider Sydney community. With years of experience and a strong 
                            cultural ethos of reliability and respect, we ensure your move is safe, smooth, and stress-free.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We combine the warmth of Nepali hospitality with professional standards to make your transition 
                            effortless. Whether you&apos;re moving a single item or your entire home, we treat every job with 
                            the same level of care and dedication.
                        </p>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {values.map((val) => {
                                const Icon = val.icon;
                                return (
                                    <div key={val.title} className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                                            <Icon className="h-5 w-5 text-red-600" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{val.title}</p>
                                            <p className="text-xs text-gray-500">{val.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
