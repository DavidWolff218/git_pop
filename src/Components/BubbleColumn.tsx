import Bubble from "./Bubble";

type bubbleColumnProps = {
  bubbleNum: number
  handleUpdateCount: () => void;
}

const BubbleColumn = ({bubbleNum, handleUpdateCount}: bubbleColumnProps) => {

  const renderBubbles = () => {
    const bubblesArray = []
     for (let i = 1; i <= bubbleNum; i++) {
      bubblesArray.push(<Bubble handleUpdateCount={handleUpdateCount}/>);
    }
    return bubblesArray
  };

  return (
  <>
    {renderBubbles()}
  </>
  );
};

export default BubbleColumn;
