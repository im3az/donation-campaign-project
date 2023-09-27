import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center px-7 lg:px-0 py-8 ">
      <div className="">
        <div>
          <img src="https://i.ibb.co/4WLW93V/Logo.png" alt="" />
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <ul className="flex px-1 gap-4 text-lg font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
