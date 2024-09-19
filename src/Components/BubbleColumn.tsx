import Bubble from "./Bubble";

type bubbleColumnProps = {
  bubbleNum: number;
  columnNum: number;
  handleUpdateCount: () => void
};

const BubbleColumn = ({ bubbleNum, columnNum, handleUpdateCount }: bubbleColumnProps) => {

  console.log("column has rerendered")
  const renderBubbles = () => {
    const bubblesArray = [];
    for (let i = 1; i <= bubbleNum; i++) {
      bubblesArray.push(<Bubble handleUpdateCount = {handleUpdateCount} key={`${columnNum}-${i}`}/>);
    }
    return bubblesArray;
  };

  return <>{renderBubbles()}</>;
};

export default BubbleColumn;
