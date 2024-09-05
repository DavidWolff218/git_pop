import BubbleContainer from "./BubbleContainer";
import RepoBoxes from "./RepoBoxes";

const Home = () => {
  return (
    <div className="h-screen flex">
      <div className="w-[200px] h-[200px] rounded-full border-[2px] border-grey-line" />
      <div>
     <RepoBoxes />
      <BubbleContainer />
      </div>
    </div>
  );
};

export default Home;
