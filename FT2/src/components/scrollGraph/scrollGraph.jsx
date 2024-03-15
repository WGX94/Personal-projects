import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import ReactDOM from 'react-dom';
import './scrollGraph.scss'

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
];

function scrollBar() {
    return (
        <>
        <h1 style={{textAlign: 'center'}}>Example</h1>
        <div className='scrollBar'>
            <Carousel breakPoints={breakPoints}>
                <h1>Hello</h1>
                <h1>Hello2</h1> 
                <h1>Hello3</h1> 
                <h1>He4llo</h1> 
                <h1>H4ello</h1> 
                <h1>6Hello</h1> 
                <h1>H§ello</h1>    
            </Carousel>
        </div>
        
        </>
    )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<scrollBar />, rootElement);

export default scrollBar;