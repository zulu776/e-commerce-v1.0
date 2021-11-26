import React, {useContext, useEffect, useState} from 'react'
import ListShopCartContext from '../../context/ListShopCartContext'

import "./ProductMap.style.css";

const ProductMap = ({ name, desc, price, id, img }) => {

    const { dispatch } = useContext(ListShopCartContext);

    const [payload, setPayload] = useState({});


    useEffect(() => {

        setPayload({
            name, 
            desc, 
            price, 
            id, 
            img,
        })  

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[]);

    const handleDispatch = paylaod => {
        dispatch({ 
            type: "ADD", 
            payload 
        })
       
    };
 
    return (
        <div className="productmap-container">
            <img src={img} className="productmap-img" alt={name} />
            <p className="productmap-p1">{name}</p>
            <p className="productmap-p2">{desc}</p>
            <p className="productmap-p1">$ {Intl.NumberFormat("de-DE").format(price)} </p>
            <button 
            onClick={() => handleDispatch({ ...payload })}
            className="productmap-button"
            >
              ADD
            </button>
        </div>
    )
}

export default ProductMap;
