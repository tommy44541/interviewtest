import React from 'react';
import { useSelector } from 'react-redux';
import "./ProductComponent.scss";
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductComponent = () => {

    const products = useSelector((state) =>state.allProducts.products)
    const renderList = products.map((product)=>{
    const {id,title,image,price,category,description} = product

        return(            
            <div className="card-container" key={id}>
                <div className="card-wrapper">
                    <div className="card">
                        <img src ={image} alt={title}/>
                    </div>
                    <div className="content">
                    <div className="Modal">
                        <ProductDetail 
                        id={id}
                        image={image} 
                        title={title}
                        price={price}
                        category={category}
                        description={description}
                        />
                </div>
                        <div className="item-header">name:{title}</div>
                        <div className="price">price:{price}</div>
                        <div className="category">category:{category}</div>
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