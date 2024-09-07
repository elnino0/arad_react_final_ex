import Client from "../scripts/ApiClient";

const initialState = {
  categoies: [],
  prodacts:[],
  customers:[],
  users:[],
  statistics:[]
};

const client = new Client()
const reducer = (state = initialState, action) => {
  console.log("reducer")
  switch (action.type) {
    
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
