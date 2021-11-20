import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ListShopCartContext from "../../context/ListShopCartContext";

//CSS
import { Table } from "react-bootstrap";
import "./TableCart.style.css"

const TableCart = ({ children}) => {

    const { state } = useContext(ListShopCartContext);


    return (
        <div className="container-tablecart">
      {state.cart.length > 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th className="cart-img">Product Image</th>
              <th>Description</th>
              <th>$</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          { children }
            <tr>
              <td colSpan="7">Total: ${state.totalPrice}</td>
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

export default TableCart
