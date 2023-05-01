import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
import { Outlet, Link } from "react-router-dom";
import { UsersPage } from "../UsersPage/UsersPage";

export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true)


  const [form, setForm] = useState({
    showUser: false,
    showBodegas: false,
    showClientes: false,
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };

  const reset = {
    showUser: false,
    showBodegas: false,
    showClientes: false,
  };

  const handleChange = (e) => {
    let resert2 = reset;
    resert2[e] = true;
    setForm(resert2);
  };

  const Pag = () => {
    return form.showUser ? (
      <UsersPage />
    ) : form.showBodegas ? (
      <UsersPage />
    ) : (
      <UsersPage />
    );
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
              <Link to="users">
                <button onClick={()=>handleChange('showUsers')}>
                  <span className="text">USERS</span>
                </button>
              </Link>
            </li>
            {
              (dataUser.role = "ADMIN" ? (
                <li>
                  <Link to="users">
                    <button onClick={()=>handleChange('showAnimal')}>
                      <span className="text">AXEL</span>
                    </button>
                  </Link>
                </li>
              ) : (
                <></>
              ))
            }
            {
              <li>
                <Link to="users">
                  <button>
                    <span className="text">APPOINTMENT</span>
                  </button>
                </Link>
              </li>
            }
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
            <main>
              <div className="head-title">
                <div className="left">
                  <h1>Control Administrador</h1>
                </div>
              </div>
              <ul className="box-info">
                <li>
                  <span className="text">
                    <h3>Users</h3>
                  </span>
                </li>
                <li>
                  <span className="text">
                    <h3>Animals</h3>
                  </span>
                </li>
                <li>
                  <span className="text">
                    <h3>Appointments</h3>
                  </span>
                </li>
              </ul>
            </main>
          ) : (
            <div>{Pag()}</div>
          )}
        </section>
      </div>
    </>
  );
};
