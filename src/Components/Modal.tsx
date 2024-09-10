type ModalProps = {
  handleModalClick: () => void;
};

const Modal = ({ handleModalClick }: ModalProps) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-1000 bg-slate-800/75">
        <div className="bg-teal-200 h-1/4 w-1/4">
          <button onClick={handleModalClick}>X</button>
          <h2>
            Feeling the pressure to keep up with your GitHub contributions? We
            know it can be tough to code every day and earn those green squares.
            But don't worry, here you can fill in the squares and enjoy the
            instant satisfaction of looking super productive. Pretend you've
            done all the coding and bask in the green glow!`,
          </h2>
        </div>
      </div>
    </>
  );
};

export default Modal;
