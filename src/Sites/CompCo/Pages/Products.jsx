import React from 'react'
import './Products.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'
import { CiCirclePlus } from "react-icons/ci";

const Products = () => {
  return (
    <div className='comp-products'>
      <CompNav/>
      {/* mac ipad iphone watch vision airpods */}
      <div className="products-main">
        <div className="iphone-container">
          <div className="title">
            <h2>Buy iPhone 15 Pro</h2>
            <div className="price-compare">
              <div className="price-item">
                <p className='apple'>Apple</p>
                <p>$1500</p>
              </div>
              <div className="price-item">
                <p className='compco'>Compco</p>
                <p>$1000</p>
              </div>
            </div>
            </div>

          <div className="gallery"></div>

          <div className="model">

            <h2>Model. <span>Which is best for you?</span></h2>

            <button className='model-button'>

              <div className="left">

                <h3>iPhone 15 Pro</h3>
                <p>6.1-inch display'</p>
              </div>

              <p className='right'>Contact us to learn about available financing options.</p>

            </button>

            <button className='model-button'>

              <div className="left">

                <h3>iPhone 15 Pro Max</h3>
                <p>6.7-inch display'</p>
              </div>

              <p className='right'>Contact us to learn about available financing options.</p>

            </button>


            <button className='help-button'>
              <div className="top">
                <h3>Need help choosing a model?</h3>
                <CiCirclePlus className='icon'/>
              </div>
              <p>Explore the differences in screen size and battery life.</p>
            </button>

          </div>
          <div className="finish"></div>
          <div className="storage"></div>
        </div>
      </div>
      <CompFooter/>
    </div>
  )
}

export default Products
