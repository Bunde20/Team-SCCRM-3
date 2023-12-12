import React, { useState, useEffect } from 'react';
import './style.css'; 

const Timer = ({ setTimerReachedZero }) => {
  const initialTime = 30; // (24hrs = 24 * 60 * 60)
  const [time, setTime] = useState(() => {
    const storedTime = JSON.parse(localStorage.getItem('timerState')) || {
      hours: Math.floor(initialTime / 3600),
      minutes: Math.floor((initialTime % 3600) / 60),
      seconds: initialTime % 60,
    };
    return storedTime;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          setTimerReachedZero(true); 
          localStorage.removeItem('timerState'); // Clears the stored timer state on reaching zero
          return {
            hours: 0,
            minutes: 0,
            seconds: 30,
          };
        } else {
          const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;

          // Store the current timer state in localStorage
          localStorage.setItem('timerState', JSON.stringify({ hours, minutes, seconds }));

          return {
            hours,
            minutes,
            seconds,
          };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimerReachedZero]);

  return (
  <div className="timer-container">
  <h3 className="paragraph-text text-white fs-1 timer-text">NEW CARDS IN:</h3>
  <p className="paragraph-text text-white fs-1 timer-text">
    {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
  </p>
</div>
  );
};

export default Timer;

