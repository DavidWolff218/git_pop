import BubbleContainer from "./BubbleContainer";
import RepoBoxes from "./RepoBoxes";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {
  useEffect(() => {
    toast(
      `Feeling the pressure to keep up with your GitHub contributions? 
      We know it can be tough to code every day and earn those green squares. But don't worry, here  you can fill in the squares and enjoy the instant satisfaction of looking super productive. Pretend you've done all the coding and bask in the green glow!`,
      {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      }
    );
  }, []);

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
