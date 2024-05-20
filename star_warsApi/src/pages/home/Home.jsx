import React from "react";
import { useEffect, useState, useRef, Suspense } from "react";
import "../home/home.scss";
import App from "../map/Map";
import videoBg from "/assets/videoBg.mp4"
import Header from "../../components/header/Header";
import Error from "../error/Error";
import arrowBack from "/assets/arrow_back.svg";
import at_at from "/public/at_at.jpg";
import at_st from "/public/at_st.jpg";
import tie from "/public/tie.jpg";
import falcon from "/public/falcon.jpg";
import destroyer from "/public/destroyer.svg";
import {Canvas, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
//import Model from "../../components/Tie";
import crew from "/assets/stormtrooperIcon.png";
import hyperspace from "/assets/hyperspaceIcon.png";
import stock from "/assets/capacityIcon.png";
import speed from "/assets/speedIcon.png";
import arrowRight from "/assets/arrowRight.svg";
import turnIcon from "/assets/360.png"

import destroyerBg from '../../../public/destroyerBg.jpg'
import shipDest from "../../components/Ship";
import Model from "../../components/Ship";
import Tie from "../../components/Tie";
import * as THREE from 'three'
import VideoComponent from "../../components/Video";

const Home = () => {
    const [data, setData] = useState(null);

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  useEffect(() => {
    fetch('https://www.swapi.tech/api/starships/3')
      .then(response => response.json())
      .then(json => setData(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(data)

  const [dataTie, setDataTie] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles/8')
      .then(response => response.json())
      .then(json => setDataTie(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(dataTie)

  const [dataAtAt, setDataAtAt] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles/18')
      .then(response => response.json())
      .then(json => setDataAtAt(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(dataAtAt)

  const [dataAtSt, setDataAtSt] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles/19')
      .then(response => response.json())
      .then(json => setDataAtSt(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(dataAtSt)

  const [dataFalcon, setDataFalcon] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/starships/10')
      .then(response => response.json())
      .then(json => setDataFalcon(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(dataFalcon)

  const [dataInterceptor, setDataInterceptor] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles/26')
      .then(response => response.json())
      .then(json => setDataInterceptor(json.result.properties))
      .catch(error => console.error(error));
  }, []);
  
  console.log(dataInterceptor)

  function Controls() {
    const {
        camera, 
        gl: { domElement },
    } = useThree();



    return <OrbitControls args={[camera, domElement]} />;
  }

    return (
        
        <div id="containerHome">
            <div id="background">
                {data ?
                <span id="title">
                    {data.model}
                </span>
                :'Loading...'}
                <img src={arrowBack} alt="" id="scrollTo" onClick={handleClick} />
               
                <video src={videoBg} autoPlay loop muted id="video">    
                </video>
                
            </div>
            <div ref={ref} style={{ backgroundImage: `url(${destroyerBg})`, backgroundRepeat: 'no-repeat'}} id="destroyerInfo" >
                <div id="title">
                    <span>{data && data.model}</span>
                </div>
                <div id="infos">
                    <div id="destroyerImage">
                        <Canvas camera={{ position: [900, 200, 600], far: 2000}}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[-2,5,2]}intensity={1} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                        </Canvas> 
                        
                    </div>           
                    <div id="primaryInfos">
                        <div className="iconInfos" id="border">
                            <div className="properties">
                                <img src={crew} alt="" />
                                <span className="text">CREW</span>
                            </div>
                            <span>{data && data.crew}</span> 
                        </div>
                        <div className="iconInfos" id="border2">
                            <div className="properties">
                                <img src={stock} alt="" />
                                <span className="text">CAPACITY</span>
                            </div>
                            <span>{data && data.cargo_capacity}</span> 
                        </div>
                        <div className="iconInfos" id="border3">
                            <div className="properties">
                                <img src={hyperspace} alt="" />
                                <span className="text">HYPERSPACE</span>
                            </div>
                            <span>{data && data.max_atmosphering_speed}</span> 
                        </div>
                        <div className="iconInfos">
                            <div className="properties">
                                <img src={speed} alt="" />
                                <span className="text">SPEED</span>
                            </div>
                            <span>{data && data.MGLT}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div id="blocks">
                <div id="left">
                    <button style={{ backgroundImage: `url(${tie})`, backgroundRepeat: 'no-repeat' }} className="productsLeft" >
                        <div className="descriptifImage" id="tie">
                            <span className="titleImg">{dataTie && dataTie.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </button>
                    <button style={{ backgroundImage: `url(${at_at})`, backgroundRepeat: 'no-repeat'}} className="productsLeft">
                        <div className="descriptifImage" id="atAt">
                            <span className="titleImg">{dataAtAt && dataAtAt.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </button>
                </div>
                <div id="right">
                    <button style={{ backgroundImage: `url(${falcon})`, backgroundRepeat: 'no-repeat'}} className="productsRight">
                        <div className="descriptifImage" id="falcon">
                            <span className="titleImg">{dataFalcon && dataFalcon.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </button>
                    <button style={{ backgroundImage: `url(${at_st})`, backgroundRepeat: 'no-repeat'}} className="productsRight">
                        <div className="descriptifImage" id="atSt">
                            <span className="titleImg">{dataAtSt && dataAtSt.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            
            <div id="infoBase">
                <div id="nameShip">
                    <span>{dataInterceptor && dataInterceptor.name}</span>
                    <img src={turnIcon} alt="" />
                
                </div>
                <div id="model3d">
                    <Canvas camera={{ position: [0, 0, 11], far: 2000}}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2,5,2]}intensity={1} />
                        <Suspense fallback={null}>
                            <Tie />
                        </Suspense>
                    </Canvas> 

                </div>
                   
            </div>
            <div id="titleLocalisation">
                <span>Découvrez la localisation de notre prochain site</span>
            </div>
            <App></App> 
        </div>
    
    )
}

export default Home

/*
<div id="length">
                            <span>{data && data.length} m</span>
                        </div>
*/