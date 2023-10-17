import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    console.log("obseving signout");
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Context-Firebase-Router
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div>
        {user ? (
          <>
            <p className="text-end">{user.email}</p>
            <button onClick={handleSignOut} className="btn btn-sm">
              SignOut
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
