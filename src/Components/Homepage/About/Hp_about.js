import React, { Component } from 'react'
import image from '../../../Media/illustrations/web_developer.svg'
import './hp_about.css'

export class Hp_about extends Component {
    render() {
        return (
            <div className='hp-about'>
                <div className='about-header'>
                    <h1>About SPIRI</h1>
                    <div className='underline_1'></div>
                </div>
                <div className='about-content'>
                    <div className='about-content-image'> 
                        <img src={image} alt='Programmer making a website' />
                    </div>
                    <div className='about-content-info'>
                        <div className='about-section-info'></div>
                        <div className='about-section-info'></div>
                        <div className='about-section-info'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hp_about
