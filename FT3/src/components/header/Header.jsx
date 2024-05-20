import './header.scss'
import logo from '../../../public/logoSekurit.png'
import menu from '../../../public/assets/menu_Icon.svg'
import shop from '../../../public/assets/shop_Icon.svg'
import returnIcon from '../../../public/assets/return_Icon.svg'
import notif from '../../../public/assets/notif_Icon.svg'
import fav from '../../../public/assets/fav_Icon.svg'
import ask from '../../../public/assets/ask_Icon.svg'
import account from '../../../public/assets/account_Icon.svg'
import command from '../../../public/assets/command_Icon.svg'
import arrowDown from '../../../public/assets/arrowDown_Icon.svg'
import SimplePopup from '../PopUp'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id="headerContainer">
            <div id='block1'>
                <img src={logo} alt="" />
            </div>
            <div id='block2'>
                <div className='linkPage'>
                    <Link to='/' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>
                        <img src={menu} alt="" />
                        <span>Menu</span>
                    </Link>
                </div>
                <div id='progressBar'>
                    <SimplePopup />
                </div>
                <div id='name'>
                    <span>AUTOMOBILES GUERIN DU MANS</span>
                    <span>3301814</span>
                </div>
            </div>
            <ul id='block3'>
                <li className='linkPage'>
                    <Link to='/moncompte'  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', textDecoration: 'none'}}>
                        <img src={account} alt="" />
                        <span>Mon Compte</span>
                    </Link>
                </li>
                <li className='linkPage'>
                    <img src={returnIcon} alt="" />
                    <span>Nouveau retour</span>
                </li>
                <li className='linkPage'>
                    <img src={ask} alt="" />
                    <span>Nouvelle demande</span>
                </li>
                <li className='linkPage'>
                    <img src={command} alt="" />
                    <span>Commande rapide</span>
                </li>
                <li className='linkPage'>
                    <img src={fav} alt="" />
                    <span>Favoris</span>
                </li>
                <li className='linkPage'>
                    <img src={notif} alt="" />
                    <span>Notifications</span>
                </li>
                <li className='linkPage'>
                    <img src={shop} alt="" />
                    <span>Panier</span>
                </li>
            </ul>
            <div id='block4'>
                <div className='linkPage'>
                    <span>Pays</span>
                    <img src={arrowDown} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header