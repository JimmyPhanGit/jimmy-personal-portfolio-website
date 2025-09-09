import { motion, easeOut } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const projects = [
    { title: "Project 1", description: "Description for project 1", link: "#", github: "#" },
    { title: "Project 2", description: "Description for project 2", link: "#", github: "#" },
    { title: "Project 3", description: "Description for project 3", link: "#", github: "#" },
    { title: "Project 4", description: "Description for project 4", link: "#", github: "#" },
    { title: "Project 5", description: "Description for project 5", link: "#", github: "#" },
    { title: "Project 6", description: "Description for project 6", link: "#", github: "#" },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col justify-center items-center min-h-screen bg-[#18181b] text-white px-6"
        >
            <h1 className="text-3xl font-bold mb-10">
                <span className="text-[#22d3ee]">03.</span> Projects
            </h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        whileHover={{ y: -12, boxShadow: "0 8px 32px 0 rgba(4, 217, 250, 0.15)" }}
                        className="bg-[#23232a] rounded-xl border border-white/10 p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <div className="flex gap-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors"
                                >
                                    <FiGithub
                                        size={22}
                                        className="text-white hover:text-[#22d3ee] transition-colors"
                                    />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors"
                                >
                                    <FiExternalLink
                                        size={22}
                                        className="text-white hover:text-[#22d3ee] transition-colors"
                                    />
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-300">{project.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}