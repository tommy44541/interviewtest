import React from 'react';
import NavBtn from './navBtn';
import "./Sidebar.scss"

const Sidebar = () => {

    return (
        <div className="sidebar">
            <NavBtn category={"men's clothing"} />
            <NavBtn category={"women's clothing"} />
            <NavBtn category={"jewelery"} />
            <NavBtn category={"electronics"} />
        </div>

        
    );
};

export default Sidebar;