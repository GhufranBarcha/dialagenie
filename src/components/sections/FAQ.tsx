"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    { category: "Setup", question: "How long does it take to set up?", answer: "Setup takes less than 5 minutes. We provide you with a new phone number that instantly forwards to your AI receptionist. Simply configure your business rules in our dashboard, and you are good to go." },
    { category: "Technology", question: "Does it sound like a real person?", answer: "Yes! Dial a Genie uses the latest conversational AI and ultra-realistic voice synthesis. Most callers will not even realize they are speaking to an AI. It even handles interruptions and pauses naturally." },
    { category: "Integrations", question: "Can it integrate with my existing calendar?", answer: "Absolutely. We seamlessly integrate with Google Calendar, Outlook, Calendly, and most major CRM platforms to enable real-time booking and scheduling." },
    { category: "Technology", question: "What happens if the AI does not know the answer?", answer: "If a caller asks a question outside the configured knowledge base, it will politely take a message, gather the contact details, and immediately notify you or your team for follow-up." },
    { category: "Billing", question: "Can I cancel at any time?", answer: "Yes — no hidden contracts. All plans are month-to-month. You can cancel, upgrade, or downgrade anytime directly from your account dashboard." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section id="faq" className="py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-16 items-start">

                    <div className="lg:col-span-2 lg:sticky lg:top-32">
                        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">Got Questions?</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">We have <br /> the answers.</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">Everything you need to know before getting started. Still have a question?</p>
                        <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500 font-semibold transition-colors group">
                            Talk to our team <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </a>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`rounded-2xl border transition-all duration-300 cursor-pointer ${openIndex === index ? "bg-white border-indigo-200 shadow-md shadow-indigo-100" : "bg-white border-gray-200 hover:border-indigo-200"}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <div className="flex items-start justify-between gap-4 p-6">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">{faq.category}</span>
                                        <h3 className="text-gray-900 font-semibold text-lg">{faq.question}</h3>
                                    </div>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-1 ${openIndex === index ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                                    <p className="text-gray-500 leading-relaxed px-6 pb-6 border-t border-gray-100 pt-5 text-base font-medium">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
