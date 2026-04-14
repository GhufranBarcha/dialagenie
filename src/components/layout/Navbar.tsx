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
                    <Link href="/" className="text-2xl font-bold text-gray-900 shrink-0">
                        Dial <span className="text-[var(--color-accent-light)]">a</span>{" "}
                        <span className="text-indigo-600">Genie</span>
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
