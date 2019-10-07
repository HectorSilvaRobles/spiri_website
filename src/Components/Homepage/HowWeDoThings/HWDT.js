import React, { Component } from 'react'
import icon1 from '../../../Media/Icons/intellectual.svg'
import icon2 from '../../../Media/Icons/sketch.svg'
import icon3 from '../../../Media/Icons/coding.svg'
import './hwdt.css'

export class HWDT extends Component {
    render() {
        return (
            <div className='hwdt'>
                <div className='hwdt-div'>
                    <div className='hwdt-header'>
                        <h1>How We Do Things</h1>
                        <div className='underline_1'></div>
                    </div>
                    <div className='hwdt-div-top'>
                        <div className='hwdt-card'>
                            <div className='hwdt-card-image'>
                                <img src={icon1} alt='web strategy icon' />
                            </div>
                            <h1>Web Strategy</h1>
                            <p>We develop a plan to make it easy for users to learn more about your business.</p>
                        </div>
                        <div className='hwdt-card'>
                            <div className='hwdt-card-image'>
                                <img src={icon2} alt='web design icon' />
                            </div>
                            <h1>Wireframe Design</h1>
                            <p>We design a mock-up of your site, giving a preview of how your website will look.</p>
                        </div>
                        <div className='hwdt-card'>
                            <div className='hwdt-card-image'>
                                <img src={icon3} alt='web development icon' />
                            </div>
                            <h1>Development</h1>
                            <p>Once you’re satisfied with the wireframe design we begin developing your website.</p>
                        </div>
                    </div>
                    <div className='hwdt-div-bottom'>
                        <div className='hwdt-card'></div>
                        <div className='hwdt-card'></div>
                        <div className='hwdt-card'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HWDT
