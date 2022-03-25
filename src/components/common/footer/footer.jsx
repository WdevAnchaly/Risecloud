import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from './footercss'

const Footer = () => {
  return (
    <>
      <Style>
        <div className="footer">
          <div className='container'>
            <div className='row pt-4 pb-3'>
              <div className='col-lg-3 col-sm-3 col-12'>
                <h5>Company</h5>
                <ul>
                  <li> <Link to="/">Why MGT-Commerce</Link></li>
                  <li> <Link to="/">Partners</Link></li>
                  <li> <Link to="/">Docs</Link></li>
                  <li> <Link to="/">Blog</Link></li>
                  <li> <Link to="/">Tutorials</Link></li>
                  <li> <Link to="/">Contact</Link></li>
                </ul>
              </div>
              <div className='col-lg-3 col-sm-3 col-12'>
                <h5>Cloud Hosting</h5>
                <ul>
                  <li> <Link to="/">Single Server</Link></li>
                  <li> <Link to="/">Multi Server</Link></li>
                  <li> <Link to="/">Auto Scaling</Link></li>
                  <li> <Link to="/">MGT WAF</Link></li>
                  <li> <Link to="/">MGT Code Deploy</Link></li>
                  <li> <Link to="/">MGT Cloud Log</Link></li>
                </ul>
              </div>
              <div className='col-lg-3 col-sm-3 col-12'>
                <h5>Development Tools</h5>
                <ul>
                  <li> <Link to="/">MGT Development Environment</Link></li>
                  <li> <Link to="/">Magento 1 Developer Toolbar</Link></li>
                  <li> <Link to="/">Magento 2 Developer Toolbar</Link></li>
                  <li> <Link to="/">MGT Code Deploy</Link></li>
                </ul>
              </div>
              <div className='col-lg-3 col-sm-3 col-12'>
                <h5>Legal</h5>
                <ul>
                  <li> <Link to="/">Imprint</Link></li>
                  <li> <Link to="/">GDPR</Link></li>
                  <li> <Link to="/">Terms and Conditions</Link></li>
                  <li> <Link to="/">License Guide</Link></li>
                  <li> <Link to="/">Data Protection</Link></li>
                  <li> <Link to="/">Refund Policy</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6 col-12">
            <div className='text-center'>
              <div className="copyright">MGT-COMMERCE GmbH © 2011 - 2022 All Rights Reserved. <br />
                Magento is a trademark of Adobe Inc.</div>
                <img src="./assets/image/f_logo.png" alt="footer logo" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </Style>
    </>
  )
}

export default Footer