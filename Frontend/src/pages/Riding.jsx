import React from 'react'
import '../App.css'
import  '../Style.css'
import {Link} from 'react-router-dom'
const Riding = () => {
  return (
    <div className='riding'>
        <Link to='/home' className="home-icon">
            <i className="ri-home-8-line"></i>
        </Link>
        <div className="riding-panel1">
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"/>
        </div>
        <div className="riding-panel2">
         <div className="captain-details">
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png" />
            <div style={{textAlign:'right'}}>
              <h2>Saunak</h2>
              <h4>MP04AB1233</h4>
              <p>Maruti Suzuki Swift</p>
            </div>
          </div>
          <div className="confirm-img">
            <div className="before-ride-info">
                <div className="ride-info-row">
                    <i className="ri-square-fill" style={{ fontSize: '16px' }}></i>
                    <div className='address'>
                        <h3>562/11-A</h3>
                        <p>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className="ride-info-row">
                    <i className="ri-currency-line" style={{ fontSize: '16px' }}></i>
                    <div className='address'>
                        <h3>₹193</h3>
                        <p>Cash</p>
                    </div>
                </div>
            </div>
          </div>
            <button className='confirm-button'>Make a payment</button>
        </div>
    </div>
  )
}

export default Riding