import { useState } from "react"
import { useSelector } from "react-redux"

function UserProdact({prodact ,onAdd, onRemove}){

    const amount = useSelector((state) =>{ 
        
        if(state.cart.lenght == 0){
            return 0
        }

        const index = state.cart.findIndex((i) => i.id === prodact.id);
        if(index == -1){
            return 0
        }

        return state.cart[index].count
    })


    const Add = (e)=>{
        onAdd(prodact, amount + 1)
    }

    const Remove = (e) =>{
        
        if(amount <= 0){
            return
        }
        
        onRemove(prodact.id, amount - 1)
    }

    return (<div className="border-solid border-4 border-black-300 w-3px">
        <h1>{prodact.name}</h1> <br />
        <label>{prodact.des}</label> <br />
        <label>{prodact.price}</label> <br />

        <button onClick={e => Remove(e)} >-</button>
        <label>{amount}</label>
        <button onClick={e => Add(e)}>+</button>

    </div>)
}

export default UserProdact