
function Categoies({categoies,onAdd, onUpdate, onRemove}){
    console.log("categoreirs")
    return (<div>
        <ul>
        {
            categoies.map((item,index) =>
                {
                    return <li key={index}> <h1> {item.name} </h1> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onUpdate}>Update</button>
                    <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onRemove}>Remove</button></li>
                })
        }</ul>
        <br />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onAdd}>Add</button>
    </div>)
}

export default Categoies