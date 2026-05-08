"use client";

import { useState } from "react";

import { links } from "@/data/links"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
            <div className="w-full md:w-auto pointer-events-auto">
                <nav className="bg-brown w-full flex items-center justify-between md:justify-start gap-4 md:gap-8 px-5 md:px-8 py-3 rounded-2xl md:rounded-full navigation">
                    <a href="#" className="flex items-center gap-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee w-6 h-6 text-[#a1887f]"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
                        <span className='text-[#d7ccc8] font-secondary text-[1.05rem] tracking-[-0.01em]'>Barista School</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-7">
                        {links.map((link) => (
                            <li key={link.text}><a className="text-sm transition-colors text-[#a1887f] tracking-[-0.01em] link" href={link.href}>{link.text}</a></li>
                        ))}
                    </ul>
                    <a href="#Form" className="hidden md:block text-sm px-5 py-2 rounded-full transition-all text-[#d7ccc8] bg-[#6d4c41] signUp">Записатись</a>
                    <div
                        className={`md:hidden burger-menu ${isOpen ? 'close' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                    </div>
                </nav>

                <div
                    className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "320px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                    <nav className="mt-2 px-4 py-5 rounded-2xl navigation bg-brown flex flex-col gap-4">
                        <ul className="flex flex-col gap-3">
                            {links.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.href}
                                        className="block text-sm text-[#a1887f] link py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#Form"
                            className="w-full text-center text-sm px-5 py-2.5 rounded-full text-[#d7ccc8] bg-[#6d4c41] signUp"
                            onClick={() => setIsOpen(false)}
                        >
                            Записатись
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav