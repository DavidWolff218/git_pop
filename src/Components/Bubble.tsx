import { useState } from "react";

const Bubble = () => {
  const [level, setLevel] = useState(0);
  const [levelColor, setLevelColor] = useState("bg-grey-start");
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    if (level < 4) {
      setLevel((prev) => {
        const newLevel = prev + 1;
        setLevelColor(`bg-green-${newLevel}`);
        const bubble_audio = new Audio(`/audio/git_boop_${newLevel}.mp3`)
        bubble_audio.volume = 0.2
        bubble_audio.play()
        setExpanded(true)
        setTimeout(() => {setExpanded(false)}, 250)
        return newLevel;
      });
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`size-2.5 ${levelColor} rounded-sm my-0.5 mx-[1px] transition-transform duration-100 ease-in-out ${expanded ? "scale-110" : ""}`}
      />
    </>
  );
};

export default Bubble;
