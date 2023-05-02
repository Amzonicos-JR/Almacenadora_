import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Lease } from "../../components/Lease/Lease";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const LeasesPage = () => {
  const [leases, setLeases] = useState([{}]);
  const [activeView, setActiveView] = useState("get");
  const [showScene, setShowScene] = useState({
    get: false,
    add: false,
    upadte: false,
  });
  const [idLease, setIdLease] = useState("");
  const [idCellar, setIdCellar] = useState("")
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

  useEffect(() => {
    getLeases();
  }, []);

  //----------------------Agregar
  const [form, setform] = useState({
    account: "",
    cellar: "",
    user: "",
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addLease = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:3000/lease/add",
        form
      );
      if (data.message) {
        alert(data.message);
        handleScene("get");
        getLeases();
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
  const [form2, setform2] = useState({
    cellar: ""
  });

  const handleChange2 = (e) => {
    setform2({
      ...form2,
      [e.target.name]: e.target.value,
    });
  };  
  const viewUpdateLease = async (id, idCellar) => {
    try {
      setIdLease(id)
      setIdCellar(idCellar)
      handleScene("update")
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error to updated lease");
    }
  }
  const updateLease = async(e)=>{
    try{
      e.preventDefault()
      const {data} = await axios.put(`http://localhost:3000/lease/update/${idLease}`, form2)
      console.log('hola', idLease)
      if(data.message){
        alert('se puedo actualizar perfactamente')
        handleScene("get")
        getLeases()
      }
    }catch(err){
      console.log(err)
      alert(err.response?.data.message)
      throw new Error("Error to updated lease")
    }
  }

  return (
    <>
      <section>
        <h1>Lease Page</h1>
        {activeView === "add" && (
          <>
            <form>
              <div className="form-group">
                <label>Account</label>
                <input
                  onChange={handleChange}
                  name="account"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="account"
                />
              </div>
              <div className="form-group">
                <label>Cellar</label>
                <input
                  onChange={handleChange}
                  name="cellar"
                  type="text"
                  className="form-control"
                  placeholder="cellar"
                />
              </div>
              <div className="form-group">
                <label>User</label>
                <input
                  onChange={handleChange}
                  name="user"
                  type="text"
                  className="form-control"
                  placeholder="user"
                />
              </div>
              <button
                onClick={(e) => addLease(e)}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Agregar
              </button>
              <button
                onClick={() => handleScene("get")}
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                Cancelar
              </button>
            </form>
          </>
        )}
        {activeView === "get" && (
          <>
            <button
              onClick={() => {
                handleScene("add");
              }}
              type="button"
              className="btn btn-primary btn-lg btn-block"
            >
              +ADD
            </button>
            {leases.map(
              ({ _id, account, cellar, Services, user, total }, i) => (
                <>
                  <div className="card" style={{ width: "18rem" }}>
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
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => deleteLeasa(_id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </>
              )
            )}
          </>
        )}
        {activeView === "update" && (
          <>
            <form>
              <p>{form2.cellar}</p>
              <div className="form-group">
                <label>Cellar</label>
                <input
                  name="cellar"
                  onChange={handleChange2}
                  type="email"
                  className="form-control"
                  placeholder="Cellar"
                  defaultValue={idCellar}
                />
              </div>
              <button onClick={(e) => updateLease(e)} className="btn btn-primary">
                Update
              </button>
              <button
                onClick={() => handleScene("get")}
                type="submit"
                className="btn btn-primary"
              >
                Cancelar
              </button>
            </form>
          </>
        )}
      </section>
    </>
  );
};
