import { Check, X } from "lucide-react";

const rows = [
    { label: "Availability", ai: "24/7/365", human: "40 hrs/week" },
    { label: "Monthly Cost", ai: "Flat low fee", human: "$3,500–$5,000+" },
    { label: "Call Capacity", ai: "Unlimited, always", human: "One call at a time" },
    { label: "Training Required", ai: "None", human: "Weeks" },
    { label: "Call Scripting", ai: "100% consistent", human: "Can have off days" },
    { label: "Lead Qualification", ai: "Every single call", human: "Inconsistent" },
];

export default function Comparison() {
    return (
        <section className="py-28 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <p className="text-indigo-600 font-semibold tracking-widest uppercase text-xs mb-4">The Cold Truth</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{"Let's"} Be Real.</h2>
                    <p className="text-gray-500 text-xl max-w-xl mx-auto font-medium">Humans are expensive, voicemail sucks, and missed calls kill business.</p>
                </div>

                <div className="rounded-3xl border border-gray-200 shadow-sm overflow-x-auto bg-white">
                    <div className="min-w-[550px]">
                        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                            <div className="p-4 md:p-5 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Feature</div>
                            <div className="p-4 md:p-5 text-center border-l border-gray-200 flex items-center justify-center">
                                <span className="inline-block bg-indigo-600 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">DialaGenie AI</span>
                            </div>
                            <div className="p-4 md:p-5 text-center border-l border-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">Human Receptionist</span>
                            </div>
                        </div>

                        {rows.map((row, i) => (
                            <div key={i} className={`grid grid-cols-3 border-b border-gray-100 hover:bg-indigo-50/30 transition-colors ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                                <div className="p-4 md:p-5 text-gray-600 font-semibold text-xs md:text-sm flex items-center">{row.label}</div>
                                <div className="p-4 md:p-5 border-l border-gray-100 flex items-center justify-center gap-1.5 md:gap-2">
                                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-indigo-600" />
                                    </div>
                                    <span className="text-gray-900 font-semibold text-xs md:text-sm">{row.ai}</span>
                                </div>
                                <div className="p-4 md:p-5 border-l border-gray-100 flex items-center justify-center gap-1.5 md:gap-2">
                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                        <X className="w-3 h-3 text-red-500" />
                                    </div>
                                    <span className="text-gray-500 font-medium text-xs md:text-sm">{row.human}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-400 font-medium">The math is simple. <a href="#pricing" className="text-indigo-600 hover:text-indigo-500 font-semibold transition-colors">See our pricing →</a></p>
                </div>
            </div>
        </section>
    );
}
