import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContex } from '../Index'

export const LoginPage = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContex);
  const navigate = useNavigate()

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

  const Login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        setLoggedIn(true)
        navigate('/dashboard')
      }
    } catch (err) {
      console.error(err);
      alert('Error no datos')
    }
  }

  return (
    <>
      <h1>Login</h1>
    </>
  )
}
