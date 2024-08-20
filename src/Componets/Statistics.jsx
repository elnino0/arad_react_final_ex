function Statistics({data,onAdd, onUpdate, onRemove}){
    console.log("Statistics")
    return (<div>
        <ul>
        {
            categoies.map((item,index) =>
                {
                    return <li key={index}> <h1> {data} </h1> <button>Update</button><button>Remove</button></li>
                })
        }</ul>
        <button>Add</button>
    </div>)
}

export default Statistics