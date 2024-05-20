import './car.scss'
import car from '../../../public/assets/car.svg'
import bluetooth from '../../../public/assets/bluetooth.svg'
import cloud from '../../../public/assets/cloud.svg'
import snowflake from '../../../public/assets/snowflake.svg'

const Car = () => {
    return (
        <div id='carContainer'>
            <div id='block1'>
                <div id='img'>
                    <img src={car} alt="" id='photo' />
                </div>
                <div id='infoPeugeot'>
                    <div id='title'>
                        <span>Peugeot 308 (ID 747851)</span>
                    </div>
                    <div id='score'>
                        <span>Scoring</span>
                        <div id='blueScore'></div>
                    </div>
                    <div id='analyse'>
                        <span>Analyse</span>
                        <div className='stat' >
                            <span>Parking</span>
                            <div id='line1'>
                                <span>120</span>
                            </div>
                        </div>
                        <div className='stat' >
                            <span>Stock</span>
                            <div id='line2'>
                                <span>35</span>
                            </div>
                        </div>
                        <div className='stat' >
                            <span>Arrival</span>
                            <div id='line3'>
                                <span>19</span>
                            </div>
                        </div>
                        <div className='stat' >
                            <span>Forecast</span>
                            <div id='line4'></div>
                        </div>
                        <div className='stat' >
                            <span>Searches</span>
                            <div id='line5'></div>
                        </div>
                    </div>
                    <div id='required'>
                        <div className='roll'>
                            <div id='blue1'></div>
                            <span>Heavily required</span>

                        </div>
                        <div className='roll'>
                            <div id='blue2'></div>
                            <span>Midly required</span>

                        </div>
                        <div className='roll'>
                            <div id='blue3'></div>
                            <span>Less required</span>

                        </div>

                    </div>
                </div>
            </div>
            <div id='block2'>
                <div id='characteristics'>
                    <div >
                        <span className='title2'>Characteristics</span>
                    </div>
                    <div id='infos'>
                        <div className='details'>
                            <span className='part1'>Vehicule category : </span><span className='part2'>03. Compact Sedan</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>Gearbox : </span><span className='part2'>Manual</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>Energy : </span><span className='part2'>1.Gas</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>Vehicle Km : </span><span className='part2'>88307</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>Initial traffic release : </span><span className='part2'>2015-07-21T00:00:00Z</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>First hand : </span><span className='part2'>No</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>P2M : </span><span id='textGreen'>0.9644679527</span>
                        </div>
                        <div className='details'>
                            <span className='part1'>Rotation : </span><span className='part2'>22</span>
                        </div>
                    </div>
                    <div id='price'>
                        <span id='price1'>Price : </span><span id='price2'>15499 €</span>
                    </div>
                </div>
                <div id='strenghtsBlock'>
                    <span className='title2'>Strenghts</span>
                    <div id='icon'>
                        <div className='icons'>
                            <img src={bluetooth} alt="" id='bluetooth' />
                            <span className='align'>Bluetooth</span>
                        </div>
                        <div className='icons'>
                            <img src={snowflake} alt="" id='ac' />
                            <span className='align'>AC</span>
                        </div>
                        <div className='icons'>
                            <img src={cloud} alt="" id='eco' />
                            <span className='align'>Eco-friendly</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Car
