import React, {useContext} from 'react'
import ListShopCartContext from '../../context/ListShopCartContext';
import TableCart from "../../components/CartShop/TableCart"

//CSS
import { Button } from "react-bootstrap";
import "../../components/CartShop/TableCart.style.css"


const CartShop = () => {
    const { state, dispatch } = useContext(ListShopCartContext);


    const handleRemoveItem = ({product,index}) => {
        dispatch({
            type: "REMOVE",
            payload: {
            id: product.id,
            name: product.name,
            price: product.price,
            index: index
            }
        })
    }

    
  

    return (
        <div className="container-cart flex flex-wrap">
            <TableCart>
                {state.cart.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td className="grid justify-items-center cart-img">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-1/5"
                    />
                    </td>
                    <td>{product.desc}</td>
                    <td>{Intl.NumberFormat("de-DE").format(product.price)}</td>
                    <td>{product.qty}</td>
                    <td>
                    <Button
                        variant="danger"
                        onClick={() =>
                            handleRemoveItem({product,index})
                        }
                    >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </TableCart>
        </div>
    )
}

export default CartShop
