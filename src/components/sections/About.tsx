import { type Variants, motion } from "framer-motion"

export default function About() {
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
            id="about-me"
            className="flex flex-col justify-center items-center min-h-screen bg-[#18181b] text-white px-6 md:px-20"
        >
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={item}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        <span className="text-[#22d3ee]">01.</span> About Me
                    </h2>
                    <motion.p variants={item} className="mb-4 text-gray-300">
                    Hello! My name is Jimmy, and I’ve always been curious about how and why things are built. 
                    Technology has become a pivotal part of our lives, shaping how we connect, think, work, and make decisions.
                    I began in software development, where I learned how to turn ideas into working solutions. But the deeper I got into building, 
                    the more I found myself drawn to the product questions behind the work: understanding the problem, defining the user need, 
                    and deciding what was worth building in the first place. That shift is what pulled me toward product management.
                    </motion.p>
                    <motion.p variants={item} className="mb-4 text-gray-300">
                    I ground myself in three pillars: lifelong learning, authenticity, and intentional contribution. 
                    They shape how I approach my work, relationships, and the problems I choose to solve.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex justify-center md:justify-end"
                    variants={item}
                >
                    <img
                        src="/images/mugshot.jpg"
                        alt="Profile picture"
                        className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
