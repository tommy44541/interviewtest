import React, { useState } from 'react';
import "./Header.scss"

const Header = () => {
    const [term, setTerm]=useState("")
    const submitHandler =(e)=>{
        e.preventDefault();
    }

    return (
            <div className="header">
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                    <button type="submit"><i className="fa fa-search"></i></button>
                        <input type="text"
                            value={term}
                            placeholder="Search item"
                            onChange={(e)=>setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-times"></i></button>
                    </form>
                </div>
            </div>

    );
};

export default Header;