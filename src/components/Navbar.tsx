import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Apple, Search, ShoppingBag } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
    { name: "Store", href: "#" },
    { name: "Mac", href: "#" },
    { name: "iPad", href: "#" },
    { name: "iPhone", href: "#" },
    { name: "Watch", href: "#" },
    { name: "Vision", href: "#" },
    { name: "AirPods", href: "#" },
    { name: "TV & Home", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Support", href: "#" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-between w-full text-xs font-medium text-foreground/80">
                        <a href="#" className="text-foreground hover:opacity-80 transition-opacity">
                            <Apple className="w-4 h-4" />
                        </a>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-foreground transition-colors">
                                <Search className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors">
                                <ShoppingBag className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="flex md:hidden items-center justify-between w-full">
                        <a href="#" className="text-foreground">
                            <Apple className="w-5 h-5" />
                        </a>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-foreground">
                                <Search className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-foreground">
                                <ShoppingBag className="w-5 h-5" />
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-foreground focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background absolute top-12 left-0 w-full overflow-hidden"
                    >
                        <div className="px-8 py-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block text-2xl font-semibold text-foreground hover:text-accent transition-colors border-b border-gray-200 dark:border-gray-800 pb-2"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
