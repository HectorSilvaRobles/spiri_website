import React, { Component } from 'react'
import './cta.css'

export class CTA extends Component {
    render() {
        return (
            <div className='cta'>
                <div className='cta-wording'>
                    <h1>Let Us Help Build Your Website.</h1>
                </div>
                <div className='cta-button'>
                    <div className='cta-button-button'>Get Started</div>
                </div>
            </div>
        )
    }
}

export default CTA
