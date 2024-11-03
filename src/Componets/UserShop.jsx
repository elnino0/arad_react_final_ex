// import { useSelector } from "react-redux"
import Cart from './Cart'
import UserProdactView from './UserProdactView'
import { useState } from "react"
import { useDispatch } from "react-redux"


function UserShop({prodacts}){

    // const [itemsTOCart, setitemsTOCart] = useState([]);

    const [active, setActive] = useState(true);
    const dispatch = useDispatch()

    const generateCart = ()=>{
        return <div>
            <Cart items OnPurshes = {prodacts.OnOrderProdacts} />
        </div>
    }

    const onAddItem = (item, count) => {
        dispatch({ type: "ADDTOCART", payload:{item, count}})
    }

    const onRemoveItem = (id, count) => {
        dispatch({ type: "REMOVEFROMCART", payload: {id, count} })
    }

    function openCloseCart() {
        setActive(!active);
      }

    return (<div>
    
    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="button" onClick={openCloseCart} value={'show cart'} />

    <span className="inline-block align-middle border-black-300 w-100 h-100"> {active ? "close" :  generateCart()} </span>
    <span className="inline-block align-middle border-black-300 w-100 h-100"><UserProdactView prodacts={prodacts.data} onAdd = {onAddItem}  onRemove ={onRemoveItem}  ></UserProdactView></span>
    </div>)
}

export default UserShop