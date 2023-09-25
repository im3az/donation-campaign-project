import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div>
          <img src="/public/Logo.png" alt="" />
        </div>
      </div>
      <div className="flex-none">
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
