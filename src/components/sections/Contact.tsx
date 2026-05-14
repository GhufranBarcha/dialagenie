import { Mail, PhoneCall, Clock3 } from "lucide-react";
import ContactForm from "./ContactForm";

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
                            { icon: <Mail className="w-5 h-5 text-indigo-600" />, label: "Email us", value: "info@dialagenie.com", href: "mailto:info@dialagenie.com" },
                            { icon: <PhoneCall className="w-5 h-5 text-indigo-600" />, label: "Call us", value: "+64 21 338 986", href: "tel:+6421338986" },
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
                            <p className="font-bold text-4xl mb-2">Launch-Ready</p>
                            <p className="text-indigo-200 font-medium">Transparent onboarding, guided setup, and responsive support from day one.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
