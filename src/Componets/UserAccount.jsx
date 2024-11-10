import { useState } from "react"

function UserAccount({OnSaveChanges}){
    const [userDetails, setUserDetails] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    
  const checkHandler = () => {
    setIsChecked(!isChecked)
    setUserDetails({...userDetails,isShow:isChecked})
    }

    return (<div className="flex flex-col gap-2 border-solid border-4 border-black-300">
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
          First Name : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value}) }} className="border-solid border-4 border-black-300" /> 
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Last Name : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,last:e.target.value}) }} className="border-solid border-4 border-black-300"/> 
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Email : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value}) }} className="border-solid border-4 border-black-300"/>
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Password : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value}) }} className="border-solid border-4 border-black-300"/>
        </div>
        
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          Allow others see my orders : <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full" checked={isChecked} onChange={checkHandler}  type="checkbox"  name="x" id="" /> 
        </div>
       
        <div className="place-self-center text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 h-10 rounded-lg"onClick={(e)=>OnSaveChanges(e)}> Save </button>
        </div>
        

    </div>)
}

export default UserAccount