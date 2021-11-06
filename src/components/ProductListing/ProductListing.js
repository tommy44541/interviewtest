import React,{useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { fetchProducts } from '../../Redux/action/productAction';
import ProductComponent from '../ProductComponent/ProductComponent';
//import ProductDetail from '../ProductDetail/ProductDetail';
import "./ProductListing.scss";


const ProductListing = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[]);

    return (
        <div className="List-container">
            <ProductComponent />   
        </div>
    );
};

export default ProductListing;