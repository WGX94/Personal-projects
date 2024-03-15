import React from "react";
import logoKuat from "/kuatLogo.svg"
import "../header/header.scss"
import menu from "/assets/menu.svg"

const Header = () => {
    return (
        <div id="header">
            <div id="left">
                <img src={logoKuat} alt="" id="logo"/>
                <span>Kuat Drive Yards</span>
            </div>
            <div id="right">
                <img src={menu} alt="" />

            </div>
            
        </div>
    )
}

export default Header