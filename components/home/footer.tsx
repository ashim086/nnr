"use client";

import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
} from "lucide-react";

const footerLinks = [
    {
        heading: "Services",
        links: ["Small Pickup & Drop", "House Moving", "Office Relocation", "Bike Pickup", "Rubbish Pickup"],
    },
    {
        heading: "Company",
        links: ["About Us", "Our Team", "Gallery", "Testimonials", "Contact"],
    },
    {
        heading: "Support",
        links: ["Get a Quote", "FAQs", "Privacy Policy", "Terms of Service"],
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0d1b2e]">
            {/* Contact Bar */}
            <div className="bg-[#162438] py-6 px-6">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
                            <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                            <p className="text-white font-semibold">0452 649 320, 0452 559 320</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                            <p className="text-white font-semibold">Auburn Old NSW, Sydney Australia</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                            <p className="text-white font-semibold">info@namastenepalremoval.com.au</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="px-6 py-12">
                <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white">
                                <span className="text-[#0d1b2e] font-bold text-sm">N</span>
                                <span className="text-red-600 font-bold text-sm">N</span>
                                <span className="text-[#0d1b2e] font-bold text-sm">R</span>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Namaste Nepal</p>
                                <p className="text-gray-400 text-xs">Removal Services</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Your trusted Nepali-owned removal partner in Sydney. Safe, affordable, and reliable moving services.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Connect</span>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition">
                                <Facebook className="h-4 w-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition">
                                <Instagram className="h-4 w-4 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition">
                                <MessageCircle className="h-4 w-4 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-3">
                            <p className="text-xs font-bold text-white uppercase tracking-widest">{col.heading}</p>
                            {col.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-red-400 transition"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Namaste Nepal Removal. All Rights Reserved.
                    </p>

                    {/* Nepal + Australia Flags */}
                    <div className="flex items-center gap-3">
                        {/* Nepal Flag */}
                        <div className="flex items-center gap-1.5">
                            <svg viewBox="0 0 16 20" className="h-5 w-4">
                                <polygon points="0,0 16,6 0,12" fill="#c8102e" stroke="#003893" strokeWidth="0.5" />
                                <polygon points="0,8 16,14 0,20" fill="#c8102e" stroke="#003893" strokeWidth="0.5" />
                                <circle cx="5" cy="5" r="2" fill="white" />
                                <circle cx="5" cy="14" r="1.5" fill="white" />
                            </svg>
                            <span className="text-xs text-gray-400">Nepal</span>
                        </div>
                        <span className="text-gray-600">|</span>
                        {/* Australia Flag */}
                        <div className="flex items-center gap-1.5">
                            <svg viewBox="0 0 20 12" className="h-4 w-5">
                                <rect width="20" height="12" fill="#00247d" />
                                <rect x="0" y="4.5" width="10" height="3" fill="white" />
                                <rect x="3.5" y="0" width="3" height="12" fill="white" />
                                <rect x="0" y="5" width="10" height="2" fill="#cf142b" />
                                <rect x="4" y="0" width="2" height="12" fill="#cf142b" />
                            </svg>
                            <span className="text-xs text-gray-400">Australia</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}