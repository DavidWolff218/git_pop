import BubbleContainer from "./BubbleContainer";
import RepoBoxes from "./RepoBoxes";
import Modal from "./Modal";
import { useEffect, useState } from "react";


const Home = () => {

  const [isModalOpen, setIsModelOpen] = useState(true)

  const handleModalClick = () => {
    setIsModelOpen(false)
  }

  return (
    <div className="h-screen flex justify-center mt-10">
      { isModalOpen ? <Modal handleModalClick={handleModalClick} /> : null }
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


// `Feeling the pressure to keep up with your GitHub contributions? 
//       We know it can be tough to code every day and earn those green squares. But don't worry, here  you can fill in the squares and enjoy the instant satisfaction of looking super productive. Pretend you've done all the coding and bask in the green glow!`,
//       {