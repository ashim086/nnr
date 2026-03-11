import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#0d1b2e] text-white">
            {/* Header */}
            <div className="bg-[#162438] border-b border-white/10">
                <div className="mx-auto max-w-4xl px-6 py-8">
                    <Link href="/" className="text-red-400 hover:text-red-300 text-sm transition">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold mt-4">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm mt-2">Last updated: March 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">1. Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Namaste Nepal Removal Services (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and removal services operating from Sydney, New South Wales, Australia.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">2. Information We Collect</h2>
                    <p className="text-gray-300 leading-relaxed">We may collect the following personal information when you interact with us:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and postal address.</li>
                        <li><strong className="text-white">Moving Details:</strong> Pick-up and drop-off addresses, move dates, property size, and any special requirements you provide.</li>
                        <li><strong className="text-white">Communication Data:</strong> Messages, enquiries, and feedback submitted through our website forms, email, or WhatsApp.</li>
                        <li><strong className="text-white">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website (collected automatically via cookies).</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">3. How We Use Your Information</h2>
                    <p className="text-gray-300 leading-relaxed">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>To provide, manage, and deliver our removal and moving services.</li>
                        <li>To process booking requests and provide accurate quotes.</li>
                        <li>To communicate with you regarding your bookings, enquiries, and customer support.</li>
                        <li>To improve our website, services, and customer experience.</li>
                        <li>To comply with legal obligations under Australian law.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">4. Information Sharing &amp; Disclosure</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We do not sell, rent, or trade your personal information to third parties. We may share your data only in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li><strong className="text-white">Service Delivery:</strong> With our removal crew members to fulfil your booking.</li>
                        <li><strong className="text-white">Legal Requirements:</strong> When required by Australian law, court order, or government regulation.</li>
                        <li><strong className="text-white">Business Tools:</strong> With trusted service providers (e.g., email delivery, form processing) who assist in operating our business, under strict confidentiality agreements.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">5. Data Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">6. Cookies</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, though some features of the site may not function properly as a result.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">7. Your Rights</h2>
                    <p className="text-gray-300 leading-relaxed">Under the Australian Privacy Act 1988, you have the right to:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Access the personal information we hold about you.</li>
                        <li>Request correction of inaccurate or outdated information.</li>
                        <li>Request deletion of your personal information (subject to legal obligations).</li>
                        <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC).</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">8. Third-Party Links</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our website may contain links to third-party websites (e.g., Facebook, TikTok, WhatsApp). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies independently.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">9. Changes to This Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">10. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
                    <div className="bg-[#162438] rounded-xl p-5 space-y-2 border border-white/10">
                        <p className="text-white font-semibold">Namaste Nepal Removal Services</p>
                        <p className="text-gray-400">📍 Auburn, Sydney, NSW, Australia</p>
                        <p className="text-gray-400">📞 0452 649 320 / 0452 559 320</p>
                        <p className="text-gray-400">📧 info@namastenepalremoval.com.au</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
