import React, { Component } from 'react'
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
                            <div className='hwdt-card-image'></div>
                            <h1>Web Strategy</h1>
                            <p>We develop a plan to make it easy for users to learn more about your business.</p>
                        </div>
                        <div className='hwdt-card'></div>
                        <div className='hwdt-card'></div>
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
