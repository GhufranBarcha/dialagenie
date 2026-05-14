"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#demos", label: "Demos" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" aria-label="Dial A Genie home" className="inline-flex items-center gap-3 text-2xl font-bold text-gray-900 shrink-0">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 64 64"
                            className="h-12 w-16 shrink-0"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="dial-a-genie-mark" x1="20" y1="58" x2="45" y2="9" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7C3AED" />
                                    <stop offset="0.48" stopColor="#3B82F6" />
                                    <stop offset="1" stopColor="#22D3EE" />
                                </linearGradient>
                            </defs>
                            <path d="M10.5 37C18.7 40.7 26.2 41.4 32 39.1C37.8 41.4 45.3 40.7 53.5 37C51.3 45.8 42.5 52.2 32 52.2C21.5 52.2 12.7 45.8 10.5 37Z" fill="url(#dial-a-genie-mark)" />
                            <path d="M27.5 51.5H36.5L40 59H24L27.5 51.5Z" fill="url(#dial-a-genie-mark)" />
                            <path d="M26.6 34.7C26.6 31.5 29 29.5 32 29.5C35 29.5 37.4 31.5 37.4 34.7C37.4 37.5 35 39.4 32 39.4C29 39.4 26.6 37.5 26.6 34.7Z" fill="url(#dial-a-genie-mark)" />
                            <path d="M34.7 7.5C47.7 16.7 47.2 26.5 36.8 33.2C41.8 23.4 37.1 15.9 28.8 9.7C31.1 18.4 30.1 25.5 22.6 32.4C20.3 23.5 24.9 14.5 34.7 7.5Z" fill="url(#dial-a-genie-mark)" />
                            <path d="M48.5 17L50.2 21.1L54.5 22.5L50.2 23.9L48.5 28L46.8 23.9L42.5 22.5L46.8 21.1L48.5 17Z" fill="#93C5FD" />
                        </svg>
                        <span>
                            Dial{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
                                A Genie
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost">Log in</Button>
                        <Link href="#contact">
                            <Button variant="primary">Get a Demo</Button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        id="mobile-menu-btn"
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"}`}>
                <div className="bg-white px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-50"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        <Button variant="outline" size="lg" className="w-full">Log in</Button>
                        <Link href="#contact" onClick={() => setMobileOpen(false)}>
                            <Button variant="primary" size="lg" className="w-full">Get a Demo</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
