import "../footer/footer.scss"
import x from "/assets/x.svg";
import facebook from "/assets/facebook.svg";
import instagram from "/assets/instagram.svg";
import tiktok from "/assets/tiktok.svg";
import youtube from "/assets/youtube.svg";
import InputSubscription from "../Input";

const Footer = () => {
    return (
        <div id="containerFooter">
            <div id="infos">
                <div className="title">
                    <span>Kuat Drive Yards</span>
                </div>
                <div id="input">
                    <InputSubscription />
                </div>
                <div id="stack">
                    <div id="mentions" >
                        <div className="item">
                            <span>Carrières</span>
                            <span>Médias</span>
                        </div>
                        <div className="item">
                            <span>Partenaires</span>
                            <span>Investisseurs</span>
                            <span>Lien avec l'Empire</span>
                            <span>Notre histoire</span>           
                        </div>
                    </div>
                    <div id="politique">
                        <div className="itemConditions">
                            <span>POLITIQUE DES COOKIES</span>
                            <span>CONDITIONS GÉNÉRALES</span>
                        </div>
                        <div className="itemConditions">
                            <span>RAPPORT SUR L'ÉCART DES GENRES</span>
                            <span>DÉCLARATION CONTRE L'ESCLAVAGE</span>
                        </div>
                        <div className="itemConditions">
                            <span>POLITIQUE DE CONFIDENTIALITÉ</span>
                            <span> </span>
                        </div>
                    </div>
                </div>
                <div id="medias">
                    <div className="reseaux">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="reseaux">
                        <img src={x} alt="" />
                    </div>
                    <div className="reseaux">
                        <img src={youtube} alt="" />
                    </div>
                    <div className="reseaux">
                        <img src={tiktok} alt="" />
                    </div>
                    <div className="reseaux">
                        <img src={instagram} alt="" />
                    </div>
                </div>

            </div>
            <div id="contacts">
                <div className="title">
                    <span>Contacts</span>
                </div>
                <div id="list">
                             
                </div>
            </div>
        </div>
    )
}

export default Footer


