import { useState, useContext } from "react";
import { CountContext } from "../useContext/Context";

type BubbleProps = {
  handleUpdateCount: () => void;
};

const Bubble = ({ handleUpdateCount }: BubbleProps) => {
  const [level, setLevel] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // const handleUpdateCount = useContext(CountContext);
console.log("bubbles have rerendered")
  const handleClick = () => {
    if (level < 4) {
      const newLevel = level + 1;
      setLevel(newLevel);
      const bubble_audio = new Audio(`/audio/git_boop_${newLevel}.mp3`);
      bubble_audio.volume = 0.2;
      bubble_audio.play();
      setExpanded(true);
      setTimeout(() => {
        setExpanded(false);
      }, 250);
    }
    handleUpdateCount();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`size-5 bg-green-${level} rounded-sm my-0.5 mx-[1px] transition-transform duration-100 ease-in-out ${
          expanded ? "scale-110" : ""
        }`}
      />
    </>
  );
};

export default Bubble;
