import React from 'react'
import { Style } from './style'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <Style>
            <section className='hero-section'>
                <div className='container'>
                    <div className="row g-5 pt-4 pb-5">
                        <div className="col-lg-8 col-sm-8 col">
                            <div className='sub_section pb-5'>
                                <h4>GET IN TOUCH</h4>
                            </div>
                            <form>
                                <div className=" row mb-4 mt-2">
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <input type="text" className="form-control" placeholder='Your Name' id="Name" />
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <input type="text" className="form-control" placeholder='Subject' id="subject" />
                                    </div>
                                </div>
                                <div className=" row mb-4 mt-2">
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <input type="email" className="form-control" placeholder='Your Email' id="email" />
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12">
                                        <select className="form-select form-control" aria-label=".form-select-lg example">
                                            <option defaultValue>I am Looking for:</option>
                                            <option value="General Enquiry ">General Enquiry</option>
                                            <option value="Hire Dedicated Developer">Hire Dedicated Developer</option>
                                            <option value="Website / Store development">Website / Store development</option>
                                            <option value="techmaintain">Technical Maintenance</option>
                                            <option value="Technical Maintenance">SEO / Marketing </option>
                                            <option value="other">Other </option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" pb-5 mt-2">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows={5} cols={5}></textarea>
                                </div>
                                <button type="submit" className="fillBtn mt-4 float-end mx-0 w-32">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-4 col-sm-4 col">
                            <div className='sub_section pb-5'>
                                <h4>CONTACT US</h4>
                            </div>

                            <div className='contact'>
                            <p><i className="fa-solid mx-2 fa-location-dot"></i> C Block Indira Nagar, Lucknow</p>
                            <p><i className="fa-solid mx-2 fa-earth-africa"></i> <Link to='http://risecommerce.com/'>http://risecommerce.com/</Link></p>
                            <p><i className="fa-solid mx-2 fa-phone-volume"></i> +91 983-937-4777</p>
                            <p><i className="fa-solid mx-2 fa-envelope-open-text"></i> info@risecommerce.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Style>
    )
}

export default Contact