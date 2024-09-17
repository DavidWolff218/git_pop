import Bubble from "./Bubble";

type bubbleColumnProps = {
  bubbleNum: number;
};

const BubbleColumn = ({ bubbleNum }: bubbleColumnProps) => {
  const renderBubbles = () => {
    const bubblesArray = [];
    for (let i = 1; i <= bubbleNum; i++) {
      bubblesArray.push(<Bubble />);
    }
    return bubblesArray;
  };

  return <>{renderBubbles()}</>;
};

export default BubbleColumn;
