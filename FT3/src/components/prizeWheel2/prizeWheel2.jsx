import React, { useEffect, useState } from "react";
import './prizeWheel2.scss'
import wheel from '../../../public/wheel.png'

const Wheel = () => {
    return (
        <canvas id="wheel"
            style={{ backgroundImage: `url(${wheel})` }}>
            

        </canvas>
    )
}

export default Wheel