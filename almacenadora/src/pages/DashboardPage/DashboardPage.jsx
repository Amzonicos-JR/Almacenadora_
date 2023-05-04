import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
<<<<<<< HEAD
import { Outlet, Link } from "react-router-dom";
// import { UsersPage } from "../UsersPage/UsersPage";
import { AccountPage } from "../AccountPage/AccountPage";
// import { LeasesPage } from "../LeasesPage/LeasesPage";
// import CellarPage from "../CellarPage/CellarPage";

=======
import { LeasesPage } from "../LeasesPage/LeasesPage";
>>>>>>> jsis-2018520

export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);

  const [activeView, setActiveView] = useState(null);

  const [showScene, setShowScene] = useState({
<<<<<<< HEAD
    // cellar: false,
    // lease: false,
    // user: false,
    account: false
=======
    cellar: false,
    lease: false,
    user: false,
>>>>>>> jsis-2018520
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };

  const handleScene = (scene) => {
    setShowScene({
<<<<<<< HEAD
      // cellar: scene === "cellar",
      // lease: scene === "lease",
      // user: scene === "user",
      account: scene === "account"
=======
      cellar: scene === "cellar",
      lease: scene === "lease",
      user: scene === "user",
>>>>>>> jsis-2018520
    });

    setActiveView(scene);
  };

  return (
    <>
      <div id="body">
        <section id="sidebar">
          <a className="brand ms-3">
            <span className="text">ALMACENADORA</span>
          </a>
          <ul className="side-menu top">
            <li className="active">
              <button>
                <span className="text">Control Panel</span>
              </button>
            </li>
<<<<<<< HEAD
            {/* <li>
              <button
                onClick={() => {
                  handleScene("user");
                }}
              >
                <span className="text">USER</span>
              </button>
            </li> */}
=======
>>>>>>> jsis-2018520
            {isAdmin ? (
              <>
                {/* <li>
                  <button
<<<<<<< HEAD
                    onClick={() => {
                      handleScene("cellar");
                    }}
                  >
                    <span className="text">Cellars</span>
                  </button>
                </li> */}
                <li>
                  <button
=======
                    className="d-flex align-items-center"
>>>>>>> jsis-2018520
                    onClick={() => {
                      handleScene("account");
                    }}
                  >
                    <span className="text">Accounts</span>
                  </button>
                </li>
                {/* <li>
                  <button
                    onClick={() => {
                      handleScene("lease");
                    }}
                  >
                    <span className="text">ARRENDAMIENTOS</span>
                  </button>
                </li> */}
              </>
            ) : (
              <></>
            )}
          </ul>
          <ul className="side-menu top">
            <li>
              <button>
                <span className="text">Settings</span>
              </button>
            </li>
            <li>
              <button onClick={logOut}>
                <span className="text">LogOut</span>
              </button>
            </li>
          </ul>
        </section>

        <section id="content">
          {isAdmin ? (
            <>
              <section id="content">
<<<<<<< HEAD

                {activeView === "account" && <AccountPage />}
=======
                {activeView === "lease" && <LeasesPage />}
>>>>>>> jsis-2018520
              </section>
            </>
          ) : (
            <div></div>
          )}
        </section>
      </div>
    </>
  );
};
