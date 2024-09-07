import { useState } from "react"
import { useSelector } from "react-redux"

function Categoies({onAdd, onUpdate, onRemove}){
    console.log("categoreirs")
    const [name, setName] = useState("")

    const data = useSelector(state =>{
        return state.categoies
    })

    return (<div>
        <ul>
        {
            data.map((item,index) =>
                {
                    return <li key={index}> <h1> {item.name} </h1> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() =>{item.name = name;onUpdate(item)} }>Update</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() =>{onRemove(item.id)}}>Remove</button></li>
                })
        }</ul>
        <br />
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event)=>{setName(event.target.value)}} /> <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {onAdd({name:name})}}>Add</button>
    </div>)
}

export default Categoies