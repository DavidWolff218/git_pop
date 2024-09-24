import BubbleColumn from "./BubbleColumn";
import React from "react";
import { useState } from "react";
import { CountContext } from "../useContext/Context";

type BubbleContainerProps = {
  handleUpdateCount: () => void
}

const BubbleContainer = ({handleUpdateCount}: BubbleContainerProps) => {
  // const [updateCount, setUpdateCount] = useState(0);

  // const handleUpdateCount = () => {
  //   setUpdateCount((prev) => prev + 1);
  // };

  console.log("bubble container has rerendered")

  const renderColumns = () => {
    const date = new Date();
    const dateNum = date.getDay() + 1;
    const bubbleColumnsArray = [];
    for (let i = 1; i <= 2; i++) {
      bubbleColumnsArray.push(
        <div>
          {/* <CountContext.Provider value={handleUpdateCount}> */}
            <BubbleColumn bubbleNum={7} columnNum={i} key={i} handleUpdateCount={handleUpdateCount}/>
          {/* </CountContext.Provider> */}
        </div>
      );
    }
    bubbleColumnsArray.push(
      <div>
        {/* <CountContext.Provider value={handleUpdateCount}> */}
          <BubbleColumn bubbleNum={dateNum} columnNum={52} key={52} handleUpdateCount={handleUpdateCount}/>
        {/* </CountContext.Provider> */}
      </div>
    );
    return bubbleColumnsArray;
  };

  return (
    <div>
      <div className="flex border-[1px] border-grey-line rounded-t p-5">
        {renderColumns()}
      </div>
    </div>
  );
};

export default React.memo(BubbleContainer);
