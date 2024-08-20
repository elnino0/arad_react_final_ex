import { useEffect, useState } from "react"
import AdminView from "../Componets/AdminView"
import Client from '../scripts/ApiClient'
function AdminPage({loggedIn}){
const clinet = new Client()
const [categories,setCategories] = useState([])

useEffect(()=>{
    clinet.getCategoreis().then(res =>{
        setCategories(res)
    })
},[])

const onAddCategory = (data) =>{

}

const onRemoveCategory = (id) =>{
    
}

const onUpdateCategory = (data) =>{
    
}

return (<>
        <div>
            {
                loggedIn == true ? <div><h1> Logged in </h1>   </div> : <h1> Not logged in</h1>
            }

            <AdminView categoies={{data:categories , onAdd:onAddCategory ,onUpdate:onUpdateCategory, onRemove:onRemoveCategory}}/>
        </div>
</>)
}

export default AdminPage