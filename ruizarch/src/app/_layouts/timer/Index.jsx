"use client";

import { useState, useEffect } from "react";

const TimerModule = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-08-01T00:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer(); // Initial call
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            {/* timer */}
            <div id="timer" className="mil-timer mil-mb-90">
                <div className="mil-timer-item">
                    <span id="days" className="mil-timer-number">
                        {timeLeft.days.toString().padStart(2, "0")}
                    </span>
                    <h6 className="mil-text-xs mil-upper mil-light">days</h6>
                </div>
                <div className="mil-timer-item">
                    <span id="hours" className="mil-timer-number">
                        {timeLeft.hours.toString().padStart(2, "0")}
                    </span>
                    <h6 className="mil-text-xs mil-upper mil-light">hours</h6>
                </div>
                <div className="mil-timer-item">
                    <span id="minutes" className="mil-timer-number">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                    </span>
                    <h6 className="mil-text-xs mil-upper mil-light">minutes</h6>
                </div>
                <div className="mil-timer-item">
                    <span id="seconds" className="mil-timer-number">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                    </span>
                    <h6 className="mil-text-xs mil-upper mil-light">seconds</h6>
                </div>
            </div>
            {/* timer end */}
        </>
    );
};

export default TimerModule;