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

    return (<div className='flex gap-1 rounded-full'>
    
    <div className='self-start'>
    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 h-20 rounded-full" type="button" onClick={openCloseCart} value={'show cart'} />
    </div>

    <div className=" self-center col-span-2 border-black-300"> {active ? "close" :  generateCart()} </div>
    <div className=" self-end border-black-300"><UserProdactView prodacts={prodacts.data} onAdd = {onAddItem}  onRemove ={onRemoveItem}  ></UserProdactView></div>
    </div>)
}

export default UserShop