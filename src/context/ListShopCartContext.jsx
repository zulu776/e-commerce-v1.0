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
            const cartItem = state.cart.find((item) => item.id === action.payload.id )
            return cartItem ?{
                ...state,
                totalPrice: state.totalPrice + action.payload.price,
                cart: state.cart.map(item => item.id === action.payload.id ? 
                    {...item,qty: item.qty + 1} : item)
            }
            : {
                ...state,
                totalPrice: state.totalPrice + action.payload.price,
                cart: [...state?.cart, {...action.payload, qty: 1}]
            };

        case "REMOVE": 
            const deleteItem = state.cart.find((item) => item.id === action.payload.id )
            
            return deleteItem.qty > 1 ?
            {
                ...state,
                totalPrice: state.totalPrice - action.payload.price,
                cart:state.cart.map(item => item.id === action.payload.id ? 
                    {...item,qty: item.qty - 1} : item)
            }
            :{
                ...state,
                totalPrice: state.totalPrice - action.payload.price, 
                cart: state.cart.filter(item => item.id !== action.payload.id)
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
