import { ActionTypes } from "../../common/apis/action-types";


const initialState = {
    products:[]
}
export const productReducers = (state = initialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.FETCH_CATEGORY:
            return {...state, products:payload}
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}