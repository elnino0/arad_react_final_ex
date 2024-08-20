function Prodacts({prodacts,onAdd, onUpdate, onRemove}){
    console.log("Prodacts")
    return (<div>
        <ul>
        {
            categoies.map((item,index) =>
                {
                    return <li key={index}> <h1> {item.name} </h1> <button>Update</button><button>Remove</button></li>
                })
        }</ul>
        <button>Add</button>
    </div>)
}

export default Prodacts