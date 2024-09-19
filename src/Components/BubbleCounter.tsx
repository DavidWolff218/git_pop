import { useState } from "react";

type BubbleCounterProps = {
  updateCount: number
}

const BubbleCounter = ({updateCount}: BubbleCounterProps) => {
  
  return (
    <div>
      <h3 className="pb-1 pt-10">{updateCount} contributions in 20XX</h3>
    </div>
  );
};

export default BubbleCounter;
