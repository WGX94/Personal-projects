import homeIcon from  '@/assets/icons/home_icon.svg?react';
import dashboardIcon from  '@/assets/icons/dashboard_icon.svg?react';
import mapIcon from  '@/assets/icons/map_icon.svg?react';
import eventIcon from  '@/assets/icons/event_icon.svg?react';
import iaIcon from  '@/assets/icons/ia_icon.svg?react';
import userIcon from  '@/assets/icons/user_icon.svg?react';
import settingsIcon from  '@/assets/icons/settings_icon.svg?react';

const menuItems = [
    {
        path: '/',
        text: 'Dashboard',
        icon: homeIcon,
    },
    {
        path: '/Analyse',
        text: 'Analyse',
        icon: dashboardIcon,
    },
    {
        id: 3,
        path: '/Carte',
        text: 'Carte',
        icon: mapIcon,
    },
    {
        id: 4,
        path: '/Event',
        text: 'Evenements',
        icon: eventIcon,
    },
    {
        id: 5,
        path: '/Reglages',
        text: 'Réglages',
        icon: settingsIcon,
    },
]

export default menuItems;