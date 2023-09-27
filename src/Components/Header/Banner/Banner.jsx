const Banner = () => {
  const handleSubmit=e=>{
    e.preventDefault();
  }
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
            <form onSubmit={handleSubmit} className="relative flex rounded-md shadow-sm">
              <input
                type="text"
                className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 "
                placeholder="Search here"
              />
              <input
                type="submit"
                value="Search"
                className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-[#FF444A] text-white hover:bg-[#f83c42] focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
