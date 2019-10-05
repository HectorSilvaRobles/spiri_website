import React, {Component} from 'react'
import './herobanner.css'

class Herobanner extends Component {
    render(){
        return (
            <div className='hero-banner'>
                <div className='hero-info'>
                    <h1>Establish An Online Presence </h1>
                    <p>Make it easy for people online to know what you’re about.</p>
                    <div className='hero-button'>Get Started</div>
                </div>
                <div className='blank-div'></div>
            </div>
        )
    }
}

export default Herobanner