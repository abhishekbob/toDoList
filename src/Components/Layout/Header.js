import React, { Component } from 'react';
import {Link} from "react-router-dom"


function Header(){
    return(
        <header style={headerStyle}>
            <h1>
                TodoList
            </h1>
            <Link to="/" >Home</Link> | <Link to='/About'>About</Link>
        </header>
    )

}
const headerStyle={
    background:'#4545',
    colour:'#ffff',
    textAlign:'center',
    padding:'3px'
}
export default Header;