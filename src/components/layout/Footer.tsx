import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold text-white mb-6 block">
                            Dial{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
                                A Genie
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-8 text-lg">
                            Your 24/7 AI employee that never sleeps, never takes a day off, and never misses a lead.
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a href="mailto:info@dialagenie.com" aria-label="Email us at info@dialagenie.com" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-[var(--color-accent)] transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                info@dialagenie.com
                            </a>
                            <a href="tel:+6421338986" aria-label="Call us at +64 21 338 986" className="flex items-center text-slate-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-[var(--color-accent)] transition-colors">
                                    <PhoneCall className="w-5 h-5" />
                                </div>
                                +64 21 338 986
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How it Works</Link></li>
                            <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm">
                        &copy; <CopyrightYear /> Dial A Genie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
