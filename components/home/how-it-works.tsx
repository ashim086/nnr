"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Tag, CalendarDays, CreditCard, Download, Phone, ArrowRight } from "lucide-react";

const steps = [
    { icon: MapPin, label: "Enter postcodes" },
    { icon: Package, label: "Tell us what moving" },
    { icon: Tag, label: "See your price" },
    { icon: CalendarDays, label: "Choose your date" },
    { icon: CreditCard, label: "Book & pay" },
];

export default function HowItWorks() {
    return (
        <section
            className="relative py-7 px-6 overflow-hidden"
            style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0d1b2e]/88" />

            <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
                >
                    Get Your Quote in{" "}
                    <span className="text-red-400">60 Seconds</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-xl text-slate-400 text-base leading-relaxed mb-16"
                >
                    Traditional removal companies make you wait. Phone calls. Callbacks. Home
                    visits. Days before you get a price.
                </motion.p>

                {/* Steps */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full mb-16">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex flex-col sm:flex-row items-center"
                            >
                                {/* Circle */}
                                <div className="flex flex-col items-center gap-4">
                                    <div
                                        className="w-24 h-24 rounded-full flex items-center justify-center"
                                        style={{
                                            border: "2px dashed rgba(255,255,255,0.25)",
                                            background: "rgba(255,255,255,0.05)",
                                        }}
                                    >
                                        <Icon className="w-9 h-9 text-white/80" strokeWidth={1.4} />
                                    </div>
                                    <span className="text-sm text-white/75 font-medium max-w-[110px] leading-snug text-center">
                                        {step.label}
                                    </span>
                                </div>

                                {/* Arrow connector */}
                                {i < steps.length - 1 && (
                                    <div className="flex items-center justify-center sm:mb-6 my-3 sm:my-0 sm:mx-2">
                                        <ArrowRight className="w-6 h-6 text-red-400 rotate-90 sm:rotate-0" strokeWidth={2} />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <button
                        className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur-sm"
                    >
                        <Phone className="h-4 w-4 text-red-400" />
                        Call 0452 649 320
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
