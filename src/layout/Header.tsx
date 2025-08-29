import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion } from "framer-motion"

const sections = [
    { id: "about-me", label: "01. About Me" },
    { id: "work", label: "02. Work Experience" },
    { id: "projects", label: "03. Projects" },
    { id: "contact", label: "04. Contact" },
]

export default function Header() {
    const [active, setActive] = useState("about-me")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map(({ id }) => {
                const el = document.getElementById(id)
                return el ? el.getBoundingClientRect().top : Infinity
            })
            const activeIdx = offsets.findIndex(
                (top, i) => top <= 80 && (i === offsets.length - 1 || offsets[i + 1] > 80)
            )
            setActive(sections[activeIdx >= 0 ? activeIdx : 0].id)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
    }

    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300
    ${menuOpen ? "border-b border-border" : "border-b border-transparent"}`}
        >
            <nav className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <motion.div className="text-xl font-bold cursor-pointer select-none text-white relative inline-block">
                    Jimmy Phan
                    <motion.span
                        className="absolute left-0 bottom-0 h-[2px] bg-white w-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        style={{ transformOrigin: "left" }}
                        transition={{
                            duration: 1.5,
                        }}
                    />
                </motion.div>
                <div className="hidden md:flex gap-8">
                    {sections.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant="ghost"
                            onClick={() => handleClick(id)}
                            className={`relative px-2 py-1 text-sm font-medium transition-transform duration-200
                text-white
                cursor-pointer
                hover:bg-transparent
                hover:text-white
                hover:scale-105`}
                        >
                            {label}
                            {active === id && (
                                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded" />
                            )}
                        </Button>
                    ))}

                    {/* Resume button */}
                    <Button
                        variant="default"
                        className="px-4 py-1 text-sm text-white border border-white rounded transition-colors duration-200"
                        onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                        Resume
                    </Button>
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-2xl focus:outline-none cursor-pointer text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile navigation */}
            <div
                className={`md:hidden flex flex-col gap-4 px-6 pb-4 border-border
        transform transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
                {sections.map(({ id, label }) => (
                    <Button
                        key={id}
                        variant="ghost"
                        onClick={() => handleClick(id)}
                        className={`relative px-2 py-2 text-left text-sm font-medium transition-transform duration-200
                text-white
                cursor-pointer
                hover:bg-transparent
                hover:text-white
                hover:scale-105`}
                    >
                        {label}
                        {active === id && (
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded" />
                        )}
                    </Button>
                ))}
            </div>
        </header>
    )
}
