const Navbar = () => {
  return (
    <div className="h-16">
      <div className="bg-primary flex items-center justify-between px-6 py-3 fixed w-full">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center ml-5 mr-3">
          <span className="text-xs text-gray-700">Logo</span>
          <img
            src=""
            alt="Logo"
            className="rounded-full object-cover w-10 h-10 hidden"
          />
        </div>
        <ul className="flex gap-16">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Category
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
