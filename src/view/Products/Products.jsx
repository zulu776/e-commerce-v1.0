import React, { useContext } from 'react'

import ProductMap from "../../components/Products/ProductMap";
import ListProductsContext from '../../context/ListProductsContext';


const Products = () => {

    const {state: ProductsList} = useContext(ListProductsContext)

    return (
        <div>
            <div className="flex flex-wrap justify-center bg-black mt-20">
               {ProductsList &&
               ProductsList.products &&
               ProductsList.products.map(product => (
               <ProductMap 
                    key={product.id}
                    name={product.name}
                    desc={product.desc}
                    price={product.price}
                    id={product.id}
                    img={product.img}
                    status="add"
               />
               ))}
            </div>
        </div>
    )
}

export default Products
