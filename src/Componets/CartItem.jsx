import { useDispatch } from "react-redux"

function CartItem({item}){
    const dispatch = useDispatch()

    const onRemove = () =>{
        if(item.count - 1 == 0){
            dispatch({ type: "DELETEFROMCART", payload: item.id})
        }

        dispatch({ type: "REMOVEFROMCART", payload: {id: item.id, count: item.count - 1} })
    }

    const onAdd = () => {
        dispatch({ type: "ADDTOCART", payload:{item, count: item.count + 1}})
    }

    return <div  className="flex gap-2 bg-white rounded-lg ml-6 mr-6 mt-6 mb-6" >
    
    <div className="mr-2">
        <h1 className="text-l" >{item.name}</h1>  
    </div>
    
    <div className="text-l mr-2" >
     <button className="text-l" onClick={e=>{ onAdd() }}>+</button> {item.count} <button className="text-l" onClick={e=>{ onRemove()}}>-</button> units
    </div>
    
    <div className="text-l mr-2 ">
        total : {item.count * Number(item.price)} 
    </div>

    <div className="mr-2">
    <button className="text-l bg-red-500/80  w-5 rounded-full"  onClick={e =>{dispatch({ type: "DELETEFROMCART", payload: item.id})}}> x </button>
    </div>
 
 </div>
}

export default CartItem