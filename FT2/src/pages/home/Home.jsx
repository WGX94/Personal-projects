import React from "react";
import './home.scss';
import dataSet1 from '../../data/dataset1.json';
import dataSet2 from '../../data/dataset2.json';
import downloadIcon from '../../assets/icons/download_icon.svg'
import incidentsNumber from '../../assets/icons/nb_incidents.svg'
import clientNumber from '../../assets/icons/nb_clients.svg'
import montantCp from '../../assets/icons/montant.svg'
import trainssupNb from '../../assets/icons/nb_trainssupp.svg'
import late from '../../assets/icons/retard.svg';
import backImg from '../../assets/backImg.svg';
import MyResponsiveBar from '../../components/charts/barChart'
import fondSchema from '../../assets/fondSchema.svg'
import cloud from '../../assets/icons/cloud_icon.svg'
import leftArrow from '../../assets/icons/leftArrow_icon.svg'
import rightArrow from '../../assets/icons/rightArrow_icon.svg'
import lightning from '../../assets/icons/lightning_icon.svg'
import rain from '../../assets/icons/rain_icon.svg'
import umbrella from '../../assets/icons/umbrella_icon.svg'
import umbrellaPurple from '../../assets/icons/umbrellaPurple_icon.svg'
import wind from '../../assets/icons/wind_icon.svg'
import wind2 from '../../assets/icons/wind2_icon.svg'
//import MyResponsivePie from "../../components/charts/pieChart";
import filter from '../../assets/icons/filter_icon.svg'
import rowBackImg from '../../assets/rowBackImg.svg'
import arrow from '../../assets/icons/arrow.svg'


const Home = () => {
    return (
        <div className="home">
            <div className="headContainer">
                <div className="filter" id="filter1">
                    <span>Hebdomadaire</span>
                    <img src={filter} alt="" />
                </div>
                <div className="filter" id="filter2">
                    <span>Tous les axes</span>
                    <img src={filter}  alt="" />
                </div>
                <div className="filter" id="filter3">
                    <span>Tous les aléas</span>
                    <img src={filter}  alt="" />
                </div>                  
            </div>
            <div className="rowFirst">
                {!!dataSet1 && Array.isArray(dataSet1) && (
                <ul>
                    <li>
                        <div className="blokStat">
                            <span>Nombre d’incidents</span>
                            <div className="percent">
                            {
                                dataSet1
                                    .filter(e => {
                                        
                                        const date = new Date(e.Datecirculation.split('/').reverse().join('-'));
                                        return date >= new Date('2023-10-08') && date <= new Date('2023-10-14');
                                    })
                                    .length
                            }
                                <span id="percentNumber1">-5%</span>
                            </div>
                        </div>
                        <div className="imageRow_first">
                            <img src={incidentsNumber} alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="blokStat">
                            <span>Nombre de clients</span>
                            <div className="percent">
                                {
                                dataSet1
                                    .filter(e => {
                                    
                                        const date = new Date(e.Datecirculation.split('/').reverse().join('-'));
                                        return date >= new Date('2023-10-08') && date <= new Date('2023-10-14');
                                    })
                                    .reduce((totalPax, entry) => {
                                        
                                        const paxValue = parseInt(entry.Pax, 10);
                                        return isNaN(paxValue) ? totalPax : totalPax + paxValue;
                                    }, 0)
                                }
                                <span id="percentNumber2">+7%</span>  
                            </div>  
                        </div>
                        <div className="imageRow_first">
                            <img src={clientNumber} alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="blokStat">
                            <span>Montant compensable</span>
                            <div className="percent">
                            {
            
                            dataSet1
                                .filter(e => {
                                    
                                    const date = new Date(e.Datecirculation.split('/').reverse().join('-'));
                                    return date >= new Date('2023-10-08') && date <= new Date('2023-10-14');
                                })
                                .reduce((totalMontantCompensable, entry) => {
                                    
                                    const montantCompensable = parseFloat(entry.Montant_compensable.replace(',', '.'));
                                    return isNaN(montantCompensable) ? totalMontantCompensable : totalMontantCompensable + montantCompensable;
                                }, 0).toFixed(2)
                            }
                                <span id="percentNumber3">+14%</span>
                            </div>
                        </div>
                        <div className="imageRow_first">
                            <img src={montantCp} alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="blokStat">
                            <span>Nombre de trains sup</span>
                            <div className="percent">
                                {
                                dataSet1
                                    .filter(e => {
                                        
                                        const date = new Date(e.Datecirculation.split('/').reverse().join('-'));
                                        return date >= new Date('2023-10-08') && date <= new Date('2023-10-14');
                                    })
                                    .reduce((totalSuppression, entry) => {
                                        
                                        const suppressionValue = parseInt(entry.Suppression, 10);
                                        return isNaN(suppressionValue) ? totalSuppression : totalSuppression + suppressionValue;
                                    }, 0)
                                }
                                <span id="percentNumber4">-8%</span>
                            </div>
                        </div>
                        <div className="imageRow_first">
                            <img src={trainssupNb} alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="blokStat">
                            <span>Retard cumulé</span>
                            <div className="percent">
                                {
                                dataSet1
                                    .filter(e => {
                                        
                                        const date = new Date(e.Datecirculation.split('/').reverse().join('-'));
                                        return date >= new Date('2023-10-08') && date <= new Date('2023-10-14');
                                    })
                                    .reduce((totalEH, entry) => {
                                        
                                        const ehValue = parseFloat(entry.EH.replace(',', '.'));

                                        
                                        const ehToAdd = Math.max(0, ehValue);

                                        return isNaN(ehValue) ? totalEH : totalEH + ehToAdd;
                                    }, 0).toFixed(2)
                                }
                                <span id="percentNumber5">-2%</span>
                            </div>
                        </div>
                        <div className="imageRow_first">
                            <img src={late} alt="" />
                        </div>
                    </li>
                </ul>
                )
                }               
            </div>
            <div className="rowSecond">
                <div id="events">
                    <div id="filterEvent">
                        <div id="nameRowSecond">
                            <span>Evènement</span>
                        </div>
                        <div id="filterElement">
                            <div id="block1">
                                <span className="nameFilter">Filtrer :</span>
                                <div className="namesEvent" id="green1">
                                    <span>Météorologie</span>
                                </div>
                                <div className="namesEvent" id="pink1">
                                    <span>Maintenance</span>
                                </div>
                                <div className="namesEvent" id="purple1">
                                    <span>Grève/Manifestation</span>
                                </div>
                                <div className="namesEvent" id="blue1">
                                    <span>Problème voyageur</span>
                                </div>
                            </div>
                            <div className="block2">
                                <span className="nameFilter">Classement par catégorie</span>
                                <div className="firstPlace" id="purple">
                                    <div className="number">
                                        <span>1</span>
                                    </div>
                                    <span className="dateEvent">7 Mars 2023</span>
                                </div>
                                <div className="secondPlace" id="purple2">
                                    <div className="number">
                                        <span>2</span>
                                    </div>
                                    <span className="dateEvent">13 Octobre 2023</span>
                                </div>
                                <div className="thirdPlace">
                                    <div className="number">
                                        <span>3</span>
                                    </div>
                                    <span className="dateEvent">31 Jan-1 Fév 2023</span>
                                </div>
                            </div>
                            <div className="block2">
                                <span className="nameFilter">Classement 2023</span>
                                <div className="firstPlace" id="green">
                                    <div className="number">
                                        <span>1</span>
                                    </div>
                                    <span className="dateEvent">7 Mars 2023</span>
                                </div>
                                <div className="secondPlace" id="pink">
                                    <div className="number">
                                        <span>2</span>
                                    </div>
                                    <span className="dateEvent">24 Septembre 2023</span>
                                </div>
                                <div className="thirdPlace">
                                    <div className="number">
                                        <span>3</span>
                                    </div>
                                    <span className="dateEvent">27 Août 2023</span>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div id="week2" style={{ backgroundImage:`url(${rowBackImg})`,backgroundRepeat:"no-repeat"}}>
                        <div id="title">
                            <span>Semaine n°2  de Décembre</span>
                        </div>
                        <div id="blocks3">
                            <div id="arrow">
                                <img src={arrow} alt="" />
                                <div className="firstPlace" id="purple3">
                                    <span>08/12/23</span>
                                    <span className="separator">/</span>
                                    <span>Grève</span>
                                </div>
                            </div>
                            <div className="firstPlace" id="green3">
                                <span>11/12/23</span>
                                <span className="separator">/</span>
                                <span>Panne électrique</span>

                            </div>
                            <div className="firstPlace" id="blue3">
                                <span>14/12/23</span>
                                <span className="separator">/</span>
                                <span>Alerte incendie</span>

                            </div>
                        </div>
                    </div>      
                </div>
                <div id="axis">
                    <div id="graphs">
                        <span>Repartition sur les axes</span>
                        <div id="graphInner">
                            <img src={leftArrow} alt="" />
                            <div className="scroll">
                                <div className="scroll_inner">
                                    <div className="scroll-slide">
                                        <MyResponsiveBar data={dataSet1} indicator={'Montant_compensable'} indicatorBy={'Axe'} />
                                    </div> 
                                    <div className="scroll-slide">
                                        <MyResponsiveBar data={dataSet1} indicator={'Pax'} indicatorBy={'Axe'} />
                                    </div> 
                                    <div className="scroll-slide">
                                        <MyResponsiveBar data={dataSet1} indicator={'EH'} indicatorBy={'Axe'} />
                                    </div> 
                                </div>
                            </div> 
                            <img src={rightArrow} alt="" />
                        </div>

                    </div>
                    <div id="weather" style={{ backgroundImage:`url(${backImg})`,backgroundRepeat:"no-repeat"}}>
                        <div id="innerInfo">
                            <div id="week">
                                <div>
                                    <span id="date">Du 08 au 14/10/2023</span>
                                </div>
                                <div>
                                    <span id="axe">Axe Sud-Est</span>
                                </div>
                                <div id="weatherInfo">
                                    <div className="numberStat">
                                        <span>80%</span>
                                        <img src={umbrellaPurple} alt="" />
                                    </div>
                                    <div id="temperature">
                                        <span>-3°</span>
                                    </div>
                                    <div className="numberStat">
                                        <span>70km/h</span>
                                        <img src={wind} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div id="infoWeek">
                                <div id="weatherConditions">
                                    <p>Mêmes conditions météorologiques que la semaine du<span> 1 au 6/03/2022</span></p>
                                </div>
                                <div id="bloks">
                                    <div className="stat">
                                        <p><span>1245 </span>voyageurs ont été impactés</p>
                                    </div>
                                    <div className="stat">
                                        <p><span>70% </span> des trains ont été supprimés</p>
                                    </div>
  
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home

/* ligne 146
<div id="name">
                        <span> Classement par cause</span>
                        <span>Evènement</span>
                        <span>Classement total</span>
                    </div>
                    <div id="classement">
                        <div className="podium">
                            <div className="firstPlace">
                                <div className="number">
                                    <span>1</span>
                                </div>
                                <span className="dateEvent">24 janvier 2023</span>
                            </div>
                            <div className="secondPlace">
                                <div className="number">
                                    <span>2</span>
                                </div>
                                <span className="dateEvent">17 juin 2023</span>
                            </div>
                            <div className="thirdPlace">
                                <div className="number">
                                    <span>3</span>
                                </div>
                                <span className="dateEvent">8 mars 2023</span>
                            </div>
                        </div>
                        <div className="podium">
                            <div className="firstPlace">
                                <div className="number">
                                    <span>1</span>
                                </div>
                                <span className="dateEvent">20 décembre 2023</span>
                            </div>
                            <div className="secondPlace">
                                <div className="number">
                                    <span>2</span>
                                </div>
                                <span className="dateEvent">14 août 2023</span>
                            </div>
                            <div className="thirdPlace">
                                <div className="number">
                                    <span>3</span>
                                </div>
                                <span className="dateEvent">24 janvier 2023</span>
                            </div>
                        </div>
                    </div>
*/


/*
<div className="graphs">
                    <div className="event">
                        <MyResponsivePie></MyResponsivePie>
                    </div>
                    <div className="axe">
                        <h2> Répartition sur les axes</h2>
                        <div className="scroll">
                            <div className="scroll_inner">
                                <div className="scroll-slide">
                                    <MyResponsiveBar data={dataSet1} indicator={'Montant_compensable'} indicatorBy={'Axe'} />
                                </div> 
                                <div className="scroll-slide">
                                   <MyResponsiveBar data={dataSet1} indicator={'Pax'} indicatorBy={'Axe'} />
                                </div> 
                                <div className="scroll-slide">
                                    <MyResponsiveBar data={dataSet1} indicator={'EH'} indicatorBy={'Axe'} />
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="ia">
                    
                    <div className="infoIa" style={{ backgroundImage:`url(${backImg})`,backgroundRepeat:"no-repeat"}}>
                       
                        <div className="input">
                            <span>
                                Ecrivez le nom d’une ville...
                            </span>
                        </div>
                        <div className="infoMeteo">
                            <div className="today">
                                <div className="headTitle">
                                    <span>
                                        Lundi
                                    </span>
                                    <span>
                                        Votre position
                                    </span>
                                </div>
                                <div className="temperature">
                                    <span>
                                        -3°
                                    </span>
                                    <span>
                                        pluie forte
                                    </span>
                                </div>
                                <div className="infoDate">
                                    <div>
                                        <span>
                                            80%
                                        </span>
                                        <img src={umbrellaPurple} alt="" />
                                    </div>
                                    <div>
                                        <span>
                                            70%
                                        </span>
                                        <img src={wind} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="calendar">
                                <div className="startWeek">
                                    <div className="day">
                                        <span>
                                            Mar.
                                        </span>
                                        <span>
                                            -3°
                                        </span>
                                        <img src={cloud} alt="" />
                                    </div>
                                    <div className="day">
                                        <span>
                                            Mer.
                                        </span>
                                        <span>
                                            -1°
                                        </span>
                                        <img src={umbrella} alt="" />
                                    </div>
                                    <div className="day">
                                        <span>
                                            Jeu.
                                        </span>
                                        <span>
                                            -1°
                                        </span>
                                        <img src={umbrella} alt="" />
                                    </div>
                                    <div className="day">
                                        <span>
                                            Ven.
                                        </span>
                                        <span>
                                            -2°
                                        </span>
                                        <img src={umbrella} alt="" />
                                    </div>
                                </div>
                                <div className="endWeek">  
                                    <div className="day">
                                        <span>
                                            Sam.
                                        </span>
                                        <span>
                                            0°
                                        </span>
                                        <img src={rain} alt="" />
                                    </div>
                                    <div className="day"> 
                                        <span>
                                            Dim.
                                        </span>
                                        <span>
                                            2°
                                        </span>
                                        <img src={rain} alt="" />
                                    </div>
                                    <div className="day">
                                        <span>
                                            Lun.
                                        </span>
                                        <span>
                                            2°
                                        </span>
                                        <img src={rain} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infoAxeSud">
                            <div className="dateAxe">
                                <div className="headTitle">
                                    <span>
                                        Le 20/03/2023
                                    </span>
                                    <span>
                                        Axe Sud-Est
                                    </span>
                                </div>
                                <div className="temperature">
                                    <span>
                                        0°
                                    </span>
                                    <span>
                                        pluie forte
                                    </span>
                                </div>
                                <div className="infoDate">
                                    <div>
                                        <span>
                                            90%
                                        </span>
                                        <img src={lightning} alt="" />
                                    </div>
                                    <div>
                                        <span>
                                            85%
                                        </span>
                                        <img src={wind2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="keyNumber">
                                <div className="percent">
                                    <p><span>70%</span> des trains ont été supprimés</p>
                                </div>
                                <div className="number">
                                    <p><span>1245</span> voyageurs ont été impactés</p>
                                </div>
                                <div className="montant">
                                    <p>cela représente <span>25 000€</span> de montant compensable</p>
                                </div>
                            </div>
                        </div>           
                    </div>    
                </div>
*/