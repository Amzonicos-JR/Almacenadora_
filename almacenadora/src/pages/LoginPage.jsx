import React, { useState } from 'react'
import imgLogin from '../assets/login.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
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

  const login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Login Error')
    }
  }
  return (
    <>
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
    </>
  )
}
