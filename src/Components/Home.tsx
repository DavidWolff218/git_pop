import BubbleContainer from "./BubbleContainer";
import BubbleCounter from "./BubbleCounter";
import RepoBoxes from "./RepoBoxes";
import Modal from "./Modal";

import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModelOpen] = useState(true);

  const handleModalClick = () => {
    const bubble_audio = new Audio(`/audio/git_boop_4.mp3`);
    bubble_audio.volume = 0.2;
    bubble_audio.play();
    setIsModelOpen(false);
  };

  return (
    <div className="h-screen flex justify-center mt-10">
      {isModalOpen ? <Modal handleModalClick={handleModalClick} /> : null}
      <div className="items-start flex flex-col">
        <div className="flex items-center">
          <div className="w-[200px] h-[200px] rounded-full border-[2px] border-grey-line" />
          <div className="ml-5">
            <RepoBoxes />
          </div>
        </div>
        <BubbleCounter />
        <BubbleContainer />
      </div>
    </div>
  );
};

export default Home;
