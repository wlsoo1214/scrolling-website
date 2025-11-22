import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    dark?: boolean;
}

function ProductCard({ title, description, image, className, dark = false }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "relative overflow-hidden rounded-3xl group cursor-pointer",
                dark ? "bg-black text-white" : "bg-white text-black",
                className
            )}
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-start items-center text-center">
                <h3 className="text-3xl md:text-4xl font-semibold mb-2">{title}</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 mb-4">{description}</p>
                <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors">
                        Buy
                    </button>
                    <button className="flex items-center text-accent hover:underline text-sm font-medium">
                        Learn more <ChevronRight className="w-3 h-3 ml-0.5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export function ProductGrid() {
    return (
        <section className="py-12 px-4 md:px-6 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProductCard
                    title="MacBook Pro"
                    description="Mind-blowing. Head-turning."
                    image="/assets/macbook.png"
                    dark
                    className="md:col-span-2 h-[500px] md:h-[600px]"
                />
                <ProductCard
                    title="iPad Pro"
                    description="Unbelievably thin. Incredibly powerful."
                    image="/assets/ipad.png"
                    className="h-[500px]"
                />
                <ProductCard
                    title="Apple Watch Ultra 2"
                    description="Next-level adventure."
                    image="/assets/watch.png"
                    dark
                    className="h-[500px]"
                />
            </div>
        </section>
    );
}
