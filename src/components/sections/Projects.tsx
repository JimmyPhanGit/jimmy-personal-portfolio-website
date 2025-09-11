import { motion, easeOut } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiPython, SiPostgresql } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { type JSX } from "react"

const techIcons: Record<string, JSX.Element> = {
    HTML: <SiHtml5 size={24} className="text-orange-500" />,
    CSS: <SiCss3 size={24} className="text-blue-500" />,
    Javascript: <SiJavascript size={24} className="text-yellow-400" />,
    Typescript: <SiTypescript size={24} className="text-blue-600" />,
    React: <SiReact size={24} className="text-cyan-400" />,
    Python: <SiPython size={24} className="text-yellow-300" />,
    SQL: <FaDatabase size={24} className="text-gray-400" />,
    "Postgres SQL": <SiPostgresql size={24} className="text-blue-700" />,
}

const projects = [
    {
        title: "Spendly - WIP",
        description: "Personal finance app to help users track their expenses monthly and visualize their spending habits.",
        github: "https://github.com/JimmyPhanGit/Spendly",
        tech: ["HTML", "CSS", "React", "Typescript", "Python", "Postgres SQL"],
    },
    {
        title: "v2 - Personal Portfolio Website",
        description: "Second version of my personal website.",
        github: "https://github.com/JimmyPhanGit/v2-Jimmy-Personal-Portfolio-Website",
        tech: ["HTML", "CSS", "React", "Typescript"],
    },
    {
        title: "Split Bill Website",
        description: "Split Bill Website is a modern web application designed to make splitting group bills fast, fair, and easy.",
        link: "https://split-bill-website.vercel.app/",
        github: "https://github.com/JimmyPhanGit/Split-Bill-Website",
        tech: ["HTML", "CSS", "React", "Typescript"],
    },
    {
        title: "v1 - Personal Portfolio Website",
        description: "First version of my personal website.",
        link: "https://jimmyphangit.github.io/v1-Jimmy-Personal-Portfolio-Website/",
        github: "https://github.com/JimmyPhanGit/v1-Jimmy-Personal-Portfolio-Website",
        tech: ["HTML", "CSS", "Javascript"],
    },
    {
        title: "Random Quote Generator Web App",
        description: "Created a random quote generator using Quotable API. Includes features like text-to-speech, copy, and tweet.",
        link: "https://jimmyphangit.github.io/Random-Quote-Generator/",
        github: "https://github.com/JimmyPhanGit/Random-Quote-Generator",
        tech: ["HTML", "CSS", "Javascript"],
    },
    {
        title: "PDF Merger Script",
        description: "This is a simple Python script that will merge PDF's in the same directory.",
        github: "https://github.com/JimmyPhanGit/PDF-Merger",
        tech: ["Python"],
    },
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
            <h1 className="text-3xl font-bold mb-8 mt-2 md:mt-0">
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
                        whileHover={{ y: -12, boxShadow: "0 8px 32px 0 rgba(255,255,255,0.15)" }}
                        className="bg-[#23232a] rounded-xl border border-white/10 p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer h-full"
                    >
                        <div className="flex flex-col flex-grow">
                            <div className="flex items-start justify-between mb-2 min-h-[32px]">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <div className="flex gap-2 items-center self-start">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors flex items-center"
                                    >
                                        <FiGithub
                                            size={22}
                                            className="text-white hover:text-[#22d3ee] transition-colors"
                                        />
                                    </a>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition-colors flex items-center"
                                        >
                                            <FiExternalLink
                                                size={22}
                                                className="text-white hover:text-[#22d3ee] transition-colors"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                        {/* Tech logos always at the bottom */}
                        <div className="flex gap-3 mt-6 justify-start">
                            {project.tech.map((tech) => (
                                <div
                                    key={tech}
                                    className="group relative"
                                >
                                    {techIcons[tech]}
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2.2rem] px-2 py-1 rounded bg-[#18181b] text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}