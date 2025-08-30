import { type Variants, motion } from "framer-motion"

export default function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    return (
        <section
            id="hero"
            className="flex flex-col justify-center items-start min-h-screen bg-[#18181b] text-white px-6"
        >
            <motion.div
                className="w-full px-6 md:max-w-5xl md:mx-auto flex flex-col md:flex-row items-start md:items-center gap-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className="flex-1">
                    <motion.p variants={item} className="text-base text-gray-400 mb-4">
                        Hello world! My name is
                    </motion.p>

                    <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold mb-2">
                        Jimmy Phan
                    </motion.h1>

                    <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-[#e5e5d3] mb-6">
                        I solve problems with code
                    </motion.h2>

                    <motion.p variants={item} className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                        I'm a software developer who transforms real-world challenges into elegant, practical solutions.
                        Currently, I'm focused on developing meaningful digital experiences at{" "}
                        <motion.a
                            href="https://www.goodlifefitness.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative font-bold text-white cursor-pointer inline-block"
                            initial="rest"
                            whileHover="hover"
                        >
                            GoodLife Fitness
                            <motion.span
                                className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
                                variants={{
                                    rest: { scaleX: 0 },
                                    hover: { scaleX: 1 },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                        </motion.a>
                        .
                    </motion.p>
                    <motion.div variants={item} className="flex flex-wrap gap-4 mx-auto pt-8">
                        <motion.button
                            className="px-6 py-3 bg-[#e5e5d3] text-black font-semibold rounded-md cursor-pointer"
                            onClick={() => window.open("/resume.pdf", "_blank")}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            View Resume
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
