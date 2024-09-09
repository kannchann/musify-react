import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("September 4, 2024").getTime(); // Corrected date parsing for consistency

  const getTime = () => {
    const time = deadline - Date.now();

    // Check if time is zero or negative
    if (time <= 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return; // Stop further execution once countdown is complete
    }

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="leading-3">
      <div className="p-5 text-xl ">Offer ends in</div>
      <div className="flex space-x-4 text-2xl font-bold" role="timer">
        <div className="bg-primaryPurple text-white p-3 rounded-lg">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <div className="bg-primaryPurple text-white p-3 rounded-lg">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <div className="bg-primaryPurple text-white p-3 rounded-lg">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="p-4">hr</p>
        <p className="p-4">min</p>
        <p className="p-3">sec</p>
      </div>
    </div>
  );
};

export default Timer;
