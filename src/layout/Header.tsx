import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const sections = [
    { id: "about-me", label: "01. About Me" },
    { id: "work", label: "02. Work Experience" },
    { id: "projects", label: "03. Projects" },
    { id: "contact", label: "04. Contact" },
]

export default function Header() {
    const [active, setActive] = useState("about-me")

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map(({ id }) => {
                const el = document.getElementById(id)
                return el ? el.getBoundingClientRect().top : Infinity
            })
            const activeIdx = offsets.findIndex((top, i) =>
                top <= 80 && (i === offsets.length - 1 || offsets[i + 1] > 80)
            )
            setActive(sections[activeIdx >= 0 ? activeIdx : 0].id)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/70 border-b border-border">
            <nav className="flex justify-center gap-8 py-4">
                {sections.map(({ id, label }) => (
                    <Button
                        key={id}
                        variant="ghost"
                        onClick={() => handleClick(id)}
                        className={`relative px-2 py-1 text-sm font-medium transition-transform duration-200
    ${active === id ? "text-primary scale-105" : "text-muted-foreground scale-100"}
    hover:text-primary hover:scale-100`}
                    >
                        {label}
                        {active === id && (
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded" />
                        )}
                    </Button>

                ))}
            </nav>
        </header>
    )
}