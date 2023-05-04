import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
import { Outlet, Link } from "react-router-dom";
import UsersPage from "../UsersPage/UsersPage";


export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);
  const [activeView, setActiveView] = useState(null);

  const [showScene, setShowScene] = useState({
    cellar: false,
    lease: false,
    user: false
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };


  const handleScene = (scene) => {
    setShowScene({
      cellar: scene === "cellar",
      lease: scene === "lease",
      user: scene === "user"
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
            {isAdmin ? (
              <>
                <li>
                  <button
                    onClick={() => {
                      handleScene("user");
                    }}
                  >
                    <span className="text">USERS</span>
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
                {activeView === "user" && <UsersPage/>}
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