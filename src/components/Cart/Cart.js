import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import '../../style/storeStyle.css'
import {removeProductFromCart} from '../../actions/cartAction'

import ShopCartMessage from '../Pages/ShopCart'


const Cart = () =>{
    const cartData =useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return  (cartData.products.length>0) ? (
        <div className="small-container cart-page">
            <table>
                <tbody>
                <tr>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {cartData.products.map(product=>
                    <tr key={`tr-${product.id}`}>
                        <td>
                            <div  className="cart-info">
                                <img src={product.image} alt="" />
                                <div>
                                    <p>{product.title}</p>
                                    <small>{`Price: $${product.price}`}</small>
                                    <br />
                                    <button onClick={()=>dispatch(removeProductFromCart(product.id))}>Remove</button>
                                </div>
                            </div>
                        </td>
                        <td><span>{product.quantity}</span></td>
                        <td>{`$${product.subTotal}`}</td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className="total-price">
                <table>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>{cartData.subTotal}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{cartData.tax}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{cartData.total}</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
     ):
     (<ShopCartMessage />)

}
export default Cart;
