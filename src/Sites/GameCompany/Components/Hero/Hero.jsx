import React, {useRef} from 'react'
import './Hero.css'
import drpop_logo from '../../../../assets/drpop-logo.png'
import next_icon from '../../../../assets/next-icon.png'
import back_icon from '../../../../assets/back-icon.png'

const Hero = () => {
    const slider = useRef();
    let tx = 0;



  return (
    <div className='game__hero'>
{/* onClick={slideForward} */}
{/* onClick={slideBackward} */}
        <img src={next_icon} alt="" className='next-btn' />
        <img src={back_icon} alt="" className='back-btn' />

        <div className='cards'>

            <div className='cards-slide'>

                <div className='card card1'>
                    <div className='info'>
                        <img className='card1__logo' src={drpop_logo}/>

                        <h2 className='card1__title'>
                            Fantasy Auto Shooter
                        </h2>

                        <p className='card1__desc'>
                            Weave Through Fire and Fell Foe!
                        </p>

                        <button className='card1__button'>
                            Learn More
                        </button>
                    </div>

                </div>


                <div className='card card1'>
                    <div className='info'>
                        <img className='card1__logo' src={drpop_logo}/>

                        <h2 className='card1__title'>
                            Fantasy Auto Shooter
                        </h2>

                        <p className='card1__desc'>
                            Weave Through Fire and Fell Foe!
                        </p>

                        <button className='card1__button'>
                            Learn More
                        </button>
                    </div>

                </div>

            </div>
        </div>



        {/* <div className='slider'>
            <ul ref={slider}>
                <li>

                </li>

            </ul>
        </div> */}

    </div>
  )
}

export default Hero
