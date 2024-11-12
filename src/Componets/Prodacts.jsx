import { useSelector } from "react-redux"
import ProdactItem from "./ProdactItem"

function Prodacts({onUpdate ,onAdd}){
    const data = useSelector(state =>{
        return state.prodacts
    })    

    return (<div className="border-solid border-4 border-black-300">
        <ul className="">
            {
                data.map((prod,index) =>{
                    return <li key={index}><ProdactItem prodact={prod} onUpdate={onUpdate} /> </li>
                })
            }
            </ul>
    <br />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={e =>{onAdd(e)}} >Add Prodact </button>
    </div>)
}

export default Prodacts