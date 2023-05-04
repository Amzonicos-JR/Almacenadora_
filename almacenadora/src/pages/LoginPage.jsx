import React, { useState, useContext } from 'react'
import { Navbar } from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import bl from '../assets/bodegaL.png'
import '../Login.css'



export const LoginPage = () => {
  const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const logIn = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      console.log(data.userLogged)
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        setDataUser(data.userLogged)
        setLoggedIn(true)
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
    }
  }
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                <span className="h1 fw-bold mb-0">KINAL S.A</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form style={{ width: "23rem" }}>

                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="text" id="loginUser" name='username' onChange={handleChange} placeholder='UserName' className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example18">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password" id="LoginPassword" name='password' onChange={handleChange} placeholder='Password'
                      className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button onClick={(e) => logIn(e)} type="button" class="btn btn-secondary">Login</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

                </form>

              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={bl}
                alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}