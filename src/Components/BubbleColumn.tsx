import Bubble from "./Bubble";

type bubbleColumnProps = {
  bubbleNum: number;
  columnNum: number
};

const BubbleColumn = ({ bubbleNum, columnNum }: bubbleColumnProps) => {
  const renderBubbles = () => {
    const bubblesArray = [];
    for (let i = 1; i <= bubbleNum; i++) {
      bubblesArray.push(<Bubble key={`${columnNum}-${i}`}/>);
    }
    return bubblesArray;
  };

  return <>{renderBubbles()}</>;
};

export default BubbleColumn;
