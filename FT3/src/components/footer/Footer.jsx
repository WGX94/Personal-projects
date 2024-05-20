import './footer.scss'
import x from '../../../public/assets/x.svg';
import facebook from '../../../public/assets/facebook.svg'
import instagram from '../../../public/assets/instagram.svg';
import tiktok from '../../../public/assets/tiktok.svg';
import youtube from '../../../public/assets/youtube.svg';
import InputSubscription from '../Input';
import contact from '../../../public/contacts.png'

const Footer = () => {
    return (
        <div id="footerContainer">
            <div id="infos">
                <div className="title">
                    <span>Aramis auto</span>
                </div>
                <div id="input" style={{border: '0px'}}>
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
                            <span>Nos collaborations</span>
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
                    <span>A bientôt !</span>
                </div>
                <div id="list">
                    <img src={contact} alt="" style={{width: '100%'}}/>

                </div>
            </div>

        </div>
    )
}

export default Footer