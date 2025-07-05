// // src/components/Header.jsx
// import React from "react";
// import { NavLink } from "react-router-dom"; // remove if you’re using anchor tags
// import logo from "../assets/dev-logo.svg";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => (
//   <header>
//     {/* -------- Top Navbar -------- */}
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
//       <div className="container">
//         {/* Brand / Logo */}
//         <NavLink
//           className="navbar-brand d-flex align-items-center gap-2"
//           to="/"
//         >
//           <img
//             src={logo}
//             alt="CADCAMBRIDGE logo"
//             height="40"
//             className="d-inline-block"
//           />
//           <span className="fw-semibold small text-muted d-none d-md-inline">
//             Mould your future…
//           </span>
//         </NavLink>

//         {/* Mobile toggle */}
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//           aria-controls="mainNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible nav links */}
//         <div className="collapse navbar-collapse" id="mainNavbar">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
//             {[
//               { path: "/", label: "Home", exact: true },
//               { path: "/about", label: "About Us" },
//               { path: "/courses", label: "Courses" },
//               { path: "/placements", label: "Placements" },
//               { path: "/testimonials", label: "Testimonials" },
//               { path: "/gallery", label: "Gallery" },
//               { path: "/blog", label: "Blog" },
//               { path: "/contact", label: "Contact Us" },
//             ].map(({ path, label, exact }) => (
//               <li className="nav-item" key={label}>
//                 <NavLink
//                   to={path}
//                   end={exact}
//                   className={({ isActive }) =>
//                     `nav-link px-lg-2${isActive ? " active fw-semibold" : ""}`
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}

//             {/* CTA button */}
//             <li className="nav-item ms-lg-3">
//               <NavLink
//                 to="/enquire"
//                 className="btn btn-primary fw-semibold px-4 py-2"
//               >
//                 Enquire Now
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </header>
// );

// export default Header;
// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/dev-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          {/* ---------- Brand ---------- */}
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <img src={logo} alt="Logo" height="40" />
            <span className="fw-semibold small text-muted d-none d-md-inline">
              Mould your future…
            </span>
          </NavLink>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ---------- Links ---------- */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
              {/* --- Home (regular link) --- */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              {/* --- About Us --- */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About Us
                </NavLink>
              </li>

              {/* ---------- Courses (dropdown) ---------- */}
              <li className="nav-item dropdown">
                {/* parent trigger */}
                <button
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  id="coursesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </button>

                {/* dropdown panel */}
                <ul
                  className="dropdown-menu shadow"
                  aria-labelledby="coursesDropdown"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Product & Tool Design
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      CAE
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Corporate & College Training
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* --- Remaining regular links --- */}
              {[
                { to: "/", label: "Placements" },
                { to: "/", label: "Testimonials" },
                { to: "/", label: "Gallery" },
                { to: "/", label: "Blog" },
                { to: "/", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li className="nav-item" key={label}>
                  <NavLink className="nav-link" to={to}>
                    {label}
                  </NavLink>
                </li>
              ))}

              {/* --- CTA Button --- */}
              <li className="nav-item ms-lg-3">
                <NavLink
                  to="/"
                  className="btn btn-primary fw-semibold px-4 py-2"
                >
                  Enquire Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
