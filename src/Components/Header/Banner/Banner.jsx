const Banner = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/KFjMkGh/Rectangle-4281.png)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">
            I Grow By Helping People In Need
          </h1>

          

          <div>
            <div className="relative flex rounded-md shadow-sm">
              <input
                type="text"
                className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 " placeholder="Search here"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                
              </div>
              <button
                type="button"
                className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-[#FF444A] text-white hover:bg-[#f83c42] focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              >
                Search
              </button>
            </div>
          </div>




          
        </div>
      </div>
    </div>
  );
};

export default Banner;
