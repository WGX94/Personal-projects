import React from "react";
import { useEffect, useState, useRef, Suspense } from "react";
import "../home/home.scss";
import App from "../map/Map";
import videoBg from "/assets/videoBg.mp4"
import Header from "../../components/header/Header";
import Error from "../error/Error";
import arrowBack from "/assets/arrow_back.svg";
import at_at from "/public/at_at.svg";
import at_st from "/public/at_st.svg";
import tie from "/public/tie.svg";
import falcon from "/public/falcon.svg";
import destroyer from "/public/destroyer.svg";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Model from "../../components/Tie";
import crew from "/assets/crew.svg";
import hyperspace from "/assets/hyperspace.svg";
import stock from "/assets/stock.svg";
import speed from "/assets/speed.svg";
import arrowRight from "/assets/arrowRight.svg";
import CameraPositionLogger from "../../components/CameraPositionLogger";
import animate from "../../components/CameraPositionLogger";


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

    return (
        
        <div id="containerHome">
            <div id="background">
                <Header></Header>
                {data ?
                <span id="title">
                    {data.model}
                </span>
                :'Loading...'}
                <img src={arrowBack} alt="" id="scrollTo" onClick={handleClick} />
                <video src={videoBg} autoPlay loop muted id="video">    
                </video> 
            </div>
            <div ref={ref} id="destroyerInfo" >
                <div id="destroyerImage">
                    <img src={destroyer} alt="" />
                    <div id="length">
                        <span>{data && data.length} m</span>
                    </div>
                    
                </div>
                <div id="infos">
                    <div id="descriptifDestroyer">
                        <div id="title">
                            <span>{data && data.model}</span>
                        </div>
                        <div id="primaryInfos">
                            <div className="iconInfos">
                                <div className="properties">
                                    <img src={crew} alt="" />
                                    <span className="text">Equipage</span>
                                </div>
                                <span>{data && data.crew}</span> 
                            </div>
                            <div className="iconInfos">
                                <div className="properties">
                                    <img src={stock} alt="" />
                                    <span className="text">Capacité</span>
                                </div>
                                <span>{data && data.cargo_capacity}</span> 
                            </div>
                            <div className="iconInfos">
                                <div className="properties">
                                    <img src={hyperspace} alt="" />
                                    <span className="text">Hyperespace</span>
                                </div>
                                <span>{data && data.max_atmosphering_speed}</span> 
                            </div>
                            <div className="iconInfos">
                                <div className="properties">
                                    <img src={speed} alt="" />
                                    <span className="text">Vitesse</span>
                                </div>
                                <span>{data && data.MGLT}</span> 
                            </div>
                        </div>

                    </div>

                </div>
                   
            </div>
            <div id="blocks">
                <div id="left">
                    <div style={{ backgroundImage: `url(${tie})`, backgroundRepeat: 'no-repeat'}} className="productsLeft" >
                        <div className="descriptifImage" id="tie">
                            <span className="titleImg">{dataTie && dataTie.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${at_at})`, backgroundRepeat: 'no-repeat'}} className="productsLeft">
                        <div className="descriptifImage" id="atAt">
                            <span className="titleImg">{dataAtAt && dataAtAt.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div style={{ backgroundImage: `url(${falcon})`, backgroundRepeat: 'no-repeat'}} className="productsRight">
                        <div className="descriptifImage" id="falcon">
                            <span className="titleImg">{dataFalcon && dataFalcon.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${at_st})`, backgroundRepeat: 'no-repeat'}} className="productsRight">
                        <div className="descriptifImage" id="atSt">
                            <span className="titleImg">{dataAtSt && dataAtSt.name}</span>      
                            <div className="imageContainer">
                                <img src={arrowRight} alt="" />
                                <span>Découvrir</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="titleLocalisation">
                <span>Découvrez la localisation de notre prochain site</span>
            </div>
            <App></App>
            <div id="infoBase">
            <Canvas>
                <OrbitControls enableZoom={true} />
                <CameraPositionLogger event='mousedown' />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2,5,2]}intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>       
            </div>   
        </div>
    
    )
}

export default Home


                    