import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Client from '../apiClient/ApiClient'

const Home = () => {
  
  const client = Client.getInstance()
  const navigate = useNavigate()
  const [userDetails,setUserDetails] = useState({name})
  useEffect(()=>{

    client.getProfile().then(res =>{
      console.log(" res ",res)
      setUserDetails(res)
    }).catch(() =>{
      setUserDetails({role:"not login"})
    })
  },[])


  const onButtonClick = () => {

    console.log("userDetails ", userDetails)

    if (!userDetails.username){
      navigate("/login")
    }

    if(userDetails.sub && userDetails.sub == "admin"){
      navigate("/admin")
    }

    if(userDetails.sub && userDetails.sub == "customer"){
      navigate("/consumer")
    }
        
  }

  return (
    <div className="flex flex-col gap-2 border-solid border-4 border-black-300">
      <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
        <div>Welcome!</div>
      </div>
      <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          onClick={onButtonClick}
          value={userDetails.username ? 'To webpage' : 'Log in'}
        />
        {userDetails.username ? <div>Your email address is {userDetails.username}</div> : <div> Not login </div>}
      </div>
      <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
        <p>
          Dont have an account ? <Link to="/signin"> Signup </Link>
        </p>
      </div>
    </div>
  )
}

export default Home