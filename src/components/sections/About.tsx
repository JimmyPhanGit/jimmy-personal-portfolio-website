
export default function About() {
    return (
        <section
            id="about-me"
            className="flex flex-col justify-center items-center min-h-screen bg-[#18181b] text-white px-6 md:px-20"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        <span className="text-[#22d3ee]">01.</span> About Me
                    </h2>
                    <p className="mb-4 text-gray-300">
                        Hi! My name is Jimmy and I enjoy building modern, accessible web apps
                        that solve real-world problems. My background blends frontend and
                        backend development, and I love learning new technologies to level up
                        my skills.
                    </p>
                    <p className="mb-4 text-gray-300">
                        I’m currently focused on React, TypeScript, and cloud solutions, but
                        I’ve also worked with C#, Node.js, and Python. My passion lies in
                        creating tools that make people’s lives easier while keeping code clean
                        and scalable.
                    </p>
                    <p className="text-gray-300">
                        Outside of coding, I enjoy fitness, exploring new technologies, and
                        working on side projects to challenge myself.
                    </p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img
                        src="/images/mugshot.jpg"
                        alt="Profile picture"
                        className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
                    />
                </div>
            </div>
        </section>

    )
}
