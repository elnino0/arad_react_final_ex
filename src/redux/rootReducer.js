import Client from "../scripts/ApiClient";

const initialState = {
  categoies: [],
  prodacts:[],
  users:[]
};
const client = new Client()
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADCAT': {
      return { ...state, users: action.payload };
    }

    case 'ADDCAT': {
      return { ...state, users: [...state.users, action.payload] };
    }

    case 'UPDATECAT': {
      const users = [...state.users];
      const index = users.findIndex((user) => user.id === action.payload.id);

      if (index !== -1) {
        users[index] = action.payload;
      }

      return { ...state, users };
    }

    case 'DELETECAT': {
      const users = state.users.filter((user) => user.id !== action.payload);

      return { ...state, users };
    }

    default:
      return state;
  }
};

export default usersReducer;
