import React, { useState } from "react";
import './dashboard.scss';
import downloadIcon from '../../assets/icons/download_icon.svg';
import MyResponsiveLine from "../../components/charts/lineChart.jsx";
import birdy from "../../assets/bird.svg";
import dataSet1 from '../../data/dataset1.json'

const Dashboard = () => {

    const [lines, setLines] = useState({
        incidents: false,
        impact: false,
        amount: true,
        deletedTrains: false,
        delayedTrains: false
    });
    return (
        <div className="dashboard">
            <div className="headContainer">
                <h2>Analyse</h2>
                <div className="download">
                    <img src={downloadIcon} alt="download Icon" />
                    <span>Télécharger</span>
                </div>       
            </div>
            <div className="graphique">
                <div className="hearderGraphique">
                    <span>Retour au menu</span>
                    <img src={birdy} alt="Birdy"/>
                </div>
                <div className="legendeGraphique">
                    <h3>Legende</h3>
                    <div className="separator"></div>
                    <div className="toggleList">
                        <div className="toggle1">
                        <label className="form-switch">
                            <input type="checkbox" checked={lines.incidents} onChange={(event) => setLines({...lines, incidents: event.target.checked})}></input>
                            <i></i>                            
                        </label>
                            <span>Incidents</span>
                        </div>
                        <div className="toggle2">
                            <label className="form-switch">
                                <input type="checkbox" checked={lines.impact} onChange={(event) => setLines({...lines, impact: event.target.checked})}></input>
                                <i></i>                            
                            </label>
                            <span>Voyageurs impactés</span>
                        </div>
                        <div className="toggle3">
                            <label className="form-switch">
                                <input type="checkbox" checked={lines.amount} onChange={(event) => setLines({...lines, amount: event.target.checked})}></input>
                                <i></i>                            
                            </label>
                            <span>Montant compensable (en euros)</span>
                        </div>
                        <div className="toggle4">
                            <label className="form-switch">
                                <input type="checkbox" checked={lines.deletedTrains} onChange={(event) => setLines({...lines, deletedTrains: event.target.checked})}></input>
                                <i></i>                            
                            </label>
                            <span>Trains supprimés</span>
                        </div>
                        <div className="toggle5">
                            <label className="form-switch">
                                <input type="checkbox" ></input>
                                <i></i>                            
                            </label>
                            <span>Retard cumulé (en min)</span>
                        </div>
                    </div>

                </div>
                <div className="vraiGraphique">
                    <MyResponsiveLine lines={lines} data={dataSet1} />
                    
                </div>
            </div>
        </div>
    );
}
export default Dashboard