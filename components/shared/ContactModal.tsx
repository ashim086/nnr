"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [question, setQuestion] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !phone.trim() || !question.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/send-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, phone, question }),
            });

            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setSubmitted(true);
            setEmail("");
            setPhone("");
            setQuestion("");
        } catch {
            setError("Something went wrong. Please try again or call us at 0452 649 320.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setSubmitted(false);
            setError("");
            setEmail("");
            setPhone("");
            setQuestion("");
        }, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
            <DialogContent className="sm:max-w-md border-0 bg-[#0d1b2e] text-white p-0 overflow-hidden">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-14 gap-4 text-center px-6">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="size-10 text-green-400" />
                        </div>
                        <DialogTitle className="text-2xl font-bold text-white">Message Sent!</DialogTitle>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Thank you for reaching out. We&apos;ll get back to you shortly.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-2 w-full rounded-xl bg-red-600 py-3 text-sm font-bold text-white hover:bg-red-700 transition"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Header with red accent bar */}
                        <div className="bg-[#162438] px-6 pt-6 pb-4 border-b border-white/10">
                            <DialogHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                                        <Mail className="size-5 text-white" />
                                    </div>
                                    <div>
                                        <DialogTitle className="text-xl font-bold text-white">Contact Us</DialogTitle>
                                        <DialogDescription className="text-gray-400 text-sm">
                                            Have a question? We&apos;ll respond promptly.
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
                            {error && (
                                <div className="bg-red-600/15 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label htmlFor="contact-email" className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                                    <Mail className="size-3.5 text-red-400" /> Your Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="e.g. yourname@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={cn(
                                        "w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60 transition",
                                        error && !email.trim() && "border-red-400/60"
                                    )}
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label htmlFor="contact-phone" className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                                    <Phone className="size-3.5 text-red-400" /> Phone Number
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    placeholder="e.g. 0452 649 320"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={cn(
                                        "w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60 transition",
                                        error && !phone.trim() && "border-red-400/60"
                                    )}
                                />
                            </div>

                            {/* Question */}
                            <div className="space-y-1.5">
                                <label htmlFor="contact-question" className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                                    <MessageSquare className="size-3.5 text-red-400" /> What&apos;s your question?
                                </label>
                                <textarea
                                    id="contact-question"
                                    placeholder="Type your question here..."
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    className={cn(
                                        "w-full min-h-28 rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-400/60 transition resize-none",
                                        error && !question.trim() && "border-red-400/60"
                                    )}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-red-700 disabled:opacity-50 transition"
                            >
                                {isSubmitting ? "Sending…" : "Send Message →"}
                            </button>

                            <p className="text-center text-xs text-white/40">
                                ✓ We typically respond within 30 minutes
                            </p>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
