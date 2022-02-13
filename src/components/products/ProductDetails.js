import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";

import {fetchProduct, resetProduct} from '../../actions/productAction'
import {addProductToCart} from '../../actions/cartAction'

import '../../style/storeStyle.css'
import Loader from '../Pages/Loader'

const ProductDetail = () =>{
const dispatch =useDispatch();
const productData = useSelector((state) => state.product);
const [quantity, setQuantity] = useState(1);
const { id } = useParams();


    useEffect(()=>{
        dispatch(fetchProduct(id));

        //cleanUp
        return ()=> {
            dispatch(resetProduct());
        }

    },[id,dispatch]);


    const handleChange = e =>{
        if(e.target.value >=1 && e.target.value<=10)
        setQuantity(e.target.value);
    }



    return  (productData.product.id!==undefined) ? (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={productData.product.image} width="100%" id="productImg" alt="" />

                    <div className="small-img-row">
                        <div className="small-img-col">
                            <img src={productData.product.image} width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src={productData.product.image} width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src={productData.product.image} width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src={productData.product.image} width="100%" className="small-img" alt=""/>
                        </div>
                    </div>

                </div>
                <div className="col-2 product-detail">
                    <p>{productData.product.category}</p>
                    <h1>{productData.product.title}</h1>
                    <h4>{`$${productData.product.price}`}</h4>
                    <select disabled>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type="number" value={quantity} pattern="[0-9]*" onChange={e => handleChange(e)} />
                    <button href="" className="btn" onClick={()=>dispatch(addProductToCart({id:productData.product.id,tittle:productData.product.title,price:productData.product.price, image:productData.product.image, quantity:quantity}))}>Add To Cart</button>

                    <h3>Product Details <i className="fa fa-indent"></i></h3>
                    <br />
                    <p>{productData.product.description}.
                    </p>
                </div>
            </div>
        </div>
     ):
     (<Loader />)
}
export default ProductDetail;