import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#0d1b2e] text-white">
            {/* Header */}
            <div className="bg-[#162438] border-b border-white/10">
                <div className="mx-auto max-w-4xl px-6 py-8">
                    <Link href="/" className="text-red-400 hover:text-red-300 text-sm transition">
                        ← Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold mt-4">Terms of Service</h1>
                    <p className="text-gray-400 text-sm mt-2">Last updated: March 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">1. Agreement to Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        By accessing or using the services provided by Namaste Nepal Removal Services (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. Our headquarters is located in Sydney, NSW, Australia, and we primarily operate within the Sydney metropolitan area and provide removals from Sydney to other locations across Australia.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">2. Services</h2>
                    <p className="text-gray-300 leading-relaxed">We provide the following removal and transportation services:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li><strong className="text-white">Small Pickup &amp; Drop:</strong> Quick transport of small items and packages.</li>
                        <li><strong className="text-white">House Moving:</strong> Full residential removals including 1 BHK, 2 BHK, and 3 BHK properties.</li>
                        <li><strong className="text-white">Office Relocation:</strong> Commercial and office space moving services.</li>
                        <li><strong className="text-white">Bike Pickup:</strong> Safe transport of motorcycles, scooters, and bicycles.</li>
                        <li><strong className="text-white">Rubbish Pickup:</strong> Waste removal and disposal services.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                        All removals originate from the Sydney area. We move your belongings from Sydney to your desired destination within Australia.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">3. Booking &amp; Quotes</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>All bookings are subject to availability and confirmation by our team.</li>
                        <li>Quotes provided are estimates based on information you supply. Final pricing may vary depending on actual volume, distance, access conditions, and any additional services required.</li>
                        <li>We aim to respond to all booking requests and enquiries within 30 minutes during business hours.</li>
                        <li>A booking is confirmed only after you receive written confirmation from us (via email, SMS, or WhatsApp).</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">4. Customer Responsibilities</h2>
                    <p className="text-gray-300 leading-relaxed">As a customer, you are responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Providing accurate pick-up and delivery addresses, contact details, and move dates.</li>
                        <li>Ensuring items are properly packed unless packing services have been arranged with us.</li>
                        <li>Disclosing any fragile, high-value, hazardous, or restricted items prior to the move.</li>
                        <li>Ensuring adequate access at both pick-up and delivery locations (e.g., parking, lifts, stairs).</li>
                        <li>Being present or having an authorised representative at both locations on the day of the move.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">5. Prohibited Items</h2>
                    <p className="text-gray-300 leading-relaxed">We do not transport the following items:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Hazardous materials, explosives, or flammable substances.</li>
                        <li>Illegal goods or contraband.</li>
                        <li>Perishable food items (unless specifically agreed).</li>
                        <li>Live animals or plants.</li>
                        <li>Cash, passports, or irreplaceable personal documents (we recommend carrying these yourself).</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">6. Payment</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Payment terms will be communicated at the time of booking confirmation.</li>
                        <li>We accept bank transfer, cash, and other payment methods as agreed.</li>
                        <li>Full payment is due upon completion of the removal service unless otherwise arranged.</li>
                        <li>Additional charges may apply for waiting time, extra stops, difficult access (e.g., narrow stairs, no lift), or storage requirements.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">7. Cancellation &amp; Rescheduling</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Cancellations made more than 48 hours before the scheduled move date will receive a full refund of any deposit paid.</li>
                        <li>Cancellations made within 48 hours may incur a cancellation fee of up to 50% of the quoted price.</li>
                        <li>Rescheduling is subject to availability. Please contact us as early as possible to rearrange.</li>
                        <li>We reserve the right to reschedule due to extreme weather conditions or unforeseen circumstances, in which case we will offer the next available date at no extra cost.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">8. Liability &amp; Insurance</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>Namaste Nepal Removal Services is fully insured for public liability.</li>
                        <li>We take the utmost care with your belongings. However, we are not liable for damage to items that were improperly packed by the customer.</li>
                        <li>Any claims for damage or loss must be reported in writing within 48 hours of delivery.</li>
                        <li>Our liability is limited to the reasonable repair or replacement cost of damaged items, subject to investigation.</li>
                        <li>We are not liable for delays caused by traffic, road closures, or circumstances beyond our control.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">9. Website Use</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1.5">
                        <li>The content on our website is provided for general information purposes only.</li>
                        <li>We reserve the right to modify or discontinue any part of the website without notice.</li>
                        <li>You agree not to misuse the website or submit false information through our forms.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">10. Governing Law</h2>
                    <p className="text-gray-300 leading-relaxed">
                        These Terms of Service are governed by the laws of New South Wales, Australia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of New South Wales.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">11. Changes to These Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after any changes constitutes acceptance of the revised terms.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-red-400">12. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">If you have any questions about these Terms of Service, please contact us:</p>
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
