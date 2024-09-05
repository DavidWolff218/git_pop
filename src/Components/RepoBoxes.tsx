const RepoBoxes = () => {
  return (
    <div className="w-[615px] flex flex-wrap gap-3  mt-10 mb-5">
      <div className="flex flex-col justify-around pl-3 h-[60px] w-[300px] border-[1px] border-grey-line text-link font-bold rounded">
        <span>next_facebook</span>
        <span>React</span>
      </div>
      <div className="flex flex-col justify-around pl-3 h-[60px] w-[300px] border-[1px] border-grey-line text-link font-bold rounded">
        <span>git_pop</span>
        <span>TypeScript</span>
      </div>
      <div className="flex flex-col justify-around pl-3 h-[60px] w-[300px] border-[1px] border-grey-line text-link font-bold rounded">
        <span>to_do_list</span>
        <span>React</span>
      </div>
      <div className="flex flex-col justify-around pl-3 h-[60px] w-[300px] border-[1px] border-grey-line text-link font-bold rounded">
        <span>bank_software_update</span>
        <span>COBOL</span>
      </div>
    </div>
  );
};

export default RepoBoxes;
