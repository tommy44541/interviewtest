import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/action/productAction';
import ProductComponent from '../ProductComponent/ProductComponent';
import "./ProductListing.scss";


const ProductListing = () => {
    const products = useSelector((state)=>state);
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