import React, {Component} from 'react'
import image from '../../../Media/illustrations/team_work.svg'
import '../Benefit_1/Benefit.css'

class Benefit_2 extends Component {
    render() {
        return (
            <div className='benefit'>
                <div className='benefit-image'>
                    <img src={image} alt='internet illustration' />
                </div>
                <div className='benefit-info bf2'>
                    <div className='benefit-info-header bf2'>
                        <h1>How We Can Help</h1>
                        <div className='underline_1 bf2'></div>
                    </div>
                    <div className='benefit-image-mobile bf2'>
                        <img src={image} alt='internet illustration' />
                    </div>
                    <div className='benefit-info-paragraph bf2'>
                        <p>By providing the services needed to help develop and manage an online presence for your business.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefit_2