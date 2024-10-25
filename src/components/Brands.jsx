const Brands = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center font-bold text-4xl">Available Brands</h1>

      <div className="flex justify-center items-center gap-2 mt-8 bg-secondary py-8">
        <div className="relative w-80 h-80 group">
          <img
            src="./images/brand/paints.png"
            alt="Paints"
            className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-20"
          />
          <img
            src="./images/brand/paints-hover.png"
            alt="Paints Hover"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="relative w-80 h-80 group">
          <img
            src="./images/brand/tool.png"
            alt="Tools"
            className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-20"
          />
          <img
            src="./images/brand/tool-hover.png"
            alt="Tools Hover"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="relative w-80 h-80 group">
          <img
            src="./images/brand/electricals.png"
            alt="Electrical"
            className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-20"
          />
          <img
            src="./images/brand/electricals-hover.png"
            alt="Electrical Hover"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="relative w-80 h-80 group">
          <img
            src="./images/brand/buildings.png"
            alt="Building Materials"
            className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-20"
          />
          <img
            src="./images/brand/buildings-hover.png"
            alt="Building Materials Hover"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
