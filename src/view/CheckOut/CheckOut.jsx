import React, {useContext} from 'react'
import ListShopCartContext from '../../context/ListShopCartContext'
import CheckoutTable from '../../components/Checkout/CheckoutTable'

//CSS
import { Form,Row,Col,Button } from "react-bootstrap"
import "./CheckOut.style.css"

const CheckOut = () => {

    const { state } = useContext(ListShopCartContext);

    return (
        <div className="checkout-container mt-20 justify-between">
            <Form className="form-container"> 
                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="text-white">Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="text-white">Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="text-white">City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="text-white">State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Medellin</option>
                        <option>Envigado</option>
                        <option>Itagui</option>
                        <option>Bello</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="text-white">Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 text-white" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className=" w-3/6 flex flex-row justify-center mt-10">
                <CheckoutTable>
                    {state.cart.map((product, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td className="grid justify-items-center cart-img">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-12"
                        />
                        </td>
                        <td>{product.desc}</td>
                        <td>{product.qty}</td>
                        <td>{Intl.NumberFormat("de-DE").format(product.price)}</td>
                    </tr>
                    ))}
                </CheckoutTable>
            </div>
        </div>
    )
}

export default CheckOut
