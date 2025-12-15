import ChrisPortrait from "@/assets/chris-portrait.jpg";
import { Typography } from "@/components/ui/typography";
import { useEffect, useState } from "react";

const CIRCLE_DIAMETER = 120;
const DOT_DIAMETER = 8; // tailwind h-2/w-2 = 8px
const DOT_RADIUS = DOT_DIAMETER / 2;
const ORBIT_OFFSET = 6; // distance outside the main circle

type CentralTime = {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

function getCentralTime(): CentralTime {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const parts = formatter.formatToParts(now);

  const hours = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minutes = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const seconds = Number(parts.find((p) => p.type === "second")?.value ?? "0");

  return {
    hours,
    minutes,
    seconds,
    milliseconds: now.getMilliseconds(), // use local ms for smoothness
  };
}

function ProfileClock() {
  const [time, setTime] = useState<CentralTime>(() => getCentralTime());
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const ORBIT_RADIUS =
    CIRCLE_DIAMETER / 2 + ORBIT_OFFSET + DOT_RADIUS - (isHovered ? 16 : 0);

  // New orbit radii for hour, minute, and second dots
  const SECOND_DOT_ORBIT = ORBIT_RADIUS;
  const MINUTE_DOT_ORBIT = ORBIT_RADIUS;
  const HOUR_DOT_ORBIT = ORBIT_RADIUS;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCentralTime());
    }, 1000 / 120); // More frequent updates for smoother motion
    return () => clearInterval(interval);
  }, []);

  // Seconds: high precision (0deg = 12 o'clock)
  const seconds = time.seconds + time.milliseconds / 1000;
  const secAngle = (seconds / 60) * 360;

  // Minutes: use seconds for smooth movement too
  const minutes = time.minutes + seconds / 60;
  const minAngle = (minutes / 60) * 360;

  // Hours: use minutes for smooth movement, 12-hour format
  const hours = (time.hours % 12) + minutes / 60;
  const hourAngle = (hours / 12) * 360;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      id="profile-clock"
      className="relative **:z-50"
      style={{
        width: CIRCLE_DIAMETER,
        height: CIRCLE_DIAMETER,
      }}
    >
      <div
        id="profile-clock-border"
        className="absolute top-0 left-0 z-5 rounded-full bg-white"
        style={{ width: '100%', height: '100%', opacity: isHovered ? 0.9 : 0.3 }}
      />
      <div
        id="profile-circle"
        className="absolute top-0 left-0 z-10 rounded-full duration-300"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${ChrisPortrait})`,
          backgroundSize: "cover",
          backgroundPosition: "80% 60%",
          backgroundRepeat: "no-repeat",
          opacity: isHovered ? 0.15 : 0.9,
        }}
      />
      <div
        id="profile-clock-content"
        className="absolute top-0 left-0 z-20 rounded-full border border-white flex flex-col justify-center items-center"
        style={{ width: '100%', height: '100%' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography variant="caption" className="text-gray-800"
        style={{
          opacity: isHovered ? 1 : 0,
        }}>Austin, TX</Typography>
        <Typography variant="eyebrow" className="text-gray-600"
        style={{
          opacity: isHovered ? 1 : 0,
        }}>
          {new Date().toLocaleTimeString("en-US", { timeZone: "America/Chicago" })}
        </Typography>
      </div>
      <div
        id="profile-clock-dots"
        className="absolute left-1/2 top-1/2 z-50"
        style={{
          width: 0,
          height: 0,
          transform: "translate(-50%, -50%)", // Center the container
        }}
        
      >
        {/* Hour dot */}
        <div
          className="h-2 w-2 rounded-full bg-[#060610] duration-300 ease-in-out pointer-events-none"
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(50% - ${HOUR_DOT_ORBIT + 1}px)`,
            transform: `translate(-50%, 0) rotate(${hourAngle}deg)`,
            transformOrigin: `50% ${HOUR_DOT_ORBIT + 1}px`,
          }}
        />
        {/* Minute dot */}
        <div
          className="h-1.5 w-1.5 rounded-full bg-[#060610] duration-300 ease-in-out pointer-events-none"
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(50% - ${MINUTE_DOT_ORBIT + 2}px)`,
            transform: `translate(-50%, 0) rotate(${minAngle}deg)`,
            transformOrigin: `50% ${MINUTE_DOT_ORBIT + 1}px`,
          }}
        />
        {/* Second dot */}
        <div
          className="h-1 w-1 rounded-full bg-[#060610] duration-300 ease-in-out pointer-events-none"
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(50% - ${SECOND_DOT_ORBIT}px)`,
            transform: `translate(-50%, 0) rotate(${secAngle}deg)`,
            transformOrigin: `50% ${SECOND_DOT_ORBIT}px`,
          }}
        />
      </div>
    </div>
  );
}

export { ProfileClock };
