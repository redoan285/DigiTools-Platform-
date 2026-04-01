import Buttonimg from "./assets/products/Play.png";
import Bannerimg from "./assets/products/banner.png";

const Banner = () => {
  return (
    <section className="px-10 py-16 grid md:grid-cols-2 items-center gap-10">

      {/* LEFT CONTENT */}
      <div>
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
          ● New: AI-Powered Tools Available
        </span>

        <h1 className="text-5xl font-bold text-gray-800 mt-6 leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium">
            Explore Products
          </button>

          <button className="flex items-center gap-2 border-2 border-purple-400 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50">
            <img src={Buttonimg} alt="play" className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={Bannerimg}
          alt="hero"
          className="rounded-xl shadow-lg w-[400px] md:w-[450px]"
        />
      </div>

    </section>
  );
};

export default Banner;