import React from 'react'
import { Style } from './style'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <Style>
        <section className='hero-section'>
          <div className='container'>
            <div className="row pb-4 pt-2 align-items-center">
              <div className="col-lg-7 col-sm-7 col-12">
                <div className="hero_content">
                  <h1 className="page_title">Never Pay For Magento Tech Support</h1>
                  <span>Get a Host Who dose that for you !!</span>
                  <div className="hero_btn d-flex pt-3 pb-lg-0 pb-5">
                    <Link to='/' className="fillBtn "> Get Started Today!</Link>
                    <Link to='/' className="borderedBtn "> Ask Question</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-5 col-12 order-1">
                <div className='vedio-sec'>
                  <video
                    src="./assets/vdo/vdo.mp4"
                    controls
                    muted
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop
                    width={420}
                    className='w-100'
                  > </video>

                </div>
              </div>
            </div>
            <div className="text-26 text-center pt-1 pb-1">Over 1000+ Happy Customers World Wide</div>
            <div className="row pt-4 client  align-items-center" >
              <div className="col">
                <img src="./assets/image/icon/nginx.png" className="img-fluid" alt="nginx" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/RK_FLATIMAGE16.svg" className="img-fluid" alt="varnish" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/pngegg.png" className="img-fluid" alt="bronxton" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/cloudfare.webp" className="img-fluid" alt="cloude-fare" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/elasticsearch.svg" className="img-fluid" alt="elasticsearch" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/php.png" className="img-fluid" alt="php" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/new-relic.png" className="img-fluid" alt="new-relic.png" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/phpfpm.png" className="img-fluid m-0" alt="phpfpm" />
              </div>
              <div className="col">
                <img src="./assets/image/icon/RK_FLATIMAGE14.svg" className="img-fluid" alt="radis" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-img'>
            <div className='container'>
              <div className="row pt-4 pb-4">
                <div className="col-lg-6 col-sm-6 col-12 w-50">
                  <div className='notic text-white'>
                    <div className='text-26'>Get Managed Magento 2 Hosting Today!</div>
                    <h4>Starting at 99 €</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12 pt-1">
                  <Link to='/' className="borderedBtn WhiteBtn float-end"> Explore Hosting Plans & Pricing</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>Magento and AWS Cloud Experts</h2>
              <p className='pt-4'>We offer highly reliable expertise of more than 12 years in Cloud Hosting service for Magento.
                With our service, <br /> you get a flexible, blazing fast and, secure solution.</p>
            </div>
            <div className="row text-center pt-5 pb-3">
              <div className="col-lg-3 col-sm-3 col-12">
                <div className='card_detail'>
                  <img src="./assets/image/RK_ICON06.svg" className='w-32 pb-4' alt="Performance" />
                  <h4>Magento 2 Support</h4>
                  <p className='p-3'>The MGT High-Performance Stack provides page load times under 0.3 sec.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-12">
                <div className='card_detail'>
                  <img src="./assets/image/RK_ICON09.svg" className='w-25 pb-4' alt="Security" />
                  <h4>Cloud Hosting & Security</h4>
                  <p className='p-3'>For high security, we offer VPN, DDoS attack protection, the AWS WAF web application firewall.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-12">
                <div className='card_detail'>
                  <img src="./assets/image/RK_ICON07.svg" className='w-32 pb-3' alt="Cost-Efficient" />
                  <h4>Cost-Efficient</h4>
                  <p className='p-3'>AWS offers a pay-as-you-go pricing model. We analyze your infrastructure cost and optimize them.</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-12">
                <div className='card_detail'>
                  <img src="./assets/image/RK_ICON08.svg" className='w-50 pb-3' alt="Flexible" />
                  <h4>Magento 3rd Party Support</h4>
                  <p className='p-3'>With AWS, you stay flexible. Based on your demands, we scale up, down, or change resources.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>Why choose RiseCloud ?</h2>
            </div>
            <div className="row  pt-5 pb-5">
              <div className="col-12 ">
                <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Magento Support</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Security</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Performance</button>
                  </li>
                  
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className='row'>
                      <div className="col-lg-4">
                        <img src="./assets/image/RK_01.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>Magento Support</h4>
                        {/* <p>MGT-Commerce stands for high performance with a page load time under 0.3 seconds. Studies show that even 100 milliseconds of latency can cost you 1% in sales.</p>
                        <p>Faster page load times result in higher site ranking and conversions.</p> */}

                        <ul>
                          <li>Magento 2 Support</li>
                          <li>Magento 2 third party Extension Support </li>
                          <li>Over 50+ free extension to choose free and </li>
                          <li>Backed by Adobe Certified Engineers </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className='row'>
                      <div className="col-lg-4">
                        <img src="./assets/image/RK_03.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>Security</h4>
                        <p>We help you keep your magento store upto date ,auto update options available after 15 days of stable release .</p>
                        <p>We work with cloudflare to save hosting cost and a better layer of security .</p>

                        <h6>Features:</h6>
                        <ul>
                          <li>DDoS protection</li>
                          <li>SSL Encryption</li>
                          <li>VPN</li>
                          <li>SSL Certification</li>
                          <li> PCI certified</li>
                          <li>Daily Backups </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className='row'>
                    <div className="col-lg-4">
                      <img src="./assets/image/RK_01.svg" alt="performance" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                      <h4>Performance</h4>
                      {/* <p>To run a Magento, you need experts who know everything. We help fast to resolve technical problems. We are experts in online store applications and Infrastructure.
                        With more than +12 years of experience, we can help fast with whatever you need.</p> */}

                      <ul>
                          <li> RiseCloud offer high performance with a page load time under  0.3 Second</li>
                        <li> Faster page load time result higher sales conversation and SEO Rating </li>
                        <li>lightweight components</li>
                        <li>Varnish cache and redis DataBase caching</li>
                        <li>Latest hardware and innovations</li>
                        <li>Globle CDN + Cloudfare</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>Our Customers Love Us!</h2>
              <h6 className='pt-4'>Rated of 4.8/5 on Google My Business</h6>
              <div className=' text-center'> <h6> Excellent <img src="./assets/image/review.svg" alt="review" className='mx-1' /></h6></div>
            </div>
            <div className="row text-center pt-5 pb-3">
              <div className="col-lg-4 col-sm-4 col-12">
                <div className='review_detail p-3'>
                  <img src="./assets/image/quat.svg" className='img-fluid pb-4 w-25' alt="Performance" />
                  <p >"These guys are amazing and of great value, considering what you get. I've been using the web hosting plans from them for 6 years now to manage my Magento website, and it's one of the best decisions I've made. They are very professional, and everything just works smoothly.</p>
                  <p className='pb-3'>Morning or night, they always respond to requests quickly. It's like having your own IT department at hand."</p>
                  <h6 className='fw-bold'>- Arjuna M.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-12">
                <div className='review_detail p-3'>
                  <img src="./assets/image/quat.svg" className='pb-4 img-fluid w-25' alt="Security" />
                  <p>"I have been using MGT it has been a really good experience. They are very efficient and very capable.</p>
                  <p>They always make sure that the job is done properly.</p>
                  <p className='pb-3'>Even though we are located in another country, communication has not been a problem, and we always get a response from their support team."</p>
                  <h6 className='fw-bold'>- Abhay K.</h6>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-12">
                <div className='review_detail p-3'>
                  <img src="./assets/image/quat.svg" className='pb-4 img-fluid w-25' alt="Cost-Efficient" />
                  <p>"A Hosting company you can trust. A professional and highly reliable company.</p>
                  <p className='pb-3'>They realized what is important for online shopping hosting solution: performance, security features, simplicity: everything is presented in a clear, easy-to-use design, and I can quickly get the thing I want done without any fuzz. The support people are also quick to respond whenever I have a question."</p>
                  <h6 className='fw-bold'>- Taylor H.</h6>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className='bg-gray'>
            <div className='container p-2 pb-3'>
              <div className="row pt-5 pb-5">
                <div className="col-lg-8 col-sm-8 col-12 ">
                  <div className='notic'>
                    <h4>Ecommerce hosting</h4>
                    <div className='text-26'>Enjoy fast, secure & stable Magento hosting. Start right now!</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-12 pt-1">
                  <Link to='/' className="fillBtn  float-end">GET STARTED</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>Benefits of Managed Hosting</h2>
            </div>
            <div className="row  pt-5 pb-5">
              <div className="col-12 ">
                <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Managed-tab" data-bs-toggle="pill" data-bs-target="#pills-Managed" type="button" role="tab" aria-controls="pills-Managed" aria-selected="true">Fully Managed</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Support-tab" data-bs-toggle="pill" data-bs-target="#pills-Support" type="button" role="tab" aria-controls="pills-Support" aria-selected="false">Expert Support</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Migration-tab" data-bs-toggle="pill" data-bs-target="#pills-Migration" type="button" role="tab" aria-controls="pills-Migration" aria-selected="false">Free Migration</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-backups-tab" data-bs-toggle="pill" data-bs-target="#pills-backups" type="button" role="tab" aria-controls="pills-backups" aria-selected="false">Managed backups</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Service-tab" data-bs-toggle="pill" data-bs-target="#pills-Service" type="button" role="tab" aria-controls="pills-Service" aria-selected="false">Service Focused</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-Managed" role="tabpanel" aria-labelledby="pills-Managed-tab">
                    <div className='row'>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>Fully Managed Magento Hosting</h4>
                        <p>Managed means that we take care of it. Our services come as a turnkey solution. <br />
                          You don´t need to worry about any technical detail. We have optimized all details, which makes complexity easy.
                        </p>
                        <p>If you have a special requirement, we customize your setup to your specifications.</p>
                        <ul>
                          <li>  Turnkey solution</li>
                          <li>Individual settings</li>
                          <li>Fully Managed Service</li>
                          <li>Proactive system support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Support" role="tabpanel" aria-labelledby="pills-Support-tab">
                    <div className='row'>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>Expert Support</h4>
                        <p>Support means we are there for you. 24/7 with a response in under 15 minutes. In case you have an issue, we analyze the problem and help you to solve it.</p>
                        <p>We are experts in the Magento application and cloud at the same time. Whatever it is, there is nothing we can not solve.</p>

                        <ul>
                          <li> Easy control panel</li>
                          <li>Efficient ticketing system</li>
                          <li>Fast issue resolve</li>
                          <li>24/7/365 Support</li>
                          <li> Response time under 15 minutes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Migration" role="tabpanel" aria-labelledby="pills-Migration-tab"><div className='row'>
                    <div className="col-lg-4">
                      <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                      <h4>Free Managed Migration</h4>
                      <p>We offer a free and fully managed migration. We will do all setups and configurations. It does not matter if your shopping cart is running on a vps host offers, dedicated servers, a2 hosting, dedicated hosting; we will migrate.</p>

                      <ul>
                        <li> Fully Managed Migration</li>
                        <li>100% Free</li>
                        <li>Migration Preview</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="pills-backups" role="tabpanel" aria-labelledby="pills-backups-tab"><div className='row'>
                    <div className="col-lg-4">
                      <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                      <h4>Managed backups and restores</h4>
                      <p>We understand the risk of data loss. To protect our customers against loss of data, we are offering Managed Backups.</p>
                      <p>Our service comes with hourly backups. The backup includes all disks and databases and stored in amazon s3. In our Multi-Server environments with (RDS), we can roll back a DB instance with 5 mins steps.</p>
                      <p>restoring singles files, directories, or complete databases, depending on what you need.</p>

                      <ul>
                        <li>  Hourly backups</li>
                        <li>Restore options</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Service" role="tabpanel" aria-labelledby="pills-Service-tab"><div className='row'>
                    <div className="col-lg-4">
                      <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                      <h4>Service Focused</h4>
                      <p>We are living to make our customers happy. Our solutions are for small businesses to large corporations. Other than classic hoster, we do not sell servers.</p>
                      <p>That means we combine the best cloud with our managed service. As a benefit, you save money on monthly infrastructure, and you stay entirely flexible.</p>

                      <ul>
                        <li>  No infrastructure sell</li>
                        <li> Full focus on service</li>
                        <li> Solutions for all business sizes</li>
                        <li>  Solutions for all business sizes</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>MGT Technology</h2>
              <p>Solutions that match your Magento store requirements</p>
            </div>
            <div className="row  pt-5 pb-5">
              <div className="col-12 ">
                <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Stack-tab" data-bs-toggle="pill" data-bs-target="#pills-Stack" type="button" role="tab" aria-controls="pills-Stack" aria-selected="true">High-Performance Stack</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-CloudPanel-tab" data-bs-toggle="pill" data-bs-target="#pills-CloudPanel" type="button" role="tab" aria-controls="pills-CloudPanel" aria-selected="false">MGT CloudPanel</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Add-Ons-tab" data-bs-toggle="pill" data-bs-target="#pills-Add-Ons" type="button" role="tab" aria-controls="pills-Add-Ons" aria-selected="false">MGT Add-Ons</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Development-tab" data-bs-toggle="pill" data-bs-target="#pills-Development" type="button" role="tab" aria-controls="pills-Development" aria-selected="false">MGT Development Tools</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-Stack" role="tabpanel" aria-labelledby="pills-Stack-tab">
                    <div className='row text-center'>

                      <div className='text-26  pb-4'> <span>MGT High-Performance Stack</span>
                        <p>Modern and lightweight components</p>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/RK_FLATIMAGE13.svg" className='w-50 pb-4' alt="Performance" />
                          <h4>AWS Graviton2</h4>
                          <p className='p-3'>AWS Graviton2 is a next-generation processor custom-built by AWS that delivers up to 40% higher performance at a 20% lower cost.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/nginx.png" className='w-25 pb-4' alt="Performance" />
                          <h4>NGINX</h4>
                          <p className='p-3'>NGINX is a high-performance web server that enhances the performance and security of your applications with a minimal memory footprint.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/RK_FLATIMAGE16.svg" className='w-25 pb-4' alt="Performance" />
                          <h4>Varnish Cache</h4>
                          <p className='p-3'>Varnish Cache is a web accelerator that speeds up your web performance while also reducing response time and network bandwidth consumption.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/mysql.svg" className='w-32 pb-4' alt="Performance" />
                          <h4>MySQL</h4>
                          <p className='p-3'>MySQL version with an xtraDB storage engine delivers up to 270% faster, stable and consistent performance.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/Debian.png" className='w-25 pb-4' alt="Performance" />
                          <h4>Debian</h4>
                          <p className='p-3'>Debian is a highly trusted, secure, and stable Linux distribution that is used by Magento developers and system engineers.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/php.jpg" className='w-32 pb-4' alt="Performance" />
                          <h4>PHP</h4>
                          <p className='p-3'>Multiple PHP versions for running the latest Magento version. PHP with FastCGI Process Manager (FPM) allows websites to handle high loads.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/RK_FLATIMAGE14.svg" className='w-32 pb-4' alt="Performance" />
                          <h4>Redis</h4>
                          <p className='p-3'>Redis is an advanced data structure store used as a database, cache, and message broker.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/elasticsearch.svg" className='w-32 pb-4' alt="elasticsearch" />
                          <h4>Elasticsearch</h4>
                          <p className='p-3'>Elasticsearch is a distributed RESTful search engine built for the cloud. It centrally stores your data to deliver lightning-fast search, fine‑tuned relevancy, and robust analytics.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col-12">
                        <div className='card_detail'>
                          <img src="./assets/image/icon/images.png" className='w-32 pb-4' alt="MGT CloudPanel" />
                          <h4>MGT CloudPanel</h4>
                          <p className='p-3'>MGT CloudPanel is an easy-to-use control panel built to deliver maximum performance. CloudPanel supports the latest technologies, like NGINX, PHP, and MySQL.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-CloudPanel" role="tabpanel" aria-labelledby="pills-CloudPanel-tab">
                    <div className='row text-center justify-content-center'>
                      <div className='text-26 pb-4'> <span>MGT CloudPanel - Clean and Easy to Use Control Panel</span>
                        <p className='pt-2'>MGT CloudPanel is an easy-to-use control panel. You create an aws account and manage it with the panel <br /> instead of the management console.</p>
                      </div>
                      <div className="col-lg-5 col-sm-5 offset-sm-1">
                        <div className='feature-list'>
                          <ul>
                            <li>Free SSL certificates</li>
                            <li>NGINX Support</li>
                            <li>AWS cloud</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4 col">
                        <div className='feature-list'>
                          <ul>
                            <li>Easy to use</li>
                            <li>Multiple PHP versions</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-10 col-sm-10 col pt-3">
                        <img src="./assets/image/Risecloudpanel.svg" alt="Risecloudpanel" className="img-fluid pb-4" />
                        <Link to='/' className="fillBtn text-center w-32"> TRY LIVE DEMO</Link>

                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Add-Ons" role="tabpanel" aria-labelledby="pills-Add-Ons-tab">
                    <div className='row  justyfy-content-center pb-5'>
                      <div className='text-26 text-center pb-4'> <span>MGT Add-Ons</span>
                        <p className='pt-2'>Magento add-ons to improve your Magento site</p>
                      </div>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>MGT WAF - Web Application Firewall</h4>
                        <p>Protect your ecommerce platform from common web exploits. Web Application Firewall uses machine learning and filters the traffic before it reaches your server.</p>
                        <p>MGT-WAF protects your Magento shop against common web exploits and attacks.</p>

                        <ul className='pt-2'>
                          <li> DDoS</li>
                          <li> SQL-Injection</li>
                          <li> Cross-Site Scripting</li>
                          <li> Linux Attacks</li>
                          <li>Easily block IPs, countries, bots</li>
                          <li>Automatic WAF updates</li>
                        </ul>
                        <div className="btn-tab pt-2">
                          <Link to='/' className="borderedBtn text-center w-25"> lern more</Link>
                        </div>
                      </div>
                    </div>
                    <div className='row pb-5 pt-5'>
                      <div className="col-lg-8">
                        <h4>MGT Varnish Cache</h4>
                        <p>Get caching for fast 250x Faster Magento delivery. MGT Varnish Cache is a Magento extension that boosts your Magento performance. The Cache reduces the server cost by up to 80%!</p>

                        <ul className='pt-2'>
                          <li> 250x Faster Magento</li>
                          <li>80% savings server costs</li>
                          <li> Cache Crawler Queue</li>
                          <li> Intelligent Cache Warmer</li>
                          <li>Single Store Purge</li>
                          <li>Debug Mode</li>
                        </ul>
                        <div className="btn-tab pt-2">
                          <Link to='/' className="borderedBtn text-center w-25"> lern more</Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                    </div>
                    <div className='row pb-5 pt-5'>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>MGT Cloud Log</h4>
                        <p>MGT Cloud Log is a fully managed Real-time log solution.</p>
                        <p>It keeps Magento, NGINX, PHP-FPM, MySQL, and System Logs in one central interface.</p>

                        <ul className='pt-2'>
                          <li> Central log application</li>
                          <li> Real-time</li>
                          <li> Quickly search, filter, and analyze</li>
                          <li> HIPAA, PCI, GDPR Compliant</li>
                        </ul>
                        <div className="btn-tab pt-2">
                          <Link to='/' className="borderedBtn text-center w-25"> lern more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Development" role="tabpanel" aria-labelledby="pills-Development-tab">
                    <div className='row pb-5'>
                      <div className='text-26 text-center pb-4'> <span>MGT Development Tools</span>
                        <p className='pt-2'>We came from a Magento developing background. We noticed that there was a gap <br />
                          in good tools for Magento development. Therefore we have created our tools. <br />
                          Our development tools are made for the Magento platform.</p>
                      </div>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                      <div className="col-lg-8">
                        <h4>MGT Developer Toolbar</h4>
                        <p>A Professional Developer Toolbar for Magento.</p>
                        <p>The MGT Developer Toolbar shows developers all important information. You see the Magento open source Version, Cache Storage, PHP, and MYSQL settings.</p>
                        <p>The Toolbar provides a profiler, database queries viewer, nested block rendering, and other features.</p>

                        <div className="btn-tab pt-5">
                          <Link to='/' className="borderedBtn text-center w-25"> lern more</Link>
                        </div>
                      </div>
                    </div>
                    <div className='row pt-5'>

                      <div className="col-lg-8">
                        <h4>MGT Development Environment</h4>
                        <p>As a developer, you need a local environment that is identical to your production server. You can run the Docker-based solution on mostly all systems. You get a High-Performance Stack with exactly all components we are using in our live environments.</p>
                        <p>It is 100% free. The installation takes less than 60 seconds.</p>

                        <div className="btn-tab pt-5">
                          <Link to='/' className="borderedBtn text-center w-25"> lern more</Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img src="./assets/image/performance.svg" alt="performance" className="img-fluid" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className='text-center sub_section'>
              <h2>Why choose our service ?</h2>
            </div>
            <div className="row  pt-5 ">
              <div className="col-12 ">
                <div className='mr-auto'>
                  <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-Global-tab" data-bs-toggle="pill" data-bs-target="#pills-Global" type="button" role="tab" aria-controls="pills-Global" aria-selected="true">Global </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-Flexible-tab" data-bs-toggle="pill" data-bs-target="#pills-Flexible" type="button" role="tab" aria-controls="pills-Flexible" aria-selected="false">Flexible</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-Efficient-tab" data-bs-toggle="pill" data-bs-target="#pills-Efficient" type="button" role="tab" aria-controls="pills-Efficient" aria-selected="false">Cost-Efficient</button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-Global" role="tabpanel" aria-labelledby="pills-Global-tab">
                    <div className='row'>
                      <div className='text-26 text-center pb-4'> <span>AWS Global Cloud Infrastructure</span>
                        <p className='pt-2'>Amazon Web Services (AWS) is the leading Infrastructure as a Service provider.
                          You can choose <br /> between 25 geographic regions.</p>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <h5>Easy to Scale</h5>
                          <p>AWS global infrastructure allows easy scalability.</p>
                          <h5>Reliability</h5>
                          <p>AWS offers a 99.99% SLA. We never noticed in the past 12 years an important issue.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <h5>High Performance</h5>
                          <p>The highest performance is possible by always up-to-date hardware.</p>
                          <h5>Scalability</h5>
                          <p>Scaling up and down is easy with AWS. With our Auto Scaling solution, you can scale horizontally in seconds!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Flexible" role="tabpanel" aria-labelledby="pills-Flexible-tab">
                    <div className='row'>
                      <div className='text-26 text-center pb-4'> <span>High Flexibility</span>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <p>AWS has a flexible cloud infrastructure that is used by millions of global customers.</p>
                          <p>AWS offers high flexibility that allows you to select a data center closest to your target customers.</p>
                          <p>You can choose how and where to run the workloads and pick from the many AWS regions and availability zones.</p>
                          <p>With AWS, you can deploy hundreds of servers within minutes. Quickly spin up resources based on your requirements.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <p>There is no need to over-provision resources. With AWS, you can instantly scale up and down on your needs.</p>
                          <p>The AWS infrastructure allows you to meet user demands quickly. You get easy access to compute and storage resources when you need them.</p>
                          <p>Select the software and languages you require. The virtual environment lets you access Magento easily.</p>
                          <p>AWS eases cloud migration and helps develop new solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-Efficient" role="tabpanel" aria-labelledby="pills-Efficient-tab">
                    <div className='row'>
                      <div className='text-26 text-center pb-4'> <span>Cost Efficient</span>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <p>AWS gives you control over your cloud cost spend. You can manage costs and still get the performance you require.</p>
                          <p>AWS pay-as-you-go model implies you only pay for services you need at the time.</p>
                          <p>There are no long-term payment contracts.</p>
                          <p>Get access to more than 160 cloud services without any licensing fees. You only pay for the resources you consume.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 p-5">
                        <div className="table-para">
                          <p>Once you stop using the services, there are no additional costs.</p>
                          <p>The AWS pricing plans also come with reserve and saving models. These plans offer special discounts on specific services.</p>
                          <p>AWS comes with no fixed costs. Your Magento store needs flexible instances which can stop with a click.</p>
                          <p>Get clear visibility and cost transparency with AWS. You can forecast your cloud spend and optimize it on an hourly basis.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <img src="./assets/image/world.svg" alt="world" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >
          <div className='bg-gray border-bottom'>
            <div className='container p-5'>
              <div className="row pt-5 pb-5 justify-content-center">
                <div className="col-10">
                  <div className='notic text-center'>
                    <div className='text-26'>Drive Your Business Forward with Managed Magento Web Hosting</div>
                  </div>
                  <div className="btn-tab text-center pt-5">
                    <Link to='/' className="fillBtn text-center w-25"> Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row">
              <div className="col pb-4 pt-3">
                <div className="pb-3"><h4>Frequently Asked Questions</h4></div>
                <h5>What is Managed Magento Hosting?</h5>
                <p>Managed Magento hosting is a hosting plan and dedicated server stack that offers solutions for your Magento requirements. It has all the updated essential services that Magento DevDocs recommend.</p>
                <h5>Is Magento Hosting Cloud-Based?</h5>
                <p>Yes, the Magento Cloud uses AWS virtualization. If you opt for Adobe Commerce, you can choose any data center to host your servers.</p>
                <h5>Why Choose MGT-COMMERCE for Magento 2 Hosting?</h5>
                <p>MGT-COMMERCE is your perfect managed Magento hosting partner as it delivers a wide range of services, including test environment, Magento development tools, PCI compliant hosting, autoscaling, and unique Magento extensions. Our +12 years of experience combined with 24/7/365 technical support, flexible infrastructure on AWS, and highly secure solutions gives optimal performance to customers around the globe.</p>
              </div>
            </div>
          </div>
        </section>


      </Style>
    </>
  )
}

export default Index