import BubbleColumn from "./BubbleColumn";

const BubbleContainer = () => {
  const renderColumns = () => {
    const bubbleColumnsArray = [];
    for (let i = 0; i <= 51; i++) {
      bubbleColumnsArray.push(<div><BubbleColumn /></div>);
    }
    return bubbleColumnsArray;
  };

  return (
    <div className="flex">
    {renderColumns()}
    </div>
  );
};

export default BubbleContainer;
