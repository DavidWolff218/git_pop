import { useState } from "react";

const Bubble = () => {
  const [level, setLevel] = useState(0);
  const [levelColor, setLevelColor] = useState("bg-grey-start");
  const [expanded, setExpanded] = useState(false)

  const handleMouseOver = () => {
    if (level < 4) {
      setLevel((prev) => {
        const newLevel = prev + 1;
        setLevelColor(`bg-green-${newLevel}`);
        setExpanded(true)
        setTimeout(() => {setExpanded(false)}, 250)
        return newLevel;
      });
    }
  };

  return (
    <>
      <div
        onClick={handleMouseOver}
        className={`size-2.5 ${levelColor} rounded-sm my-0.5 mx-[1px] transition-transform duration-100 ease-in-out ${expanded ? "scale-110" : ""}`}
      />
    </>
  );
};

export default Bubble;
