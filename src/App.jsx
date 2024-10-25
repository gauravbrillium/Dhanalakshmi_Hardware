import "./App.css";
import About from "./components/About";
import Brands from "./components/Brands";
import Category from "./components/Category";
// import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Herosection />
        <About />
        <Category />
        <Brands />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
