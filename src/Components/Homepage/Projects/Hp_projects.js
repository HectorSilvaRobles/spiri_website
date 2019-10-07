import React, { Component } from 'react'
import './hp_projects.css'

export class Hp_projects extends Component {
    render() {
        return (
            <div className='hp-projects'>
                <div className='hp-projects-header'>
                    <h1>Our Recent Work</h1>
                    <div className='underline_1'></div>
                </div>
                <div className='hp-projects-content'>
                    <div className='projects-info'>
                        <h1>Silva-Garcia Handymen Services LLC</h1>
                        <p>A Colorado Springs business which provides various handymen services.</p>
                        <div className='view-website-button'>View Website</div>
                    </div>
                    <div className='projects-image'></div>
                </div>
            </div>
        )
    }
}

export default Hp_projects
