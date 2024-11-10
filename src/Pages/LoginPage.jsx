import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Client from '../apiClient/ApiClient'
const Login = ({setLoggedIn}) => {
    
  const [email, setEmail] = useState('admin@gmail.com')
  const [password, setPassword] = useState('superadmin')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = async () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
    const clinet = Client.getInstance()
    const userDetails = await clinet.login(email, password)

    if(userDetails.admin == true){
      console.log("user", userDetails)  
      setLoggedIn(true)
        console.log("naving")
        navigate("/admin")
    }else{
      setLoggedIn(true)
      navigate("/consumer")
    }
}

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <label htmlFor="email"> email </label>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br />
        <label className="errorLabel">{emailError}</label>
      </div>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <label htmlFor="password"> password </label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <br />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <div className={'inputContainer'}>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-8 mx-auto  rounded-full" type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      <br />
      <p className="text-blue-500 md:text-lg dark:text-gray-400 font-bold">
       Dont have an account ? <Link to="/signin"> Signup </Link>
      </p>
    </div>
  )
}

export default Login