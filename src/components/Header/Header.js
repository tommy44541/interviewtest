import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../../Redux/action/productAction';
import "./Header.scss"

const Header = () => {
    const [term, setTerm]=useState("");
    const dispatch = useDispatch();
    const submitHandler =(e)=>{
        e.preventDefault();
        //防止空輸入
        if(term === "") return alert("Please enter search term");
        //目前只能輸入api指定的4種類別名,無模糊搜索
        dispatch(fetchCategory(term))
        //更新state後清空輸入
        setTerm("")
    }

    return (
            <div className="header" id="header">
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                        <input type="text"
                            value={term}
                            placeholder="Search item || ex: men's clothing ,electronics"
                            onChange={(e)=>setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
    );
};

export default Header;