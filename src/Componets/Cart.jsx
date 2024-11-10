import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function Cart({OnPurshes}){
    const items = useSelector(state =>{
      return state.cart
 })
    const generateItems = () =>{
          if(items.length == 0){
            return <div> No item in Cart </div>
          }
          return <div> <ul>
          {
                items.map((prod,index) =>{
                  return <li key={index}> <CartItem item = {prod}/></li> 
              })
          }
          </ul>
          <br />
          <button onClick={e => OnPurshes(e,items)}>Buy Now</button>
        </div>

    }

    return (<div>
        {generateItems()}
    </div>)
}

export default Cart