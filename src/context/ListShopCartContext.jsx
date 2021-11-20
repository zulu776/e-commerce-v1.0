import React, {createContext, useReducer} from 'react'

const ListShopCartContext = createContext();



const initialState = {
    user:"Sebastian Zuluaga",
    totalPrice: 0,
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload.price,
                cart: [...state.cart, action.payload]
            };

        case "REMOVE": 
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload.price,
                cart: state.cart
            }

        default:
            return state;
    }
};





const ListShopCartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const data = { state, dispatch };
    
    return (
        <ListShopCartContext.Provider value={data}>
            {children}
        </ListShopCartContext.Provider>
    );
};

export { ListShopCartProvider };
export default ListShopCartContext;
