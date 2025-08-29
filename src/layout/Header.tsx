import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

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
        <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/70 border-b border-border">
            <nav className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer select-none">Jimmy Phan</div>

                {/* Desktop navigation */}
                <div className="hidden md:flex gap-8">
                    {sections.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant="ghost"
                            onClick={() => handleClick(id)}
                            className={`relative px-2 py-1 text-sm font-medium transition-transform duration-200
                ${active === id ? "text-primary scale-105" : "text-muted-foreground scale-100"}
                hover:text-primary hover:scale-100 cursor-pointer`}
                        >
                            {label}
                            {active === id && (
                                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded" />
                            )}
                        </Button>
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-2xl focus:outline-none cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden flex flex-col gap-4 px-6 pb-4 bg-background/90 border-t border-border
    transform transition-all duration-300 ease-in-out
    ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
                {sections.map(({ id, label }) => (
                    <Button
                        key={id}
                        variant="ghost"
                        onClick={() => handleClick(id)}
                        className={`relative px-2 py-2 text-left text-sm font-medium transition-transform duration-200
        ${active === id ? "text-primary scale-105" : "text-muted-foreground scale-100"}
        hover:text-primary hover:scale-100 cursor-pointer`}
                    >
                        {label}
                    </Button>
                ))}
            </div>
        </header>
    )
}
