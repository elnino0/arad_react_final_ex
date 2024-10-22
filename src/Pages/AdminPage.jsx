import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AdminView from "../Componets/AdminView"
import Client from '../apiClient/ApiClient'
import { v4 as uuidv4 } from 'uuid';


function AdminPage({loggedIn}){
const clinet = Client.getInstance()
const dispatch = useDispatch()
const [categories, setCategories] = useState([])
const [customers, setCustomers] = useState([])
const [prodacts, SetProdacts] = useState([])
const [statistics, SetStatistics] = useState([])


useEffect(()=>{
    clinet.getCategoreis().then(res =>{
        setCategories(res)
    }).then(() =>{
        clinet.getCustomers().then(res =>{
            setCustomers(res)
            return res
        }).then(customers => { 
            clinet.getProdacts().then(prodacts =>{
                const buys = {}
                console.log("customers",customers)
                for (let item of customers){
                    for(let prod of item.purchases){
                        if(!(prod.prodactId in buys) ){
                            buys[prod.prodactId] = []
                        }
                        buys[prod.prodactId].push({name: item.name , qty: prod.quntety, date:prod.date})
                    }
                }
    
                const enrichedProdacts =  prodacts.map( item =>{
                        if( item.id in buys){
                            return {...item, bought:buys[item.id]}
                        }
                        return item
                    })
                SetProdacts(enrichedProdacts)
            })
         })
         clinet.getStatistics().then( res =>{
            SetStatistics(res)
         })

    } )



},[])

useEffect(()=>{

    dispatch({ type: "LOADSTATISTICS", payload: statistics })
    dispatch({ type: "LOADCUSTOMERS", payload: customers })
    dispatch({ type: "LOADPROD", payload: prodacts })
    dispatch({ type: "LOADCAT", payload: categories })

},[categories,customers,prodacts,statistics])


const onUpdateProdact = (e,data) => {
    
    console.log("onUpdateProdact data", data)
    if(data.id){
        clinet.updateProdacts(data)
    }else{
        clinet.saveProdacts(data)
    }

    dispatch({ type: "UPDATEPROD", payload: data })
}

const onAddNewProdact = () => 
{
    dispatch({ type: "ADDPROD", payload: {id:undefined,name: "",cat:"","": 0,"link":"","des":""} })
}

const onAddCategory = (data) =>{
    if(!data.name){
        return
    }
    clinet.saveCategoreis(data)
    dispatch({ type: "ADDCAT", payload: data })
}

const onRemoveCategory = (id) =>{
    clinet.deletecategory(id)
    dispatch({ type: "DELETECAT", payload: id })
}

const onUpdateCategory = (data) =>{
    
    if(!data.name){
        return
    }

    if(data.id){
        clinet.updateCategoreis(data)
    }else{
        clinet.saveCategoreis(data)
    }

    dispatch({ type: "UPDATECAT", payload: data })
}

const onlogin = ()=> {
    return getAdminView()
}

const getAdminView = () =>{
    return  <AdminView categoies={{onAdd:onAddCategory ,onUpdate:onUpdateCategory, onRemove:onRemoveCategory}}
    prodacts={ {onUpdate: onUpdateProdact, onAdd:onAddNewProdact}} />
}

return (<>
        <div>
            {
                loggedIn == true ? <div><h1> Logged in </h1> {onlogin()}  </div> : <div><h1> Not logged in</h1> {onlogin()}</div> 
            }
        </div>
</>)
}

export default AdminPage