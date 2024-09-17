import BubbleColumn from "./BubbleColumn";
import { useState } from "react";
import { CountContext } from "../useContext/Context";

const BubbleContainer = () => {
  const [updateCount, setUpdateCount] = useState(0);

  const handleUpdateCount = () => {
    setUpdateCount((prev) => prev + 1);
  };

  const renderColumns = () => {
    const date = new Date();
    const dateNum = date.getDay() + 1;
    const bubbleColumnsArray = [];
    for (let i = 1; i <= 51; i++) {
      bubbleColumnsArray.push(
        <div>
          <CountContext.Provider value={handleUpdateCount}>
            <BubbleColumn bubbleNum={7} />
          </CountContext.Provider>
        </div>
      );
    }
    bubbleColumnsArray.push(
      <div>
        <CountContext.Provider value={handleUpdateCount}>
          <BubbleColumn bubbleNum={dateNum} />
        </CountContext.Provider>
      </div>
    );
    return bubbleColumnsArray;
  };

  return (
    <div>
      <h3 className="pb-1 pt-10">{updateCount} contributions in 20XX</h3>
      <div className="flex border-[1px] border-grey-line rounded-t p-5">
        {renderColumns()}
      </div>
    </div>
  );
};

export default BubbleContainer;
