import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../Redux/action/productAction';

const NavBtn = (props) => {
    const dispatch = useDispatch();
    const onClickHandler =(e)=>{
        e.preventDefault();
        dispatch(fetchCategory(props.category))
    }
    return (
        <div>
            <button 
            type="submit" 
            onClick={onClickHandler}>{props.category}</button>
        </div>
    );
};

export default NavBtn;