import { useState } from "react"
import { useSelector } from "react-redux"

function Categoies({onAdd, onUpdate, onRemove}){
    const [name, setName] = useState("")

    const data = useSelector(state =>{
        return state.categoies
    })

    return (<div>
        <ul>
        {
            data.map((item,index) =>
                {
                    return <li key={index}> 
                    <div className="text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
                        <h1> {item.name} </h1> 
                    </div>
                    <div className="text-xl rounded-lg ml-6 mr-6 mt-6 mb-6" >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 h-10 rounded-lg" onClick={() =>{item.name = name;onUpdate(item)} }>Update</button>
                    </div>
                    
                    <div className="text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 h-10 rounded-lg" onClick={() =>{onRemove(item.id)}}>Remove</button>
                    </div>
                    </li>
                })
        }</ul>
        <br />
        
        <div className="text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
            <input type="text" className="border-solid border-4 border-black-300" onChange={(event)=>{setName(event.target.value)}} />
        </div>
        <br />
        <div className="text-xl rounded-lg ml-6 mr-6 mt-6 mb-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 h-10 rounded-lg" onClick={() => {onAdd({name:name})}}>Add</button>
        </div>
        

    </div>)
}

export default Categoies