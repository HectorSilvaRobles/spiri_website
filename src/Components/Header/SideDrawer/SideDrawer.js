import React from 'react'
import './sidedrawer.css'

export default function SideDrawer(props) {
    let drawerClasses = 'drawer'
    if(props.show){
        drawerClasses = 'drawer open';
    }
    return (
        <div className={drawerClasses}>
            <a>Home</a>
            <a>Services</a>
            <a>Projects</a>
            <a>About</a>
            <div className='CTA-sidedrawer'>
                <h1>Let Us Help Build Your Website.</h1>
                <div className='CTA-sidedrawer-button'>Get Started</div>
            </div>
        </div>
    )
}
