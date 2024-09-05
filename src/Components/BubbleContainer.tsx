import BubbleColumn from "./BubbleColumn";

const BubbleContainer = () => {
  const renderColumns = () => {
    const date = new Date()
    const dateNum = date.getDay() + 1
    const bubbleColumnsArray = [];
    for (let i = 1; i <= 51; i++) {
      bubbleColumnsArray.push(<div><BubbleColumn bubbleNum={7} /></div>);
    }
    bubbleColumnsArray.push(<div><BubbleColumn bubbleNum={dateNum} /></div>)
    return bubbleColumnsArray;
  };

  return (
    <div className="flex w-max border-[1px] border-grey-line rounded-t p-5">
    {renderColumns()}
    </div>
  );
};

export default BubbleContainer;
