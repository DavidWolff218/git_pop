import { useState } from "react";

type ModalProps = {
  handleModalClick: () => void;
};

const Modal = ({ handleModalClick }: ModalProps) => {

  // const [expanded, setExpanded]
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-1000 bg-slate-800/75">
        <div className="bg-green-2/50 px-8 rounded-lg p-4 border-2">
          
          <div className={'flex flex-col items-center justify-center'}>
            <h2 className="text-xl text-center py-2">
              Struggling to keep up with your github contributions?
            </h2>
            <h2 className="text-xl text-center pb-4">
              We know it’s tough to code daily and hit those green squares, but here,< br/> you can fill them in and feel instantly productive.
            </h2>
            <h2 className="text-2xl text-center pb-2">
              Pretend you've done all the coding and bask in the green glow!
            </h2>
            <button onClick={handleModalClick} className="p-2 text-xl bg-green-3 hover:bg-green-4 my-2 border-2 rounded transition-transform transform hover:scale-110">Git Poppin!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
