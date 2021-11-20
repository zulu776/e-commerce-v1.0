import React from 'react'
import { Link } from "react-router-dom"

//Bootstrap components
import { Navbar, Container, Nav } from "react-bootstrap";

import Products from "../../IMG/Header/Products.png"
import Cart from "../../IMG/Header/Cart.png"
import CheckOut from "../../IMG/Header/CheckOut.png"

import "./Header.style.css"


const Header = ({ img, total, cart }) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Nav  className=" w-2/5 flex justify-center items-center">
                    <Navbar.Brand className="header-brand">
                            <Link to="/" className="header-link-img">
                                <img src={img} alt="Not Found"
                                className="header-img" />
                            </Link>
                    </Navbar.Brand>
            
                    <Nav.Link className="header-sep">
                        <Link to="/Products" className="header-link-1">
                            <img src={Products} alt="Not Found" className="header-link-1-img"/>
                            Products
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="header-sep">
                        <Link to="/CartShop" className="header-link-1">
                        <img src={Cart} alt="Not Found" className="header-link-1-img"/>
                        Cart
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="header-sep">
                        <Link to="/CheckOut" className="header-link-1">
                        <img src={CheckOut} alt="Not Found" className="header-link-1-img" />
                        Checkout
                        </Link>
                    </Nav.Link>
                </Nav>
                <Nav className="header-total">
                    <Navbar.Text className="header-sep">
                        <p className="header-link-1">
                        Cart: {cart.length}
                        </p>
                    </Navbar.Text>

                    <Navbar.Text className="header-sep">
                        <p className="header-link-1">
                        Total: $ {Intl.NumberFormat("de-DE").format(total)}
                        </p>
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
