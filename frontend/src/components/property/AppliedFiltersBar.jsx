
const AppliedFiltersBar = ({reset,project,setProjFilter}) => {
  return (
    <div className="px-8 py-4 flex justify-between">

      <div className="flex gap-3 items-center">
        <p className=" text-sm font-medium text-gray-500">Applied Filters</p>
        <p className="text-gray-500 text-sm">|</p>
        <div className="flex items-center gap-2 text-gray-500">
          <div

            className="inline-flex  items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
            
          >
            {project.label}
           
          </div>
        </div>
      </div>

      <div>
        <button 
        onClick={()=>{reset()}}
        className="text-red-800 font-medium text-sm">
            Reset
        </button>
      </div>
    </div>
  );
};

export default AppliedFiltersBar;
