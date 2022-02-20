import React from 'react'
import headerImg from './images/header-img.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id="header" className='d-flex align-items-center'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column">
                <h1>Get Your Buisiness Online with <strong className='business_name'>DevCop</strong></h1>
                <h4 className='my-3'>We are a team of developers to develop your websites</h4>
                <div className="my-3"><Link className='btn btn-primary rounded-pill' to="/services">Get Started</Link></div>
              </div>
              <div className="col-md-6">
                <img src={headerImg} alt='Header Image' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home