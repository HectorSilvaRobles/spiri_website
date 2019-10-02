import React, {Component} from 'react'
import './header.css'
import logo from '../../Media/LogoText.png'

class Header extends Component {
    render(){
        return (
            <div className='header'>
                <div className='logo-section'>
                    <img src={logo} alt='SPIRI Solutions logo' />
                </div>
                <nav className='nav-bar'>
                    <ul>
                        <li><h1>Home</h1></li>
                        <li><h1>Services</h1></li>
                        <li><h1>Projects</h1></li>
                        <li><h1>About</h1></li>
                    </ul>
                </nav>
                <div className='CTA-header'>
                    <div className='CTA-header-button'>Get Started</div>
                </div>
            </div>
        )
    }
}

export default Header 