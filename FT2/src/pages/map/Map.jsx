import React, { useState } from "react";
import './map.scss';
import MapChart from "../../components/charts/map/mapChart";
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.scss';
import App from './App.jsx';
import backMapLeft from '../../assets/backMapLeft.svg'
import calendar from '../../assets/icons/carbonCalendar_icon.svg'
import blockBig from '../../assets/icons/blockBig.svg'
import blockMid from '../../assets/icons/blockMid.svg'
import blockLil from '../../assets/icons/blockLil.svg'


const MapPage = () => {

    return (
        <div className="page">
            <div className="page_inner">
                <div className="headContainer">
                    <h2>Map</h2>
                </div>
                <div className="mainContainer">
                    <div className="mainContainer_inner">
                        <div id="circle">
                            <div id="nameWeek">
                                <img src={calendar} alt="" />
                                <span>Semaine n°2 Octobre</span>
                            </div>
                            <div style={{ backgroundImage:`url(${backMapLeft})`,backgroundRepeat:"no-repeat"}} id="backImg">
                                <div className="legende">
                                    <span>Légende :</span>
                                </div>
                                <div className="problem">
                                    <div  id="red">
                                    </div>
                                    <span>Problème majeur</span>
                                </div>
                                <div className="problem">
                                    <div  id="orange">
                                    </div>
                                    <span>Problème intermédiaire</span>
                                </div>
                                <div className="problem">
                                    <div  id="yellow">
                                    </div>
                                    <span>Problème mineur</span>
                                </div>
                                <div id="blockBig">
                                    <img src={blockBig} alt="" />
                                    <span>+ 100K voyageurs impactés</span>
                                </div>
                                <div id="blockMid">
                                    <img src={blockMid} alt="" />
                                    <span>Entre 50K et 100K voyageurs impactés</span>
                                </div>
                                <div id="blockLil">
                                    <img src={blockLil} alt="" />
                                    <span>- 50K voyageurs impactés</span>
                                </div>

                            </div>                                
                        </div>
                        <MapChart>
                        </MapChart>
                        <div id="infos">
                            <div id="region">
                                <span id="text1">Le 11 Octobre 2023</span>
                                <span id="text2">Panne électrique</span>
                                <span id="text3">Consulter les données sur la page évènement</span>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MapPage


//<MapChart />
/*

*/