import { useEffect, useState } from "react"
import AdminView from "../Componets/AdminView"
import Client from '../scripts/ApiClient'
function AdminPage({loggedIn}){
const clinet = new Client()
const [categories,setCategories] = useState([])
const [customers,setCustomers] = useState([])
const [prodacts,SetProdacts] = useState([])
const [statistics, SetStatistics] = useState([])


useEffect(()=>{
    clinet.getCategoreis().then(res =>{
        setCategories(res)
    }).then(() =>{
        clinet.getCustomers().then(res =>{
            console.log("customers - " , res)
            setCustomers(res)
            return res
        }).then(customers => { 
            clinet.getProdacts().then(prodacts =>{
                const buys = {}
                for (let item of customers){
                    for(let prod of item.prodacts){
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
                console.log("enrichedProdacts", enrichedProdacts)
                SetProdacts(enrichedProdacts)
            })
         })
         clinet.getStatistics().then( res =>{
            SetStatistics(res)
         })

    } )



},[])

const onUpdateProdact = (data) => {

}

const onAddNewProdact = (data) => {

}

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

            <AdminView categoies={{data:categories , onAdd:onAddCategory ,onUpdate:onUpdateCategory, onRemove:onRemoveCategory}}
            customers={{data:customers}}  prodacts={ {data: prodacts, onUpdate: onUpdateProdact, onAdd:onAddNewProdact}} statistics={{data:statistics}}/>
        </div>
</>)
}

export default AdminPage