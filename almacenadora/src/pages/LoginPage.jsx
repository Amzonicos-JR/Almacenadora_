<<<<<<< HEAD
import React, { useState } from 'react'
import imgLogin from '../assets/login.png'
=======
import React, { useState, useContext } from 'react'
import { Navbar } from '../components/Navbar'
>>>>>>> asumpango-2018373
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate();
=======
import { AuthContext } from '../Index'

export const LoginPage = () => {
   const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

>>>>>>> asumpango-2018373
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

<<<<<<< HEAD
  const login = async (e) => {
    try {
=======
  const logIn = async(e)=>{
    try{
>>>>>>> asumpango-2018373
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      console.log(data.userLogged)
      if(data.message){
        alert(data.message)
        localStorage.setItem('token', data.token)
<<<<<<< HEAD
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Login Error')
=======
        setDataUser(data.userLogged)
        setLoggedIn(true)
        navigate('/dashboard')
      }      
    }catch(err){
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
>>>>>>> asumpango-2018373
    }
  }
  return (
    <>
<<<<<<< HEAD
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <form>
                    <div className='form-group text-center'>
                      <img src={imgLogin} height='70' alt="130" />
                    </div>
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-floating mb-4">
                      <input type="text" id="loginUser" name='username' onChange={handleChange} className="form-control " placeholder='UserName' />
                      <label htmlFor="LoginUser">User</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input type="password" id="LoginPassword" name='password' onChange={handleChange} className="form-control " placeholder='Password' />
                      <label htmlFor="LoginPassword">Password</label>
                    </div>
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                      <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                    </div>
                    <Link to='home'>
                      <button onClick={(e) => login(e)} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                      <hr className="my-4" />
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
=======
      <Navbar></Navbar>
      <div className='container'>
      <h2 className='text-center'>LogIn</h2>
      <form className='m-5 text-center'>
        <div className="mb-3">
          <label className='form-label' htmlFor="">Username</label>
          <input onChange={handleChange} name='username' className='form-control' type="text" />
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="">Password</label>
          <input onChange={handleChange} name='password' className='form-control' type="password" />
        </div>
        <button onClick={(e)=> logIn(e)} className='btn btn-success'>
          LogIn
        </button>
      </form>
      </div>
>>>>>>> asumpango-2018373
    </>
  )
}
