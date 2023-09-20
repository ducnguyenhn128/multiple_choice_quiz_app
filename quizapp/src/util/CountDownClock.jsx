import React from 'react';
import { useState, useEffect } from 'react';

const CountDownClock = () => {
    const initialDuration = 1800; // 1000 seconds

    const [remainingTime, setRemainingTime] = useState(initialDuration);
    


    // Start the countdown timer when the component mounts
    useEffect(() => {
        if (remainingTime === 0) {
        // You can add code here to handle what happens when the countdown reaches zero
        alert("Countdown is over!");
        return;
        }
        // Create an interval to decrement the remaining time by 1 second every second
        const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [remainingTime]);

    const minutes = Math.floor(remainingTime/60);
    const seconds = remainingTime % 60
    return (
        <div className='countdown_clock'>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}
 
export default CountDownClock