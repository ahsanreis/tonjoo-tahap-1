// Card.tsx
import React, { useState } from 'react';
import { ElementType } from 'react';

// Define the shape of the props for the Card component
interface CardProps {
    Icon: ElementType;
    title: string;
    subtitle: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, subtitle }) => {
    // Local state to manage hover/focus state for styling
    const [isHovered, setIsHovered] = useState(false);

    return (
    <button
        type="button"
        className={`p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center border-2 ${isHovered ? 'shadow-xl scale-[1.02]' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsHovered(true);
            }
        }}
        onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsHovered(false);
            }
        }}
        style={{
            borderColor: isHovered ? 'var(--theme-primary)' : 'var(--bg-secondary)',
            backgroundColor: isHovered ? 'var(--bg-tertiary)' : 'var(--bg-primary)'
        }}
    >
        {/* Icon Section */}
        <div
        className={`mb-4 p-3 rounded-full transition-colors duration-300 w-12 h-12 flex items-center justify-center`}
        style={{
            backgroundColor: isHovered ? 'var(--theme-primary)' : 'var(--bg-secondary)',
            color: isHovered ? 'var(--bg-primary)' : 'var(--accent-secondary)'
        }}
        >
        {/* The Icon is rendered here */}
        <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300`} style={{ color: isHovered ? 'var(--theme-primary-700)' : 'var(--text-secondary)'}}>
        {title}
        </h3>

        {/* Subtitle/Description */}
        <p className={`text-sm transition-colors duration-300`} style={{ color: isHovered ? 'var(--theme-primary-500)' : 'var(--text-tertiary)'}}>
        {subtitle}
        </p>
    </button>
    );
};

export default Card;