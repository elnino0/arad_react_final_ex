import ProdactItem from "./ProdactItem"

function Prodacts({prodacts, onUpdate ,OnAdd}){
    console.log("Prodacts")
    return (<div>
        <ul>
            {
                prodacts.map((prod,index) =>{
                    return <li key={index}><ProdactItem prodact={prod} onUpdate={onUpdate} /> </li>
                })
            }
            </ul>
    <button>Add Prodact </button>
    </div>)
}

export default Prodacts