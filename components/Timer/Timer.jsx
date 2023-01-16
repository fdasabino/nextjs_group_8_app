import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer">
      <span>{`0${minutes}M`}</span>:<span>{`${seconds}S`}</span>
    </div>
  );
};

export default Timer;
