import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../Redux/action/productAction';
import "./navBtn.scss"

const NavBtn = (props) => {
    const dispatch = useDispatch();
    const onClickHandler =(e)=>{
        e.preventDefault();
        dispatch(fetchCategory(props.category))
    }
    return (
        <div className="btn btn--white btn--animated">
            <button
            className="btn--inside" 
            type="submit" 
            onClick={onClickHandler}>{props.category}</button>
        </div>
    );
};

export default NavBtn;