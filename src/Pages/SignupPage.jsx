import { Link } from "react-router-dom"
import Client from "../apiClient/ApiClient";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Signup(){

    const client = Client.getInstance()
    const [isLoading, setLoading] = useState(false);
    const [user,setUser] = useState({})
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateUserDetails = (user) => {
  
    
      // Check if the user has entered both fields correctly
      if ('' === user.email) {
        setEmailError('Please enter your email')
        return false
      }
      
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
        setEmailError('Please enter a valid email')
        return false
      }
    
      if ('' === user.password) {
        setPasswordError('Please enter a password')
        return false
      }
    
      if (user.password.length < 7) {
        setPasswordError('The password must be 8 characters or longer')
        return false
      }

      return true
    }
      

    const onsubmit  = () =>{
              console.log(user)

      if(!validateUserDetails(user)){
          console.log("error")
          return
        }
        console.log(user)
        setLoading(true)
    }
    
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    };

    useEffect(() => {
      console.log("useEffect")
        if(isLoading == false){
          return
        }

        client.signUpUser(user).then(res =>{
            navigate("/login")
         }).catch(() =>{
            setLoading(false);
         })
        
      }, [isLoading]);
    

    const render = () =>{

        if (isLoading) {
            return <div className="Loading">Loading...</div>;
          }

        return (<span style={styles} className="border-solid border-4 border-black-300 w-3px flex items-stretch" >
            <div className="items-center">
                <div>
                  <div className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 self-center">CREATE AN ACCOUNT</div>
                  <div>
                    <div>
                      <label htmlFor="name" className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 pr-4 ">Name</label>
                      <input type="text" onChange={ e=> { setUser({...user, name: e.target.value }) } } id="name" placeholder="Enter your name" className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 font-bold py-2 px-4 rounded-full"/>

                    </div>
                    <div>
                      <label htmlFor="email" className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 pr-4 ">E-Mail</label>
                      <input type="text" onChange={ e=> { setUser({...user, email: e.target.value }) } } id="email" placeholder="Enter your mail"  className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 font-bold py-2 px-4 rounded-full"/>
                    </div>
                    <br />
                    <label className="errorLabel">{emailError}</label>
                    <div>
                      <label htmlFor="password" className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 pr-4 " >Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter you password"
                        onChange={ e=> { setUser({...user, password: e.target.value }) } }
                      />
                      <br />
                      <label className="errorLabel">{passwordError}</label>
                    </div>
                    <button type="submit" onClick={onsubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Submit</button>
                  </div>
                  <p className="text-blue-500 md:text-lg dark:text-gray-400 font-bold">
                    Have an account ? <Link to="/login"> Login </Link>
                  </p>
                </div>
              </div>
              </span>)
    }

    return render()
}

export default Signup