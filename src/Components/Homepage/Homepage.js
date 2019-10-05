import React, { Component } from 'react'
import Herobanner from './HeroBanner/HeroBanner'
import Header from '../Header/Header'
import Benefit_1 from './Benefit_1/Benefit_1'
import Benefit_2 from './Benefit_2/Benefit_2'
import Services from './Services/Hp_Services'
import CTA from '../CTA/CTA'
import HWDT from './HowWeDoThings/HWDT'
import Projects from './Projects/Hp_projects'
import About from './About/Hp_about'
import Footer from '../Footer/Footer'
import Backdrop from '../Header/Backdrop/Backdrop'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import './homepage.css'

class Homepage extends Component {
    constructor(props){
        super(props)

        this.state = {
            drawerOpen: false
        }
    }

    drawerToggleClick = () => {
        console.log(this.state)
        this.setState((prevState) => {
            return {drawerOpen: !prevState.drawerOpen}
        })
    }

    backdropClick = () => {
        this.setState({drawerOpen: false})
    }
    render() {
        let backdrop;
        if(this.state.drawerOpen){
            backdrop = <Backdrop click={this.backdropClick} />
        }
        return (
            <div className='homepage'>
                <Header drawerClick={this.drawerToggleClick} />
                <SideDrawer show={this.state.drawerOpen} />
                {backdrop}
                <div className='body'>
                    <Herobanner />
                    <div className='spacer'></div>
                    <Benefit_1 />
                    <Benefit_2 />
                    <Services />
                    <CTA />
                    <HWDT />
                    <Projects />
                    <About />
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage
