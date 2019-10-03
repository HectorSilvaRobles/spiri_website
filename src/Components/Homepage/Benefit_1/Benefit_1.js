import React, {Component} from 'react'
import image from '../../../Media/illustrations/network_2.svg'
import './Benefit.css'

class Benefit_1 extends Component {
    render(){
        return (
            <div className='benefit'>
                <div className='benefit-info'>
                    <div className='benefit-info-header'>
                        <h1>Leverage The Internet For Your Business</h1>
                        <div className='underline_1'></div>
                    </div>
                    <div className='benefit-image-mobile'>
                        <img src={image} alt='internet illustration' />
                    </div>
                    <div className='benefit-info-paragraph'>
                        <p>Having an online presence on the internet ( via website ) is a great way to reach out to people and let them know more about your business and what you have to offer.</p>
                    </div>
                </div>
                <div className='benefit-image'>
                    <img src={image} alt='internet illustration' />
                </div>
            </div>
        )
    }
}

export default Benefit_1