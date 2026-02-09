
import React, { useEffect, useState } from 'react';
import './PageLoader.css';

const PageLoader = ({ isLoading }) => {
    const [shouldRender, setShouldRender] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setShouldRender(true);
        } else {
            // Small delay to allow fade-out animation
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div className={`page-loader-container ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <svg className="sine-wave-svg" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#213c7a" stopOpacity="1" />
                            <stop offset="50%" stopColor="#4a90e2" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#213c7a" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e56b2e" stopOpacity="1" />
                            <stop offset="50%" stopColor="#ffb347" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#e56b2e" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Layer 1: Background Faint Wave */}
                    <path className="wave-path wave-3" d="M0,75 Q75,25 150,75 T300,75" />

                    {/* Layer 2: Main Blue Wave */}
                    <path className="wave-path wave-1" d="M0,75 Q75,125 150,75 T300,75" />

                    {/* Layer 3: Accent Orange Wave */}
                    <path className="wave-path wave-2" d="M0,75 Q75,50 150,75 T300,75" />
                </svg>
            </div>
        </div>
    );
};

export default PageLoader;
