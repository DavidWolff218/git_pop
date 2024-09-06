import BubbleContainer from "./BubbleContainer";
import RepoBoxes from "./RepoBoxes";

const Home = () => {
  return (
    <div className="h-screen flex justify-center mt-10">
      <div className="items-start flex flex-col">
      <div className="flex items-center">
        <div className="w-[200px] h-[200px] rounded-full border-[2px] border-grey-line" />
        <div className="ml-5">
          <RepoBoxes />
        </div>
      </div>
      <BubbleContainer />
      </div>
    </div>
  );
};

export default Home;
