import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero.png"
                    alt="Titanium iPhone"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-semibold tracking-tight mb-4"
                >
                    Titanium.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-medium text-gray-200 mb-8"
                >
                    So strong. So light. So Pro.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
                >
                    <a href="#" className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition-colors">
                        Buy
                    </a>
                    <a href="#" className="flex items-center text-accent hover:underline group">
                        Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
