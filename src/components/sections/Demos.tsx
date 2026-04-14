import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";

export default function Demos() {
    return (
        <section id="demos" className="py-24 bg-[var(--color-primary)] text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-[var(--color-accent-light)] font-semibold tracking-wider uppercase text-sm mb-3">Live Demos</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Hear our AI in action.
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Listen to sample conversations based on real-world call scenarios. Notice the natural pauses, intelligent context switching, and scheduling flow.
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: "Booking a haircut appointment", duration: "1:24" },
                                { title: "Answering FAQ about pricing", duration: "0:45" },
                                { title: "Handling a frustrated customer", duration: "2:10" }
                            ].map((demo, i) => (
                                <div key={i} className="group bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 ml-1" />
                                        </div>
                                        <span className="font-medium text-lg text-white">{demo.title}</span>
                                    </div>
                                    <span className="text-gray-400 font-medium">{demo.duration}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a
                                href="https://app.dialagenie.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button variant="secondary" size="lg">Generate Your Own Demo</Button>
                            </a>
                        </div>
                    </div>

                    {/* Image/Mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-accent)] blur-[100px] opacity-20 rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/demo_dashboard.png"
                                alt="AI Voice Dashboard Mockup"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
