import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate("/login")
  }

  return (
    <div className="mainContainer">
        <h1 className="text-6xl text-red">
          Hello world!
      </h1>
      <h1>
          Hello world!222
      </h1>
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
        
        

      </div>
    </div>
  )
}

export default Home