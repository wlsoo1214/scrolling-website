

const footerLinks = {
    "Shop and Learn": [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
    ],
    "Apple Wallet": ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    "Account": ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    "Entertainment": [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple News+",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
    ],
    "Apple Values": [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supply Chain",
    ],
    "About Apple": [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
    ],
};

export function Footer() {
    return (
        <footer className="bg-background text-xs text-gray-500 py-12 px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Shop and Learn</h3>
                            <ul className="space-y-2">
                                {footerLinks["Shop and Learn"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Apple Wallet</h3>
                            <ul className="space-y-2">
                                {footerLinks["Apple Wallet"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Account</h3>
                            <ul className="space-y-2">
                                {footerLinks["Account"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Entertainment</h3>
                            <ul className="space-y-2">
                                {footerLinks["Entertainment"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-2">Apple Values</h3>
                        <ul className="space-y-2">
                            {footerLinks["Apple Values"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-2">About Apple</h3>
                        <ul className="space-y-2">
                            {footerLinks["About Apple"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="mb-4 md:mb-0">
                            <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="hover:underline">
                                Privacy Policy
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">
                                Terms of Use
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">
                                Sales and Refunds
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">
                                Legal
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="#" className="hover:underline">
                                Site Map
                            </a>
                        </div>
                        <div>
                            <a href="#" className="hover:underline">
                                United States
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
