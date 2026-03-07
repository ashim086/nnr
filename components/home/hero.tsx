"use client";

import { useState, useEffect, useRef } from "react";
import {
    Star,
    Phone,
    ShieldCheck,
    Truck,
    Building2,
    Bike,
    Trash2,
    Home,
    LocateFixed,
    Menu,
    X,
} from "lucide-react";
import { reverseGeocode } from "@/lib/googleMaps";
import PlacesInput from "../shared/PlacesInput";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

const quickServices = [
    { icon: Truck, label: "Small Pickup & Drop", desc: "Perfect for single items or small deliveries" },
    { icon: Home, label: "House Moving", desc: "Complete residential relocation solutions" },
    { icon: Building2, label: "Office Relocation", desc: "Efficient and secure business moving" },
    { icon: Bike, label: "Bike Pickup", desc: "Specialized service for bike transport" },
    { icon: Trash2, label: "Rubbish Pickup", desc: "Hassle-free waste removal and disposal" },
];

interface HeroProps {
    onGetQuote?: (from: string, to: string) => void;
}

const Hero = ({ onGetQuote }: HeroProps) => {
    const [movingFrom, setMovingFrom] = useState("");
    const [movingTo, setMovingTo] = useState("");
    const [locating, setLocating] = useState(false);
    const [quoteError, setQuoteError] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const hasFetchedLocation = useRef(false);

    useEffect(() => {
        if (hasFetchedLocation.current) return;
        hasFetchedLocation.current = true;

        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                setLocating(true);
                try {
                    const address = await reverseGeocode(
                        pos.coords.latitude,
                        pos.coords.longitude
                    );
                    setMovingFrom(address);
                } catch {
                    // silently ignore
                } finally {
                    setLocating(false);
                }
            },
            () => { }
        );
    }, []);

    const handleGetQuote = (e: React.FormEvent) => {
        e.preventDefault();
        if (!movingFrom.trim() || !movingTo.trim()) {
            setQuoteError("Please enter both pick-up and drop-off addresses.");
            return;
        }
        setQuoteError("");
        onGetQuote?.(movingFrom.trim(), movingTo.trim());
    };

    return (
        <section className="min-h-screen bg-[#0d1b2e] relative overflow-hidden">
            {/* ─── Navbar ─── */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0d1b2e]">
                            <span className="text-white font-bold text-lg">N</span>
                            <span className="text-red-500 font-bold text-lg">N</span>
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold text-gray-900 leading-tight">Namaste Nepal</p>
                            <p className="text-xs text-gray-500">Removal • Auburn, NSW</p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.querySelector(link.href);
                                        target?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="text-sm font-medium text-gray-600 hover:text-red-600 px-4 py-2 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Phone + Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:0452649320"
                            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition"
                        >
                            <Phone className="h-4 w-4" />
                            0452 649 320
                        </a>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setMobileMenuOpen(false);
                                            const target = document.querySelector(link.href);
                                            target?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="block py-2 text-gray-700 hover:text-red-600"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="tel:0452649320"
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white"
                        >
                            <Phone className="h-4 w-4" />
                            Call 0452 649 320
                        </a>
                    </div>
                )}
            </nav>

            {/* ─── Hero Content ─── */}
            <div className="pt-24 lg:pt-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
                        {/* Left Column - Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/team.jpg"
                                    alt="Namaste Nepal Removal Team"
                                    className="w-full h-80 lg:h-[450px] object-cover rounded-2xl"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/60 to-transparent" />
                                
                                {/* Phone badge on image */}
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                                    <Phone className="h-4 w-4 text-red-600" />
                                    <span className="text-sm font-semibold text-gray-900">0452 649 320</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="order-1 lg:order-2 text-white">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                                Reliable House{" "}
                                <span className="text-red-500">Removal Service</span> in Auburn NSW
                            </h1>
                            <p className="text-white/70 text-lg mb-8 max-w-lg">
                                Trusted by the Nepali Community for Safe and Affordable Moving
                            </p>

                            {/* Quote Form */}
                            <form
                                onSubmit={handleGetQuote}
                                className="bg-white rounded-2xl p-6 shadow-xl mb-8"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-600">
                                            Moving from?
                                            {locating && (
                                                <span className="flex items-center gap-1 text-gray-400">
                                                    <LocateFixed className="size-3 animate-pulse" />
                                                    Locating…
                                                </span>
                                            )}
                                        </label>
                                        <PlacesInput
                                            value={movingFrom}
                                            onChange={setMovingFrom}
                                            placeholder="e.g. Sydney 2000"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                            Moving to?
                                        </label>
                                        <PlacesInput
                                            value={movingTo}
                                            onChange={setMovingTo}
                                            placeholder="e.g. Melbourne 3000"
                                        />
                                    </div>
                                </div>
                                {quoteError && (
                                    <p className="mb-2 text-xs text-red-500">{quoteError}</p>
                                )}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        type="submit"
                                        className="flex-1 rounded-lg bg-red-600 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-700 transition"
                                    >
                                        Get a Free Quote
                                    </button>
                                    <a
                                        href="tel:0452649320"
                                        className="flex-1 rounded-lg border-2 border-[#0d1b2e] py-3 text-sm font-semibold text-[#0d1b2e] text-center hover:bg-gray-50 transition"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </form>

                            {/* Trust badges */}
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 text-sm text-white/80">
                                    <ShieldCheck className="h-5 w-5 text-red-400" />
                                    Fully Insured
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/80">
                                    <div className="flex -space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span>4.9/5 Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Quick Services Bar ─── */}
            <div className="bg-white py-8 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {quickServices.map((svc) => {
                            const Icon = svc.icon;
                            return (
                                <div
                                    key={svc.label}
                                    className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition cursor-pointer group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gray-100 group-hover:bg-red-100 flex items-center justify-center mb-3 transition">
                                        <Icon className="h-7 w-7 text-gray-600 group-hover:text-red-600 transition" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 mb-1">{svc.label}</p>
                                    <p className="text-xs text-gray-500 leading-tight">{svc.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;