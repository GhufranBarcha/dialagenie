import { Button } from "@/components/ui/Button";
import { ArrowRight, PhoneCall } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-sky-300 rounded-full blur-[120px] opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px] opacity-10 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-8 border border-indigo-100 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                    Meet Your New AI Employee
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                    Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
                        24/7 AI Receptionist
                    </span>{" "}
                    <br className="hidden lg:block" />
                    for Modern Businesses.
                </h1>

                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
                    Never miss a call again. Automate your customer interactions, schedule appointments,
                    and grow your business around the clock — with zero training required.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 group">
                        See it in Action <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                        <PhoneCall className="w-5 h-5" /> {"Let's"} Chat
                    </Button>
                </div>
            </div>
        </section>
    );
}
