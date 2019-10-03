import React, { Component } from 'react'
import logo from '../../Media/LogoText.png'
import './footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-nav'>
                    <div className='footer-nav-bar'>
                        <a><h1>Home</h1></a>
                        <a><h1>Services</h1></a>
                        <a><h1>Projects</h1></a>
                        <a><h1>About</h1></a>
                        {/* <a><h1>Contact</h1></a> */}
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
