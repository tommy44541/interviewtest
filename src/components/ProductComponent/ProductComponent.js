import React from 'react';
import { useSelector } from 'react-redux';
import "./ProductComponent.scss";

const ProductComponent = () => {
    const products = useSelector((state) =>state.allProducts.products)
    const renderList = products.map((product)=>{
        const {id,title,image,price,category} = product
        return(
            <div className="card-container" key={id}>
                <div className="card-wrapper">
                    <div className="card">
                        <img src ={image} alt={title}/>
                    </div>

                    <div className="content">
                        <div className="item-header">{title}</div>
                        <div className="price">{price}</div>
                        <div className="category">{category}</div>
                    </div>
                </div>
            </div>
        )
    })


    return (   
            <>
            {renderList}
            </>
    );
};

export default ProductComponent;