import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


const experiences = [
    {
        company: "GoodLife Fitness",
        role: "Software Developer",
        period: "2024 - Present",
        description: [
            "Developed a full-stack web application to manage leads, improving lead tracking and assignment, boosting lead engagement by 23% and increasing conversion rate by 28% across multiple departments",
            "Built a full-stack web application to manage personal trainers, performance tracking, and resource allocation, providing visibility for over 200 trainers for the first time and reducing manual administrative work by 40%",
            "Led a digital initiative for referral web leads, gathering requirements and building an online referral program that simplified member referrals, boosting engagement by 300% per month across all clubs.",
            "Technologies and frameworks: HTML, CSS, JS, React, .NET, C#, Azure, GitHub, Postman, Python, Figma, Java",
        ],
        icon: "/images/goodlife_fitness_logo.jpg",
        color: "bg-[#ee3024]",
    },
    {
        company: "GoodLife Fitness",
        role: "Software Developer (Co-Op)",
        period: "2023 - 2024",
        description: [
            "Built a microservice and workflow to capture online leads, integrated with Salesforce and Microsoft Dynamics CRM to increase daily online lead capture",
            "Developed an internal CASL compliance tool to let associates quickly verify if contacts can be contacted",
            "Created a Python automation repository to streamline CRM operations, including backfilling data during outages and automating diagnostics to maintain critical records",
            "Technologies and frameworks: HTML, CSS, JS, React, .NET, C#, Azure, GitHub, Snowflake, Python, Figma",
        ],
        icon: "/images/goodlife_fitness_logo.jpg",
        color: "bg-[#ee3024]",
    },
    {
        company: "Charizard",
        role: "Fire / Flying Type Pokemon",
        period: "1999 - Present",
        description: [
            "Flamethrower: Charizard unleashes a powerful stream of fire at its opponent",
            "Dragon Breath: Exhales a powerful blast of draconic energy that may paralyze the target",
            "You found the secret card!",
        ],
        icon: "/images/charizard-pokemon.gif",
        color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
]

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        slides: { perView: 3, spacing: 16, origin: "center" },
        breakpoints: {
            "(max-width: 900px)": {
                slides: { perView: 1, spacing: 16, origin: "center" },
                mode: "free-snap"
            },
            "(max-width: 640px)": {
                slides: { perView: 1, spacing: 12, origin: "center" },
                mode: "free-snap"
            }
        },
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })

    // Arrow handlers
    const prevSlide = () => slider.current?.prev()
    const nextSlide = () => slider.current?.next()

    return (
        <section
            id="work"
            className="flex flex-col justify-center items-center min-h-screen bg-[#18181b] text-white px-6 relative"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-[#22d3ee]">02.</span> Work Experience
            </h2>
            {/* Fade overlays */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-32 z-20 hidden md:block"
                style={{ background: "linear-gradient(to right, #18181b 60%, transparent 100%)" }}
            />
            <div
                className="pointer-events-none absolute right-0 top-0 h-full w-32 z-20 hidden md:block"
                style={{ background: "linear-gradient(to left, #18181b 60%, transparent 100%)" }}
            />

            {/* Mobile arrows */}
            <div className="flex justify-between items-center w-full max-w-7xl absolute top-1/2 left-0 z-30 px-2 md:hidden">
                <button
                    aria-label="Previous"
                    onClick={prevSlide}
                    className="bg-[#18181b] rounded-full p-2 shadow-lg border border-white/10 text-white"
                >
                    <FiChevronLeft size={28} />
                </button>
                <button
                    aria-label="Next"
                    onClick={nextSlide}
                    className="bg-[#18181b] rounded-full p-2 shadow-lg border border-white/10 text-white"
                >
                    <FiChevronRight size={28} />
                </button>
            </div>

            <div ref={sliderRef} className="keen-slider w-full max-w-7xl relative z-10">
                {experiences.map((exp, idx) => {
                    const isActive = idx === currentSlide
                    const isAdjacent = Math.abs(idx - currentSlide) === 1 ||
                        (currentSlide === 0 && idx === experiences.length - 1) ||
                        (currentSlide === experiences.length - 1 && idx === 0)

                    return (
                        <div key={idx} className="keen-slider__slide flex justify-center">
                            <motion.div
                                className={`relative w-full max-w-lg rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-out
                    ${isActive ? "scale-100 opacity-100 shadow-2xl shadow-cyan-500/20" : isAdjacent ? "scale-90 opacity-60" : "scale-75 opacity-30"}
                  `}
                            >
                                {/* Holographic shimmer overlay for active card */}
                                {idx === currentSlide && (
                                    <>
                                        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite] pointer-events-none" />
                                        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent skew-x-[-20deg] animate-[shimmer_2.5s_infinite_0.5s] pointer-events-none" />
                                        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-purple-300/10 to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite_1s] pointer-events-none" />
                                    </>
                                )}

                                {/* Card content */}
                                <div className={`flex flex-col items-center`}>
                                    <div className={`w-full h-32 ${exp.color} flex flex-col items-center justify-end relative`}>
                                        <img
                                            src={exp.icon}
                                            alt={exp.company}
                                            className="w-16 h-16 rounded-full mb-[-32px] z-10 bg-white border-2 border-white"
                                            style={{ position: "relative", top: "16px" }}
                                        />
                                    </div>
                                    <div className="w-full bg-[#18181b] flex flex-col items-center p-8 pt-12">
                                        <span className="text-2xl font-semibold mb-2">{exp.company}</span>
                                        <div className="text-lg mb-2">{exp.role}</div>
                                        <div className="text-sm text-gray-200 mb-4">{exp.period}</div>
                                        <ul className="list-disc list-inside text-base text-gray-100 space-y-2 mb-4">
                                            {exp.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
