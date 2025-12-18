"use client";

import React, { useRef, useEffect } from "react";

const StarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationFrameId: number;

        const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
        const numStars = 150;

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.2 + 0.05,
                opacity: Math.random(),
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Move stars
                star.y -= star.speed;

                // Reset if off screen
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                // Twinkle effect
                star.opacity += (Math.random() - 0.5) * 0.05;
                if (star.opacity < 0.2) star.opacity = 0.2;
                if (star.opacity > 1) star.opacity = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
        />
    );
};

export default StarField;
