// import { useSelector } from "react-redux"
import Cart from './Cart'
import UserProdactView from './UserProdactView'
import { useState } from "react"
import { useDispatch } from "react-redux"


function UserShop({prodacts}){

    // const [itemsTOCart, setitemsTOCart] = useState([]);

    const [isOpenCart, setIsOpenCart] = useState(false);
    const dispatch = useDispatch()

    const onCloseCart = () => {
        setIsOpenCart(false)
    }

    const generateCart = ()=>{
        return <div className='h-full bg-green-100 border-solid border-4 border-black-300'>
            <Cart items OnPurshes = {prodacts.OnOrderProdacts} OnCloseCart = {onCloseCart} />
        </div>
    }

    const onAddItem = (item, count) => {
        dispatch({ type: "ADDTOCART", payload:{item, count}})
    }

    const onRemoveItem = (id, count) => {
        dispatch({ type: "REMOVEFROMCART", payload: {id, count} })
    }

    function openCart() {
        setIsOpenCart(true);
      }

    return (<div className='flex p4 gap-1 rounded-full size-full'>
    {
        !isOpenCart ? <div className='self-start'>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 h-20 rounded-full" type="button" onClick={openCart} value={'show cart'} />
        </div> : <div></div>
        
    }

    <div className='grid grid-cols-3 self-center'>
        {!isOpenCart ? <></>: <div className=" col-span-1  h-full ">  {generateCart()} </div>}
        <div className={ isOpenCart ? " col-span-2 h-full " : "col-span-1 h-full"}><UserProdactView prodacts={prodacts.data} onAdd = {onAddItem}  onRemove ={onRemoveItem}  ></UserProdactView></div>
    </div>

    </div>)
}

export default UserShop