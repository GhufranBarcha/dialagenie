"use client";

import { Mail, PhoneCall, Clock3, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Ready to hire your AI employee?</h2>
                    <p className="text-gray-500 text-lg">Fill out the form and we will get back to you within 24 hours to schedule a personalized demo.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">

                    <div className="lg:col-span-2 space-y-5">
                        {[
                            { icon: <Mail className="w-5 h-5 text-indigo-600" />, label: "Email us", value: "hello@dialagenie.com", href: "mailto:hello@dialagenie.com" },
                            { icon: <PhoneCall className="w-5 h-5 text-indigo-600" />, label: "Call us", value: "+1 (234) 567-890", href: "tel:+12345678" },
                            { icon: <Clock3 className="w-5 h-5 text-indigo-600" />, label: "Response time", value: "We reply within 24 hours", href: null }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-5 hover:shadow-md hover:border-indigo-200 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">{item.icon}</div>
                                <div>
                                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-gray-900 font-semibold text-lg hover:text-indigo-600 transition-colors">{item.value}</a>
                                    ) : (
                                        <p className="text-gray-900 font-semibold text-lg">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white">
                            <p className="font-bold text-4xl mb-2">500+</p>
                            <p className="text-indigo-200 font-medium">Businesses already trust Dial a Genie with their most valuable asset — their phone lines.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="first_name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">First Name</label>
                                        <input type="text" id="first_name" autoComplete="given-name" placeholder="John" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Last Name</label>
                                        <input type="text" id="last_name" autoComplete="family-name" placeholder="Smith" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Work Email</label>
                                    <input type="email" id="email" autoComplete="email" placeholder="john@company.com" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Company Name</label>
                                    <input type="text" id="company" autoComplete="organization" placeholder="Your Business" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
                                    <textarea id="message" placeholder="Tell us about your business and what you need..." rows={4} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium resize-none" />
                                </div>
                                <button type="submit" className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-indigo-200">
                                    Request Your Demo <ArrowRight className="w-5 h-5" />
                                </button>
                                <p className="text-gray-400 text-sm text-center font-medium">No credit card required. No contracts.</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
