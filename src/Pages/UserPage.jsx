import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import UserView from "../View/UserView"
import Client from '../apiClient/ApiClient'


function UserPage({loggedIn,userDetails}){
const clinet = Client.getInstance()
const dispatch = useDispatch()

const [prodacts,setProdact] = useState([])
const [orders,setOrders] = useState([])


useEffect(()=>{
    clinet.getProdacts().then(res =>{
        setProdact(res)
    }).then(
        clinet.getOrders().then(res =>{
            console.log("get orders",res)
            setOrders(res)
        })
    )

},[])

useEffect(()=>{
    dispatch({ type: "LOADORDERS", payload: orders })
    dispatch({ type: "LOADPROD", payload: prodacts })
},[prodacts,orders])


const OnOrderProdacts = (e,data) => {

    const toOrders = []
    for(let datum of data){
        toOrders.push({quntety:datum.count, name:datum.name, prodactId:datum.id,price: datum.price,date:(new Date()).toISOString() })
    }

    console.log("OnOrderProdacts" , toOrders)
    dispatch({ type: "CLEARCART"})
    clinet.saveOrders(toOrders)
    dispatch({ type: "ADDTOORDERS", payload: toOrders})
}

const onSaveUserDetails = (userDetails) =>{
    clinet.updateUser(userDetails)
    clinet.hideUserPhurches(userDetails.isShow)
}



const onlogin = ()=> {
    return getUserView()
}

const getUserView = () =>{
    return  <UserView user={{userDetails:userDetails,OnSave:onSaveUserDetails}} prodacts={{data:prodacts, OnOrderProdacts:OnOrderProdacts}} orders={{data:orders}} />
}

return (<>
        <div>
            {
                loggedIn == true ? <div><h1> Logged in </h1> {onlogin()}  </div> : <div><h1> Not logged in</h1> {onlogin()}</div> 
            }
        </div>
</>)
}




export default UserPage