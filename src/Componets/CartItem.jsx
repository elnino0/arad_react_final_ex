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

    return     <div >
    <h1>{item.name}</h1>  
    <button onClick={e=>{ onAdd() }}>+</button> {item.count} <button onClick={e=>{ onRemove()}}>-</button> 
    total : {item.count * Number(item.price)} 
    <button onClick={e =>{dispatch({ type: "DELETEFROMCART", payload: item.id})}}> remove from cart </button>

 </div>
}

export default CartItem