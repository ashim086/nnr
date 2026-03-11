"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        quote: "Searched for man with van near me and found NNR. Best decision. The driver was professional, careful with my furniture, and made the whole experience stress-free.",
        name: "Bikash Tamang",
        role: "Sydney, NSW",
        initials: "BT",
        color: "bg-red-600",
    },
    {
        quote: "Booked a house removal from Sydney to Melbourne. The team was punctual, efficient and nothing was damaged. Highly recommended!",
        name: "Sushila Gurung",
        role: "Sydney, NSW",
        initials: "SG",
        color: "bg-blue-600",
    },
    {
        quote: "As a startup founder relocating our office, I needed a reliable team. NNR delivered exactly that — fast, careful and great value.",
        name: "Rajesh Shrestha",
        role: "Sydney, NSW",
        initials: "RS",
        color: "bg-emerald-600",
    },
    {
        quote: "Incredible service from start to finish. Booking was so easy and the movers arrived right on time. Will use again for sure!",
        name: "Anita Rai",
        role: "Sydney, NSW",
        initials: "AR",
        color: "bg-purple-600",
    },
    {
        quote: "Had to move my piano from Sydney to Brisbane and was nervous about it. The NNR team handled it with such care. Absolutely worth every cent.",
        name: "Dipak Magar",
        role: "Sydney, NSW",
        initials: "DM",
        color: "bg-amber-600",
    },
    {
        quote: "Student move from uni accommodation — fast, affordable and the guys were super friendly. Exactly what I needed! 🙏",
        name: "Sabina Thapa",
        role: "Sydney, NSW",
        initials: "ST",
        color: "bg-pink-600",
    },
];

const VISIBLE = 3;

export default function Testimonials() {
    const [start, setStart] = useState(0);

    const prev = () => setStart((s) => Math.max(0, s - 1));
    const next = () => setStart((s) => Math.min(testimonials.length - VISIBLE, s + 1));

    const visible = testimonials.slice(start, start + VISIBLE);

    return (
        <section className="py-20 px-6">
            <div className="mx-auto max-w-5xl">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
                >
                    What our customers say
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                    {visible.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <Card className="border-gray-200 shadow-sm flex flex-col justify-between h-full">
                                <CardContent className="p-6 flex flex-col gap-4 h-full">
                                    {/* Stars */}
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, s) => (
                                            <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                                            <p className="text-xs text-gray-400">{t.role}</p>
                                        </div>
                                        <div className={`h-14 w-14 rounded-lg ${t.color} flex items-center justify-center`}>
                                            <span className="text-white font-bold text-lg">{t.initials}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center gap-3"
                >
                    <button
                        onClick={prev}
                        disabled={start === 0}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 hover:border-gray-400 disabled:opacity-30 transition"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={next}
                        disabled={start >= testimonials.length - VISIBLE}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 disabled:opacity-30 transition"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
