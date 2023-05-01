import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
import { Outlet, Link } from "react-router-dom";
import { UsersPage } from "../UsersPage/UsersPage";
import { CellarsPage } from "../CellarsPage/CellarsPage";
import { LeasesPage } from "../LeasesPage/LeasesPage";


export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);

  const [activeView, setActiveView] = useState(null);

  const [showScene, setShowScene] = useState({
    cellar: false,
    lease: false,
    user: false,
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };

  const handleScene = (scene) => {
    setShowScene({
      user: scene === "user",
      cellar: scene === "cellar",
      lease: scene === "lease",
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
            <li>
              <button>
                <span className="text">USER</span>
              </button>
            </li>
            {isAdmin ? (
              <>
                <li>
                  <button
                    onClick={() => {
                      handleScene("cellar");
                    }}
                  >
                    <span className="text">BODEGAS</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleScene("lease");
                    }}
                  >
                    <span className="text"> ARRENDAMIENTOS </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleScene("user");
                    }}
                  >
                    <span className="text"> WORKERS </span>
                  </button>
                </li>
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
                {activeView === "lease" && <LeasesPage />}
                {activeView === "cellar" && <CellarsPage />}
                {activeView === "user" && <UsersPage />}
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
