import { useState } from "react"
import TableComp from "./TableComp"

function ProdactItem({prodact, onUpdate }){
    const [details, setDetails] = useState({id:prodact.id})

    const onSaveChanges = (e,data) =>{
        if(data.id){
            data.bought = prodact.bought
        }

        onUpdate(e,data)
    }

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
        return <div className="text-blue-500 font-bold"> {raw[col.key]}</div>;
    }

    return (<div className="text-black-400 font-bold border-double border-4 border-indigo-600">
        <div className="flex flex-raw  gap-2 ">

       
            <div className="flex flex-col">
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                    Tilte : <input onChange={e =>{setDetails({...details,name:e.target.value}) }} type="text"  defaultValue={prodact.name}/> 
                </div>
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                    Category : <input onChange={e =>{setDetails({...details,cat:e.target.value}) }} type="text" defaultValue={prodact.cat}/> 
                </div>
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                    Description : <br /> <textarea onChange={e =>{setDetails({...details,des:e.target.value}) }} type="text" defaultValue={prodact.des}/> 
                </div>
            </div>

            <div className="flex flex-col">
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                    Price : <input onChange={e =>{setDetails({...details,price:e.target.value}) }} type="text" defaultValue={prodact.price}/> <br />
                </div>
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                Link to Pic : <input onChange={e =>{setDetails({...details,link:e.target.value}) }}type="text" defaultValue={prodact.link}/> <br />
                </div>
                <div className="place-self-center bg-blue-500/10 rounded-lg ml-6 mr-6 mt-6 mb-6">
                    Bought by : <TableComp data={prodact.bought} columns={columesProdacts} render={renderProdacts}/>  
                </div>
            </div>
        </div>
       
        <button className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded-full" onClick={e => onSaveChanges(e,details)}>Save</button>
    </div>)
}

export default ProdactItem