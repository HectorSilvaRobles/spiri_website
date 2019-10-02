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
import './homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>
                <Header />
                <div className='body'>
                    <Herobanner />
                    <Benefit_1 />
                    <Benefit_2 />
                    <Services />
                    <CTA />
                    <HWDT />
                    <Projects />
                    <About />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Homepage
