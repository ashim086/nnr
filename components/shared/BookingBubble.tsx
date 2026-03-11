"use client";

import { CalendarCheck } from "lucide-react";

interface BookingBubbleProps {
    onClick: () => void;
}

export default function BookingBubble({ onClick }: BookingBubbleProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Quick Booking"
            className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-red-500 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            <CalendarCheck className="w-7 h-7 text-white" />
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-25" />
        </button>
    );
}
