
function Categoies({categoies,onAdd, onUpdate, onRemove}){
    console.log("categoreirs")
    return (<div>
        <ul>
        {
            categoies.map((item,index) =>
                {
                    return <li key={index}> <h1> {item.name} </h1> <button onClick={onUpdate}>Update</button><button onClick={onRemove}>Remove</button></li>
                })
        }</ul>
        <button onClick={onAdd}>Add</button>
    </div>)
}

export default Categoies