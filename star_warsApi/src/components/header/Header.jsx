import React, { useState } from "react";
import logoKuat from "/kuatLogo.svg"
import "../header/header.scss"
import { NavLink } from 'react-router-dom';
import menu from '../../../public/assets/menu.svg'
import FadeMenu from "../menu/Menu";
import menuItems from "../menuItems";


const Header = () => {
    const [expended, setExpendedState] = useState(false)

    return (
        <div id={expended ? "headerExpended" : "header"}>
            <div id="blockHeader">
                <div id="left">
                    <img src={logoKuat} alt="" id="logo"/>
                    <span>Kuat Drive Yards</span>
                </div>
                <button id="right" onClick={ () => setExpendedState(!expended)}>
                    <img src={menu} alt="" id="menuIcon" />
                </button>
            </div> 
            <div id={expended ? 'menuExpended' : 'menu'}>
            {
                menuItems.map(({icon: Icon, ...item}) => (
                    <NavLink to={item.path} key={item.text} className='linkPage'>
                        {expended && <p>{item.text}</p>}
                    </NavLink>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Header