import { useState } from "react";

const BubbleCounter = () => {
  const [updateCount, setUpdateCount] = useState(0);

  return (
    <div>
      <h3 className="pb-1 pt-10">{updateCount} contributions in 20XX</h3>
    </div>
  );
};

export default BubbleCounter;
