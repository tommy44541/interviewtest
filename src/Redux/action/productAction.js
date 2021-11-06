import fakestoreapi from '../../common/apis/fakeStoreApi';
import { ActionTypes } from '../../common/apis/action-types';

export const fetchProducts = () => async(dispatch) =>{
    const response = await fakestoreapi.get("/products");
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
}

export const fetchProduct = (id) => async (dispatch) =>{
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload: response.data})
}

export const fetchCategory = (category) => async(dispatch) =>{
    const response = await fakestoreapi.get(`/products/category/${category}`)
    dispatch({type:ActionTypes.FETCH_CATEGORY, payload: response.data})
}

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProducts = (product) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}

export const removeSelectedProducts = () => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}