import React from 'react';

const SmoothScroll = ({ targetRef, children }) => {
    const handleScroll = () => {
        if (targetRef && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className="hover:underline">
            {children}
        </button>
    );
};

export default SmoothScroll;
