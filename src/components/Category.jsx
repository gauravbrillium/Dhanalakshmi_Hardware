const Category = () => {
  return (
    <div className="pt-16">
      <h1 className="text-center font-bold text-4xl">Category</h1>
      <div className="flex justify-center items-center flex-wrap gap-14 mt-8">
        <div className="flex flex-col items-center group relative">
          <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-secondary">
            <img
              src="./images/category/tools.png"
              alt="Tools"
              className="w-36 h-36 transition-transform duration-300 ease-in-out transform group-hover:scale-75"
            />
          </div>
          <span className="mt-6">Tools</span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-secondary">
            <img
              src="./images/category/paint.png"
              alt="Paint & Supplies"
              className="w-36 h-36 transition-transform duration-300 ease-in-out transform group-hover:scale-75"
            />
          </div>
          <span className="mt-6">Paint & Supplies</span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-secondary">
            <img
              src="./images/category/building.png"
              alt="Building Materials"
              className="w-36 h-36 transition-transform duration-300 ease-in-out transform group-hover:scale-75"
            />
          </div>
          <span className="mt-6">Building Materials</span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-secondary">
            <img
              src="./images/category/electrical.png"
              alt="Electrical Supplies"
              className="w-36 h-36 transition-transform duration-300 ease-in-out transform group-hover:scale-75"
            />
          </div>
          <span className="mt-6">Electrical Supplies</span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-secondary">
            <img
              src="./images/category/plumbing.png"
              alt="Plumbing Supplies"
              className="w-36 h-36 transition-transform duration-300 ease-in-out transform group-hover:scale-75"
            />
          </div>
          <span className="mt-6">Plumbing Supplies</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
