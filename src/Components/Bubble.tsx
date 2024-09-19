import { useState, useContext } from "react";
import { CountContext } from "../useContext/Context";


type BubbleProps = {
  handleUpdateCount: () => void
}

const Bubble = ({handleUpdateCount}: BubbleProps) => {
  const [level, setLevel] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // const handleUpdateCount = useContext(CountContext);

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

  const getColorByLevel = (level: number) => {
    switch (level) {
      case 0:
        return '#151A22';
      case 1:
        return '#0E4429';
      case 2:
        return '#166D32';
      case 3:
        return '#26A641';
      case 4:
        return '#39D353';
      default:
        return '#151A22'; // Default color
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{ backgroundColor: getColorByLevel(level) }} 
        className={`size-5 rounded-sm my-0.5 mx-[1px] transition-transform duration-100 ease-in-out ${
          expanded ? "scale-110" : ""
        }`}
      />
    </>
  );
};

export default Bubble;

//