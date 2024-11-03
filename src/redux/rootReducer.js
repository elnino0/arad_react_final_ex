import Client from "../apiClient/ApiClient";

const initialState = {
  categoies: [],
  prodacts:[],
  customers:[],
  users:[],
  statistics:[],
  orders:[],
  cart:[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'DELETEFROMCART': {
      const cart = state.cart.filter((prodacts) => prodacts.id !== action.payload);
      return { ...state, cart };
    }

    case 'ADDTOCART': {
      const payload = action.payload
      const cart = [...state.cart]
      const itemindex = cart.findIndex((i) => i.id === payload.item.id);

      if(itemindex == -1){
        cart.push({...payload.item,count:payload.count})
          return { ...state, cart: cart };
      }

      cart[itemindex].count = payload.count
      return {...state, cart}
    }
    
    case 'REMOVEFROMCART': {
      const payload = action.payload
      const cart = [...state.cart]
      console.log("cart  ", cart)
      if(payload.count <= 0){
        const items = cart.filter((i) => payload.id !== i.id);
        return {...state, cart: items}
      }
        
        const itemindex = cart.findIndex((i) => payload.id === i.id);
        console.log("cart  ", cart)
        console.log("payload.count   ",payload ," index " , itemindex)
        console.log(" cart[itemindex]" , cart[itemindex])
        cart[itemindex].count = payload.count
        return {...state, cart}
    }

    case 'CLEARCART': {
      return { ...state, cart:[]};
    }

    case 'ADDTOORDERS': {
      return { ...state, orders:  [...state.orders, ...action.payload] };
    }

    case 'LOADORDERS': {
      return { ...state, orders: action.payload };
    }
    
    case 'LOADSTATISTICS': {
      return { ...state, statistics: action.payload };
    }

    case 'LOADCUSTOMERS': {
      return { ...state, customers: action.payload };
    }

    case 'ADDCUSTOMERS': {
      return { ...state, customers: [...state.customers, action.payload] };
    }


    case 'LOADPROD': {
      return { ...state, prodacts: action.payload };
    }

    case 'ADDPROD': {
      return { ...state, prodacts: [...state.prodacts, action.payload] };
    }

    case 'UPDATEPROD': {
      const prodacts = [...state.prodacts];
      const index = prodacts.findIndex((prod) => prod.id === action.payload.id);

      if (index !== -1) {
        prodacts[index] = action.payload;
      }

      return { ...state, prodacts };
    }

    case 'DELETEPROD': {
      const prodacts = state.prodacts.filter((prodacts) => prodacts.id !== action.payload);
      return { ...state, prodacts };
    }

    case 'LOADUSERS': {
      return { ...state, users: action.payload };
    }
    
    case 'ADDUSERS': {
      return { ...state, categoies: [...state.categoies, action.payload] };
    }

    case 'LOADCAT': {
      return { ...state, categoies: action.payload };
    }

    case 'ADDCAT': {
      return { ...state, categoies: [...state.categoies, action.payload] };
    }

    case 'UPDATECAT': {
      const categoies = [...state.categoies];
      const index = categoies.findIndex((cat) => cat.id === action.payload.id);

      if (index !== -1) {
        categoies[index] = action.payload;
      }

      return { ...state, categoies };
    }

    case 'DELETECAT': {
      const categoies = state.categoies.filter((cat) => cat.id !== action.payload);
      return { ...state, categoies };
    }

    default:
      console.log("reducerdefault")
      return state;
  }
};

export default reducer;
