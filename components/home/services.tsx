"use client";

import { useState } from "react";
import { Truck, Building2, Bike, Trash2, Home, ShieldCheck, Clock, Users, DollarSign } from "lucide-react";
import BookingModal from "@/components/booking/bookinModal";

const services = [
    {
        icon: Truck,
        image: "/manvan.jpg",
        title: "Small Pickup & Drop",
        description: "Perfect for single items or small deliveries.",
    },
    {
        icon: Home,
        image: "/houserremoval.jpg",
        title: "House Moving",
        description: "Complete residential relocation solutions.",
    },
    {
        icon: Building2,
        image: "/manvan.jpg",
        title: "Office Relocation",
        description: "Efficient and secure business moving.",
    },
    {
        icon: Bike,
        image: "/houserremoval.jpg",
        title: "Bike Pickup",
        description: "Specialized service for bike transport.",
    },
    {
        icon: Trash2,
        image: "/manvan.jpg",
        title: "Rubbish Pickup",
        description: "Hassle-free waste removal and disposal.",
    },
];

const trustBadges = [
    { icon: DollarSign, label: "Affordable Pricing", desc: "Competitive rates" },
    { icon: Users, label: "Experienced Team", desc: "Professional movers" },
    { icon: Clock, label: "Fast & Safe Delivery", desc: "On-time service" },
];

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleGetQuote = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        setIsModalOpen(true);
    };

    return (
        <section className="py-16 px-6 bg-gray-50">
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialServiceType={selectedService}
            />
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Our Services
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl mx-auto">
                        Professional removal services for all your needs
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    {services.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <div
                                key={svc.title}
                                onClick={() => handleGetQuote(svc.title)}
                                className="bg-white rounded-xl p-5 text-center cursor-pointer border border-gray-100 hover:border-red-200 hover:shadow-lg transition group"
                            >
                                {/* Image */}
                                <div className="w-full h-24 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={svc.image}
                                        alt={svc.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                {/* Icon */}
                                <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 group-hover:bg-red-50 flex items-center justify-center mb-3 transition">
                                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-red-600 transition" strokeWidth={1.5} />
                                </div>
                                {/* Title */}
                                <h3 className="text-sm font-bold text-gray-900 mb-1">{svc.title}</h3>
                                {/* Description */}
                                <p className="text-xs text-gray-500 leading-relaxed">{svc.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {trustBadges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={badge.label}
                                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100"
                            >
                                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                    <Icon className="h-7 w-7 text-red-600" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{badge.label}</p>
                                    <p className="text-sm text-gray-500">{badge.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
