"use client";

import Footer from "./components/Footer";
import ClothingDesignSteps from "./components/ClothingDesignSteps";
import { ProcessComponent } from "./components/ProcessComponent";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Adjust duration for the easing effect
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const animationId = requestAnimationFrame(raf);

        // Cleanup function
        return () => {
            lenis.destroy();
            cancelAnimationFrame(animationId);
        };
    }, []);
    return (
        <>
            <div className="bg-white">
                <Hero />
                <ClothingDesignSteps />
                {/* <DesignProcess/> */}
                <ProcessComponent />
                <Footer />
            </div>
        </>
    );
}
