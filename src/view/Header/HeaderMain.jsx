import React, {useContext} from 'react'

//Context
import ListShopCartContext from '../../context/ListShopCartContext'

//Components
import flame from "../../IMG/flame.svg";
import Header from './Header';

const HeaderMain = ({children}) => {

    const { state: cartState } = useContext(ListShopCartContext);

    return (
       <>
        <Header 
            img={flame}
            total={cartState.totalPrice}
            cart={cartState.cart}
        />
        {children}
       </>
    );
};

export default HeaderMain;
