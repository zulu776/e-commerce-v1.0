import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import ListShopCartContext from '../../context/ListShopCartContext';

//CSS
import { Table } from "react-bootstrap";
import "../CartShop/TableCart.style.css"

const CheckoutTable = ({children}) => {

    const { state } = useContext(ListShopCartContext);

    return (
        <div>
            {state.cart.length > 0 ? (
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th className="cart-img">Product Image</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>$</th>
                    </tr>
                </thead>
                <tbody>
                { children }
                    <tr>
                    <td colSpan="7">Total: ${Intl.NumberFormat("de-DE").format(state.totalPrice)}</td>
                    </tr>
                </tbody>
                </Table>
            ) : (
                <Link to="/Products"
                className=" text-white">
                Empty shopping cart</Link>
            )}
        </div>
    )
}
export default CheckoutTable
