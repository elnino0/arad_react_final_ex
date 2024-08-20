
function Categoies({categoies,onAdd, onUpdate, onRemove}){
    console.log("categoreirs")
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

export default Categoies