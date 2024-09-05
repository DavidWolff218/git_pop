import BubbleColumn from "./BubbleColumn";
import { useState } from "react";

const BubbleContainer = () => {
  const [updateCount, setUpdateCount] = useState(0);

  console.log(updateCount, "updatedCount");

  const renderColumns = () => {
    const date = new Date();
    const dateNum = date.getDay() + 1;
    const bubbleColumnsArray = [];
    for (let i = 1; i <= 51; i++) {
      bubbleColumnsArray.push(
        <div>
          <BubbleColumn bubbleNum={7} handleUpdateCount={handleUpdateCount} />
        </div>
      );
    }
    bubbleColumnsArray.push(
      <div>
        <BubbleColumn
          bubbleNum={dateNum}
          handleUpdateCount={handleUpdateCount}
        />
      </div>
    );
    return bubbleColumnsArray;
  };

  const handleUpdateCount = () => {
    setUpdateCount((prev) => prev + 1);
  };

  return (
    <>
      <h3 className="text-white pb-1">{updateCount} contributions in 20XX</h3>
      <div className="flex w-max border-[1px] border-grey-line rounded-t p-5">
        {renderColumns()}
      </div>
    </>
  );
};

export default BubbleContainer;
