import { useState } from "react"

function UserAccount({OnSave}){
    const [userDetails, setUserDetails] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateUserDetails = (user) => {
      // Set initial error values to empty
      setEmailError('')
      setPasswordError('')

      // Check if the user has entered both fields correctly
      if ('' === user.email) {
        setEmailError('Please enter your email')
        return false
      }
    
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
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
      

    const onSubmit = () =>{
    if(!validateUserDetails(userDetails)){
      return
      } 
      OnSave(userDetails)
    }
   


  const checkHandler = () => {
    setIsChecked(!isChecked)
    setUserDetails({...userDetails,isShow:isChecked})
    }

    return (<div className="flex flex-col gap-2 border-solid border-4 border-black-300">
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
          First Name : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value}) }} className="border-solid border-4 border-black-300" /> 
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Email : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value}) }} className="border-solid border-4 border-black-300"/>
          <br />
          <label className="errorLabel">{emailError}</label>
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Password : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value}) }} className="border-solid border-4 border-black-300"/>
          <br />
          <label className="errorLabel">{passwordError}</label>
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Allow others see my orders : <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full" checked={isChecked} onChange={checkHandler}  type="checkbox"  name="x" id="" /> 
        </div>
       
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 h-10 rounded-lg"onClick={(e)=>onSubmit()}> Save </button>
        </div>
        

    </div>)
}

export default UserAccount