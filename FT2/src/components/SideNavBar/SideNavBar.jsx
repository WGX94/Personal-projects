import React, { useState, useEffect } from 'react';
import './SideNavBar.scss'
import { NavLink } from 'react-router-dom';
import menuItems from './menuItems';
import sncfLogo from '@/assets/icons/logo_sncf.svg';
import userIcon from '@/assets/icons/admin_photo.svg';



const SideNavBar = ({ text }) => {
    const [isExpended, setExpendedState] = useState(true);
    const [userData, setUserData] = useState({ name: '', email: ''});

    useEffect(() => {
        const storedName = localStorage.getItem('user_name');
        const storedEmail = localStorage.getItem('user_email');

        if (storedName && storedEmail) {
        setUserData({ name: storedName, email: storedEmail });
        }
    }, []); 

    return (

        <div className={isExpended ? 'side-nav-container' : 'side-nav-container side-nav-container-not-expended'}
            //onMouseEnter={() => setExpendedState(!isExpended)}
            //onMouseLeave={() => setExpendedState(!isExpended)}
            >
            <div className={isExpended ? 'nav-brand' : 'nav-brand nav-brand-not-expended'}>
                <img src={sncfLogo} className='logo'></img>
            </div>   
            <div className='nav-menu'>
                {
                menuItems.map(({icon: Icon, ...item}) => (
                    <NavLink to={item.path} key={item.text} className={isExpended ? 'menu-item' : 'menu-item menu-item-not-expended'}>
                        <Icon/>
                        {isExpended && <p>{item.text}</p>}
                    </NavLink>
                    ))
                }
            </div>
            <div className='nav-footer'>
                <div className={isExpended ? 'nav-details' : 'nav-details nav-details-not-expended'}>
                    <img src={userIcon} alt="" />
                    <div className='nav-footer-info'>
                        {isExpended && (<p className='nav-footer-name'>{userData.name}</p>)}
                        {isExpended && (<p className='nav-footer-mail'>{userData.email}</p>)}
                    </div>
                </div>
            </div>
        </div>

    );
};





/* LINE 16
<button 
                        className={
                            isExpended? 'hamburger hamburger-in':'hamburger hamburger-out'
                        }
                        onMouseEnter={()=> setExpendedState(!isExpended)}                          
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
*/





// const SideNavBar = () => {
//     const [isExpended, setExpendedState] = useState(false);
//     const menuItems = [
//         {
//             id: 1,
//             text: 'Home',
//             icon: 'icons/home_icon.svg',
//         },
//         {
//             id: 2,
//             text: 'Dashboard',
//             icon: 'icons/dashboard_icon.svg',
//         },
//         {
//             id: 3,
//             text: 'Map',
//             icon: 'icons/map_icon.svg',
//         },
//         {
//             id: 4,
//             text: 'Events',
//             icon: 'icons/event_icon.svg',
//         },
//         {
//             id: 5,
//             text: 'IA',
//             icon: 'icons/ia_icon.svg',
//         },
//         {
//             id: 6,
//             text: 'User',
//             icon: 'icons/user_icon.svg',
//         },
//         {
//             id: 7,
//             text: 'Settings',
//             icon: 'icons/settings_icon.svg',
//         },
//     ]
//     return (
//         <div className='container'>
//             <div className={isExpended ? 'side-nav-container' : 'side-nav-container side-nav-container-not-expanded'}
//             onMouseEnter={()=> setExpendedState(!isExpended)} 
//             onMouseLeave={()=> setExpendedState(!isExpended)}>
//                 <div className='nav-upper'>
//                     <div className='nav-heading'>

//                             <div className={isExpended ? 'nav-brand' : 'nav-brand-not-expended'}>
//                                 <img src={sncfLogo}className='logo'></img>
//                             </div>

//                         <div className='nav-menu' key={menuItems.id}>{menuItems.map(({text,icon})=> (
//                             <a href="#" className={isExpended ? 'menu-item' : 'menu-item menu-item-not-expended'}>
//                                 <img src={icon} alt="" />
//                                 {isExpended && <p>{text}</p>}
//                             </a>
//                         ))}
//                         </div>
//                     </div>
//                 </div>

//                 <div className='nav-footer'>
//                     <div className={isExpended ? 'nav-details' : 'nav-details nav-details-not-expended'}>
//                         <img src="icons/admin_photo.svg" alt="" />
//                         <div className='nav-footer-info'>
//                             {isExpended && (<p className='nav-footer-name'>Stéphane FERRON</p>)}
//                             {isExpended && (<p className='nav-footer-mail'>sferron-sncf@gmail.com</p>)}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


export default SideNavBar;