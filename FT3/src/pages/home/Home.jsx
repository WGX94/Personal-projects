import './home.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo from '../../../public/logoSekurit.svg'
import carousel1 from '../../../public/carousel1.png'
import carousel2 from '../../../public/carousel2.png'
import carousel3 from '../../../public/carousel3.png'
import carousel4 from '../../../public/carousel4.png'
import CustomizedInputBase from '../../components/search/Search';
import bus from '../../../public/assets/bus_Icon.svg'
import car from '../../../public/assets/car_Icon.svg'
import truck from '../../../public/assets/truck_Icon.svg'
import services from '../../../public/assets/services_Icon.svg'
import equip from '../../../public/assets/equip_Icon.svg'
import App from '../../components/prizeWheel/PrizeWheel';
import WheelComponent from '../../components/prizeWheel2/prizeWheel2';
import Wheel from '../../components/prizeWheel2/prizeWheel2';


const Home = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <div id="homeContainer">
            <div id='head'>
                <div id='text1'>
                    <span>Promos</span>
                </div>
                <div id='text2'>
                    <span>News</span>
                </div>
            </div>
            <div id='scroll'>
            <Carousel 
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className="block"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                    <div className='carousel'>
                        <img src={carousel1} alt="" />
                    </div>
                    <div className='carousel'>
                        <img src={carousel2} alt="" />
                    </div>
                    <div className='carousel'>
                        <img src={carousel3} alt="" />
                    </div>
                    <div className='carousel'>
                        <img src={carousel4} alt="" />
                    </div>        
                </Carousel>
            </div>
            <div id='search'>
                <div id='primaryBlock'>
                    <div id='upperBlock'>
                        <div id='title'>
                            <span>Recherche</span>
                            <span>Recherche KBA</span>
                        </div>
                        <CustomizedInputBase />
                    </div>
                    <div id='blocks'>
                        <div className='parts'>
                            <img src={car} alt="" />
                            <span>Voiture/véhicule utilitaire</span>
                        </div>
                        <div className='parts'>
                            <img src={truck} alt="" />
                            <span>Voiture/véhicule utilitaire</span>
                        </div>
                        <div className='parts'>
                            <img src={bus} alt="" />
                            <span>Voiture/véhicule utilitaire</span>
                        </div>
                        <div className='parts'>
                            <img src={equip} alt="" />
                            <span>Voiture/véhicule utilitaire</span>
                        </div>
                        <div className='parts'>
                            <img src={services} alt="" />
                            <span>Voiture/véhicule utilitaire</span>
                        </div>

                    </div>


                </div>

            </div>
            <div id='Prize'>
                <Wheel />

                <div id='front'>

                </div>

            </div>
        </div>
    )
}

export default Home