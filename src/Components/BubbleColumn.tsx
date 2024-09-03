import Bubble from "./Bubble";

const BubbleColumn = () => {

  const renderBubbles = () => {
    const bubblesArray = []
     for (let i = 0; i <= 7; i++) {
      bubblesArray.push(<Bubble />);
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
