const Herosection = () => {
  return (
    <div className="bg-secondary flex justify-between items-center px-8 py-12">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold fade-in">
          &ldquo;Your Trusted Hardware Partner for 31 Years!&rdquo;
        </h1>
        <p className="mt-4 fade-in">
          &ldquo;We Got You Covered for All Your Hardware Needs Since
          1993.&rdquo;
        </p>
        <button className="bg-primary rounded-lg p-2 text-white mt-6">
          Visit us today &gt;
        </button>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 border-8 border-primary2 overflow-hidden">
          <div className="absolute top-0 left-0 animate-moveImages">
            <img
              src="./images/herosection/hero1.png"
              alt="Image 1"
              className="w-14 h-14"
            />
          </div>
          <div className="absolute bottom-0 left-0 animate-moveImages">
            <img
              src="./images/herosection/hero2.png"
              alt="Image 2"
              className="w-24 h-24"
            />
          </div>
          <div className="absolute bottom-0 right-0 animate-moveImages">
            <img
              src="./images/herosection/hero3.png"
              alt="Image 3"
              className="w-24 h-24"
            />
          </div>
          <div className="absolute top-0 right-0 animate-moveImages">
            <img
              src="./images/herosection/hero4.png"
              alt="Image 4"
              className="w-36 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
