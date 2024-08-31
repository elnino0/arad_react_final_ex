import ProdactItem from "./ProdactItem"

function Prodacts({prodacts, onUpdate ,OnAdd}){
    console.log("Prodacts")
    return (<div class="border-solid border-4 border-black-300 w-3px">
        <ul class="w-100">
            {
                prodacts.map((prod,index) =>{
                    return <li key={index}><ProdactItem prodact={prod} onUpdate={onUpdate} /> </li>
                })
            }
            </ul>
    <br />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={OnAdd}>Add Prodact </button>
    </div>)
}

export default Prodacts