import packageimg from "./assets/products/package.png"
import rocketimg from "./assets/products/rocket.png"
import userimg from "./assets/products/user.png"

const GetStarted = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-neutral-900 mb-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-neutral-600 text-lg mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* 3 Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="group bg-white rounded-3xl p-10 shadow-sm border border-base-200 
                        hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center 
                              group-hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-5xl"><img src={userimg} alt="" /></span>
                </div>
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-purple-600 text-white 
                              text-lg font-bold rounded-2xl flex items-center justify-center shadow-md">
                  01
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Create Account</h3>
            <p className="text-neutral-600 leading-relaxed text-[15.5px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white rounded-3xl p-10 shadow-sm border border-base-200 
                        hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center 
                              group-hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-5xl"><img src={packageimg} alt="" /></span>
                </div>
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-purple-600 text-white 
                              text-lg font-bold rounded-2xl flex items-center justify-center shadow-md">
                  02
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Choose Products</h3>
            <p className="text-neutral-600 leading-relaxed text-[15.5px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white rounded-3xl p-10 shadow-sm border border-base-200 
                        hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-out">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center 
                              group-hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-5xl"><img src={rocketimg} alt="" /></span>
                </div>
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-purple-600 text-white 
                              text-lg font-bold rounded-2xl flex items-center justify-center shadow-md">
                  03
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Start Creating</h3>
            <p className="text-neutral-600 leading-relaxed text-[15.5px]">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetStarted;