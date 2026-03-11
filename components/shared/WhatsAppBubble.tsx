"use client";

export default function WhatsAppBubble() {
    return (
        <a
            href="https://wa.me/61452649320"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
            <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 fill-white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.85-8.12-7.168-.228-.318-1.916-2.55-1.916-4.864 0-2.314 1.212-3.45 1.642-3.924.39-.432.916-.594 1.212-.594.15 0 .288.008.412.014.39.018.584.042.842.65.32.762 1.1 2.684 1.196 2.878.096.194.192.454.062.714-.12.268-.228.386-.422.608-.194.222-.376.392-.57.632-.176.21-.374.436-.16.852.214.408.952 1.574 2.044 2.55 1.404 1.256 2.586 1.646 2.954 1.826.368.18.584.152.798-.092.222-.252.946-1.1 1.198-1.478.246-.378.498-.318.838-.19.346.12 2.184 1.03 2.558 1.218.374.188.624.282.716.438.09.156.09.9-.3 2.002z" />
            </svg>
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        </a>
    );
}
