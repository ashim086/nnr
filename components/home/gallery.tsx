"use client";

import { ShieldCheck, Clock, DollarSign, Users } from "lucide-react";

const galleryImages = [
    { src: "/gallery1.jpg", alt: "NNR Truck Loading" },
    { src: "/gallery2.jpg", alt: "Team at Work" },
    { src: "/gallery3.jpg", alt: "Office Move" },
    { src: "/gallery4.jpg", alt: "House Removal" },
    { src: "/gallery5.jpg", alt: "Furniture Delivery" },
    { src: "/gallery6.jpg", alt: "Happy Customer" },
];

const whyChooseUs = [
    { icon: DollarSign, label: "Affordable Pricing" },
    { icon: Users, label: "Experienced Team" },
    { icon: Clock, label: "Fast & Safe Delivery" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-16 px-6 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-1">
                        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">
                            Trust & Gallery
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Us & Our Work
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            See our team in action and discover why hundreds of families trust NNR for their moving needs.
                        </p>

                        {/* Why Choose Us Badges */}
                        <div className="space-y-3 mb-6">
                            {whyChooseUs.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                                            <Icon className="h-5 w-5 text-red-600" strokeWidth={1.5} />
                                        </div>
                                        <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Insurance badge */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <ShieldCheck className="h-5 w-5 text-red-600" />
                            <span>Fully Insured & Licensed</span>
                        </div>
                    </div>

                    {/* Right Gallery Grid */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-3 gap-3">
                            {galleryImages.map((img, i) => (
                                <div
                                    key={i}
                                    className={`overflow-hidden rounded-xl ${
                                        i === 0 ? "col-span-2 row-span-2" : ""
                                    }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className={`w-full object-cover hover:scale-105 transition duration-300 ${
                                            i === 0 ? "h-full min-h-[280px]" : "h-32"
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
