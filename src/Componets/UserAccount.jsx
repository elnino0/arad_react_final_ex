import { useState } from "react"

function UserAccount({OnSaveChanges}){
    const [userDetails, setUserDetails] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    
  const checkHandler = () => {
    setIsChecked(!isChecked)
    setUserDetails({...userDetails,isShow:isChecked})
    }

    return (<div>
        First Name : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value}) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" /> <br />
        Last Name : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,last:e.target.value}) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/> <br />
        Email : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value}) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/> <br />
        Password : <input type="text" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value}) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/> <br />
        Allow others see my orders : <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"         checked={isChecked} onChange={checkHandler}  type="checkbox"  name="x" id="" /> <br />
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={(e)=>OnSaveChanges(e)}></button>
    </div>)
}

export default UserAccount