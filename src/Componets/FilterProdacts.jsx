import { useState } from "react"
const empty = {
    cat: "",
    price: "",
    title:""
}

function FilterProdacts({onUpdate}){

    const [filter,setFilter] = useState(empty)

    return (<div className="border-solid border-4 border-black-300">
        Filterd by : Category <input className="border-solid border-4 border-black-300" type="text"  onChange={(e=>{ setFilter({...filter,cat:e.target.value}); onUpdate(filter) })}/>
        Price :  <input type="range" className="border-solid border-4 border-black-300"  onChange={(e=>{ setFilter({...filter,price:e.target.value}); onUpdate(filter) })}/> 
        Tiltle : <input type="text" className="border-solid border-4 border-black-300" onChange={(e=>{ setFilter({...filter,title:e.target.value}); onUpdate(filter) })} />  {"   "}  <button onClick={() =>{ setFilter(empty); onUpdate(filter) }}> 
        Clear  </button>
    </div>)
}

export default FilterProdacts