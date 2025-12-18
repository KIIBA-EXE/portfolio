"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setHidden(false);
        const handleMouseLeave = () => setHidden(true);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#7042f8] z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#7042f8] bg-[#7042f8]/20 backdrop-blur-sm"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                opacity: hidden ? 0 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
};

export default Cursor;
