import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../Redux/action/productAction';
import "./Header.scss"

const Header = () => {
    const [term, setTerm]=useState("");
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        if(term === "") return alert("Please enter search term");
        dispatch(fetchCategory(term))
        setTerm("")
    }

    return (
            <div className="header" id="header">
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                        <input type="text"
                            value={term}
                            placeholder="Search item"
                            onChange={(e)=>setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
    );
};

export default Header;