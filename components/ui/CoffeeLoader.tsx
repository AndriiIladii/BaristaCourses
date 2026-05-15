"use client";

import { useEffect, useState } from "react";

const CoffeeLoader = () => {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setFadeOut(true);
            setTimeout(() => setVisible(false), 600);
        };

        // Trigger fade out shortly after component mounts (hydration complete)
        // This significantly improves LCP by not waiting for all assets to load
        const timer = setTimeout(handleLoad, 50);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <>
            <style>{`
                .coffee-loader-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: #faf9f7;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    transition: opacity 0.6s ease;
                }
                .coffee-loader-overlay.fade-out {
                    opacity: 0;
                    pointer-events: none;
                }
                .coffee-loader-label {
                    font-family: var(--font-secondary), serif;
                    font-style: italic;
                    font-size: 1rem;
                    color: #8d6e63;
                    letter-spacing: 0.05em;
                }
                .coffeeloader {
                    width: 120px;
                    height: 120px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .steam {
                    width: 50px;
                    height: 40px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    gap: 4px;
                    margin-bottom: 2px;
                }
                .smoke1, .smoke2, .smoke3 {
                    width: 6px;
                    border-radius: 3px;
                    position: relative;
                }
                .smoke1 { height: 30px; }
                .smoke2 { height: 18px; }
                .smoke3 { height: 30px; }
                .smoke1::before, .smoke1::after,
                .smoke2::before, .smoke2::after,
                .smoke3::before, .smoke3::after {
                    content: "";
                    background: #a1887f;
                    position: absolute;
                    border-radius: 3px;
                    left: 0;
                    width: 6px;
                }
                .smoke1::before, .smoke1::after {
                    animation: coffeeSmoke 0.9s infinite reverse ease-in-out;
                }
                .smoke2::before, .smoke2::after {
                    animation: coffeeSmoke 0.6s infinite reverse ease-in-out;
                    margin-top: 5px;
                }
                .smoke3::before, .smoke3::after {
                    animation: coffeeSmoke 0.9s 0.5s infinite reverse ease-in-out;
                }
                @keyframes coffeeSmoke {
                    0%   { top: 0;    height: 28px; opacity: 0; }
                    50%  { opacity: 0.8; }
                    100% { top: 24px; height: 10px; opacity: 0; }
                }
                .cupcontainer {
                    position: relative;
                    width: 60px;
                    height: 50px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                }
                .cup {
                    border-bottom: 40px solid rgb(62, 39, 35);
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    height: 0;
                    width: 40px;
                    transform: rotate(180deg);
                    position: relative;
                    top: 5px;
                    left: -3px;
                }
                .glance {
                    border-bottom: 22px solid #8d6e63;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    height: 0;
                    width: 2px;
                    transform: rotate(180deg);
                    position: absolute;
                    top: 13px;
                    left: 12px;
                }
                .handle {
                    width: 18px;
                    height: 10px;
                    border: 6px solid rgb(62, 39, 35);
                    border-radius: 0 6px 6px 0;
                    position: absolute;
                    top: 10px;
                    left: 42px;
                }
                .plate {
                    background: rgb(62, 39, 35);
                    width: 80px;
                    height: 5px;
                    border-radius: 3px;
                    margin-top: 4px;
                }
                .bottom {
                    background: rgb(62, 39, 35);
                    width: 50px;
                    height: 5px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    margin-top: 2px;
                }
            `}</style>
            <div className={`coffee-loader-overlay${fadeOut ? " fade-out" : ""}`}>
                <div className="coffeeloader">
                    <div className="steam">
                        <div className="smoke1"></div>
                        <div className="smoke2"></div>
                        <div className="smoke3"></div>
                    </div>
                    <div className="cupcontainer">
                        <div className="cup"></div>
                        <div className="glance"></div>
                        <div className="handle"></div>
                    </div>
                    <div className="plate"></div>
                    <div className="bottom"></div>
                </div>
                <p className="coffee-loader-label">Заварюємо каву...</p>
            </div>
        </>
    );
};

export default CoffeeLoader;
