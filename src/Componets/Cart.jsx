import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function Cart({OnPurshes, OnCloseCart}){
    const items = useSelector(state =>{
      return state.cart
 })

    const generateItems = () =>{
      let sum = 0
          if(items.length == 0){
            return <div> No item in Cart <br />
              <button  className="border-solid border-4 border-green-300 bg-red-800 rounded-lg" onClick={e => OnCloseCart()}>close</button>
               </div>
          }

          return <div className="  h-full p-6  border-solid border-4 border-green-300 bg-green-100"> <ul>
          {
                items.map((prod,index) =>{
                  sum += prod.count * Number(prod.price)
                  return <li key={index}> <CartItem item = {prod}/></li> 
              })
          }
          </ul>
          <br />
          <div>
            Total :{sum}
          </div>
          <button  className="border-solid border-4 border-green-300 bg-green-500 rounded-lg" onClick={e => OnPurshes(e,items)}>Buy Now</button>
          <br />
          <button  className="border-solid border-4 border-green-300 bg-red-800 rounded-lg" onClick={e => OnCloseCart()}>close</button>
        </div>
      }

    return (<div>
        {generateItems()}
    </div>)
}

export default Cart