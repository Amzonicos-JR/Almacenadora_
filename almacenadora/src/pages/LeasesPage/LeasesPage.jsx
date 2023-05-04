import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Lease } from "../../components/Lease/Lease";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const LeasesPage = () => {
  const [leases, setLeases] = useState([{}]);
  const [account, setAccount] = useState({});
  const [cellar, setCellar] = useState({});
  const [user, setUser] = useState({});

  const [activeView, setActiveView] = useState("get");
  const [showScene, setShowScene] = useState({
    get: false,
    add: false,
    upadte: false,
  });

  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const handleScene = async (scene) => {
    setShowScene({
      get: scene === "get",
      add: scene === "add",
      update: scene === "update",
    });

    setActiveView(scene);
  };

  //----------------------Mostrar Menus
  const getAccounts = async () => {
    try {
      const { data } = await axios(
        "http://localhost:3000/account/get-accounts"
      );
      if (data.accounts) {
        console.log(data.accounts);
        setAccount(data.accounts);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting accounts");
    }
  };

  const getCellars = async () => {
    try {
      const { data } = await axios("http://localhost:3000/cellar/get");
      if (data.cellars) {
        console.log(data.cellars);
        setCellar(data.cellars);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting cellars");
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios("http://localhost:3000/user/getUsers");
      if (data.users) {
        console.log(data.users);
        setUser(data.users);
      }
    } catch (err) {
      console.error(err);
    }
  };
  //----------------------Mostrar
  const getLeases = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/lease/get", {
        headers: headers,
      });
      if (data.leases) {
        setLeases(data.leases);
        console.log(data.leases);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting leases");
    }
  };



  //----------------------Agregar
  const viewAddLease = async () => {
    try {
      handleScene("add");
      getAccounts();
      getCellars();
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const addLease = async (e) => {
    try {
      e.preventDefault();
      let lease = {
        account: document.getElementById("inputAccount").value,
        cellar: document.getElementById("inputCellar").value,
        user: document.getElementById("inputUser").value,
      };
      const { data } = await axios.post(
        "http://localhost:3000/lease/add",
        lease
      );
      getAccounts();
      if (data.message) {
        alert(data.message);
        handleScene("get");
        getLeases()
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error in savid to lease");
    }
  };
  //----------------------Eliminar
  const deleteLeasa = async (id) => {
    try {
      let confirmDelete = confirm("Estas seguro de eliminar este lease ");
      if (confirmDelete) {
        const { data } = await axios.delete(
          `http://localhost:3000/lease/delete/${id}`
        );
        getLeases();
        alert(`${data.message}`);
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error to deleted lease");
    }
  };

  //----------------------Update
  const [idLease, setIdLease] = useState("");
  const viewUpdateLease = async (id, idCellar) => {
    try {
      setIdLease(id);
      handleScene("update");
      getCellars();
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error to updated lease");
    }
  };

  const [idCellar, setIdCellar] = useState("");
  const updateLease = async (e) => {
    try {
      let form = {
        cellar: document.getElementById("optionIdCellar").value
      }
      const { data } = await axios.put(
        `http://localhost:3000/lease/update/${idLease}`,
        form
      );
      if (data.message) {
        alert("se puedo actualizar perfactamente");
        navigate('/')
        handleScene("get");
        getLeases()
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error to updated lease");
    }
  };
  useEffect(() => {
    getUser();
    getCellars();
    getLeases();
    getAccounts();
  }, []);
  return (
    <>
      <section className="container p-5 my-1">
        <h1 className="text-center p-3 m-2">Lease Page</h1>
        {activeView === "add" && (
          <>
            <form>
              <div className="mb-3">
                <label htmlFor="inputAccount" className="form-label">
                  Accounts
                </label>
                <select className="form-control" id="inputAccount">
                  {account.map(({ _id, name }, i) => {
                    return (
                      <option key={i} value={_id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="inputCellar" className="form-label">
                  Cellars
                </label>
                <select className="form-control" id="inputCellar">
                  {cellar.map(({ _id, name, availability }, i) => {
                    return (
                      <>
                        {availability === "available" && (
                          <option key={i} value={_id}>
                            {name}
                          </option>
                        )}
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="inputUser" className="form-label">
                  Users
                </label>
                <select className="form-control" id="inputUser">
                  {user.map(({ _id, username }, i) => {
                    return (
                      <option key={i} value={_id}>
                        {username}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <button
                  onClick={(e) => addLease(e)}
                  type="button"
                  className="btn btn-primary btn-lg btn-block m-3 p-2"
                >
                  Agregar
                </button>
                <button
                  onClick={() => handleScene("get")}
                  type="button"
                  className="btn btn-primary btn-lg btn-block m-3 p-2"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}
        {activeView === "get" && (
          <>
            <div className="row g-0 justify-content-center">
              <button
                onClick={() => {
                  viewAddLease();
                }}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                +ADD
              </button>
              {leases.map(
                ({ _id, account, cellar, Services, user, total }, i) => (
                  <>
                    <div className="card m-3 g-0" style={{ width: "18rem" }}>
                      <h5 className="text-center">{_id}</h5>
                      <Lease
                        account={account}
                        cellar={cellar}
                        user={user}
                        total={total}
                      ></Lease>
                      <div className="card-body">
                        <button
                          onClick={() => viewUpdateLease(_id, cellar._id)}
                          type="button"
                          className="btn btn-warning m-1 p-2"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deleteLeasa(_id)}
                          type="button"
                          className="btn btn-danger m-1 p-2"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </>
        )}
        {activeView === "update" && (
          <>
            <form>
              <div className="mb-3">
                <label htmlFor="inputCellarUpdate" className="form-label">
                  Cellars
                </label>
                <select className="form-control" id="inputCellarUpdate">
                  {cellar.map(({ _id, name, availability }, i) => {
                    return (
                      <>
                        {availability === "available" && (
                          <option key={i} value={_id} id="optionIdCellar">
                            {name}
                          </option>
                        )}
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <button
                  onClick={(e) => updateLease(e)}
                  className="btn btn-primary m-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleScene("get")}
                  type="submit"
                  className="btn btn-primary m-2"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </>
  );
};
