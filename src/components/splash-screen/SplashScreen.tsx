import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    initial={{ opacity: 1, backgroundColor: "#1e2a4d" }}
                    animate={{ backgroundColor: "#18181b" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* Bottom border */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-white origin-left"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Right border */}
                        <motion.div
                            className="absolute top-0 right-0 w-1 bg-white origin-top"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Top border */}
                        <motion.div
                            className="absolute top-0 right-0 h-1 bg-white origin-right"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Left border */}
                        <motion.div
                            className="absolute top-0 left-0 w-1 bg-white origin-top"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Letter J */}
                        <span className="text-white text-5xl font-bold z-10">J</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
