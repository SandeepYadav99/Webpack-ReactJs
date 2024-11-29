import React from "react";
import { Link, Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
          <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouteLayout;
