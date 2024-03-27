import React, { useState, useEffect } from 'react';
// sure you create this CSS file based on the provided styles

const marketMoods = {
    EXTREME_FEAR: { startValue: 0, endValue: 20, zoneColor: "#ff565b" },
    FEAR: { startValue: 20, endValue: 40, zoneColor: "#ffa947" },
    NEUTRAL: { startValue: 40, endValue: 60, zoneColor: "#ffca15" },
    GREED: { startValue: 60, endValue: 80, zoneColor: "#c5d335" },
    EXTREME_GREED: { startValue: 80, endValue: 100, zoneColor: "#6bc548" },
};

const MarketSentimentIndicator = ({ score }) => {
    const [zoneColor, setZoneColor] = useState("#ffca15"); // Default to NEUTRAL
    const [popupText, setPopupText] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Determine the market mood based on the score
        const mood = Object.values(marketMoods).find(m => score >= m.startValue && score <= m.endValue);
        if (mood) {
            setZoneColor(mood.zoneColor);
        }
    }, [score]);

    const handleHover = (text) => {
        setPopupText(text);
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    return (
        <div className="mi-root">
            <div className="mi-speedometer">
                {/* Placeholder for the dial image */}
                <img  alt="Market Sentiment Indicator" />
            </div>
            <div className="mi-needle" style={{ transform: `rotate(${scoreToAngle(score)}deg)`, fill: zoneColor }}>
                {/* Needle SVG goes here */}
            </div>
            <div
                className="mi-hover-zone mi-ex-fear-hover"
                onMouseEnter={() => handleHover("Extreme fear...")}
                onMouseLeave={handleMouseLeave}
            ></div>
            <div
                className="mi-hover-zone mi-ex-greed-hover"
                onMouseEnter={() => handleHover("Extreme greed...")}
                onMouseLeave={handleMouseLeave}
            ></div>
            {showPopup && (
                <div className="mi-popup-text">
                    {popupText}
                </div>
            )}
            <div className="mi-scoreValue" style={{ color: zoneColor }}>
                {score}
            </div>
        </div>
    );
};

// Utility function to convert score to needle angle
const scoreToAngle = (score) => {
    // Simplified calculation for example purposes
    return -90 + (score / 100) * 180;
};

export default MarketSentimentIndicator;
