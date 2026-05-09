"use client";

import { useState } from "react";
import { Coffee } from 'lucide-react';
import { links } from "@/data/links"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 pointer-events-none">
            <div className="w-full md:w-auto pointer-events-auto">
                <nav className="bg-brown w-full flex items-center justify-between md:justify-start gap-4 md:gap-8 px-5 md:px-8 py-3 rounded-2xl md:rounded-full navigation">
                    <a href="#" className="flex items-center gap-2 flex-shrink-0">
                        <Coffee className="text-brown-100" />
                        <span className='text-brown-100 font-secondary text-[1.05rem] tracking-[-0.01em]'>Barista School</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-7">
                        {links.map((link) => (
                            <li key={link.text}><a className="text-sm transition-colors text-brown-300 tracking-[-0.01em] link" href={link.href}>{link.text}</a></li>
                        ))}
                    </ul>
                    <a href="#Form" className="hidden md:block text-sm px-5 py-2 rounded-full transition-all text-brown-100 bg-brown-500 signUp">Записатись</a>
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
                                        className="block text-sm text-brown-300 link py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#Form"
                            className="w-full text-center text-sm px-5 py-2.5 rounded-full text-brown-100 bg-brown-500 signUp"
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