import { useState } from "react"
import TableComp from "./TableComp"

function ProdactItem({prodact, onUpdate }){
    console.log("Prodact details")
    const [details, setDetails] = useState({})

    const columesProdacts =
    [
        {
          key: 'name',
          title: 'name',
        },
        {
            key: 'qty',
            title: 'qty',
        },
        {
            key: 'date',
            title: 'date',
        }
    ]
    
    const renderProdacts = (col,raw) => {
        return <div className="text-blue-500 font-bold">{raw[col.key]}</div>;
    }

    return (<div>
        Tilte : <input onChange={e =>{setDetails({...details,tilte:e.target.value}) }} type="text"  defaultValue={prodact.name}/> <br />  
        Price : <input onChange={e =>{setDetails({...details,price:e.target.value}) }} type="text" defaultValue={prodact.price}/> <br />
        Category : <input onChange={e =>{setDetails({...details,cat:e.target.value}) }} type="text" defaultValue={prodact.cat}/> <br />
        Link to Pic : <input onChange={e =>{setDetails({...details,link:e.target.value}) }}type="text" defaultValue={prodact.link}/> <br />
        Description : <input onChange={e =>{setDetails({...details,des:e.target.value}) }} type="text" defaultValue={prodact.des}/> <br />
        Bought by : <TableComp data={prodact.bought} columns={columesProdacts} render={renderProdacts}/>  
        <button onClick={e => onUpdate(e,details)}>Save</button>
    </div>)
}

export default ProdactItem