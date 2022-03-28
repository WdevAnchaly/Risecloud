import React from 'react'
import Style from './headercss'
import { Navbar, Container, Nav, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <Style>
            <header className='header'>
                <Navbar className='bg-drk' variant="dark" fixed="top" expand="lg">
                {/* fixed="top" */}
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src="./assets/image/risecloud.svg"
                                height="55"
                                className="d-inline-block"
                                alt="RiseCloud"
                            /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="#home">Cloud Hosting </Nav.Link>
                                <Nav.Link href="#link">Tools </Nav.Link> */}
                                <Dropdown className="cm-e-menu">
                                    <ul>
                                        <li className="topmenu">
                                            <a>Cloud Hosting</a>
                                            <ul className="submenu">
                                                <li className='small-text'>Managed Hosting </li>
                                                <li>
                                                    <a>Overview </a>
                                                    <ul className="submenu">
                                                        <li><a>Overview</a></li>
                                                        <li><a>Why MGT-COMMERCE</a></li>
                                                        <li><a>Amazon Web Services</a></li>
                                                        <li><a>High Performance Stack</a></li>
                                                        <li><a>Managed Services</a></li>
                                                        <li><a>Managed Migration</a></li>
                                                        <li><a>FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li className="divider"></li>
                                                <li className='small-text'>Managed Hosting Plans</li>
                                                <li><a>Single Server</a></li>
                                                <li><a>Multi Server</a></li>
                                                <li><a>Auto Scaling</a></li>
                                                <li className="divider"></li>
                                                <li className='small-text'>MGT Add-Ons </li>
                                                <li>
                                                    <a>MGT Varnish Cache  </a>
                                                    <ul className="submenu">
                                                        <li><a>Overview</a></li>
                                                        <li><a>Pricing</a></li>
                                                        <li><a>For Magento 2</a></li>
                                                        <li><a>For Magento 1</a></li>
                                                        <li><a>Varnish Cluster</a></li>
                                                    </ul>
                                                </li>
                                                <li><a>MGT Code Deploy </a>
                                                    <ul className="submenu">
                                                        <li><Link to="/">Overview</Link></li>
                                                        <li><Link to="/">Pricing</Link></li>
                                                        <li><Link to="/">Features</Link></li>
                                                        <li><Link to="/">How It Works</Link></li>
                                                    </ul>
                                                </li>
                                                <li><a>MGT Cloud Log </a>
                                                    <ul className="submenu">
                                                        <li><Link to="/">Overview</Link></li>
                                                        <li><Link to="/">Pricing</Link></li>
                                                        <li><Link to="/">Live Demo</Link></li>
                                                    </ul>
                                                </li>
                                                <li><a>MGT WAF </a>
                                                    <ul className="submenu">
                                                        <li><Link to="/">Overview</Link></li>
                                                        <li><Link to="/">Magento 2 Module</Link></li>
                                                        <li><Link to="/">Pricing</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="topmenu"><a>Tools</a>
                                        <ul className="submenu">
                                        <li className='small-text'>Magento Modules </li>
                                        <li>
                                            <a>Magento 2   </a>
                                            <ul className="submenu">
                                                <li><a>Overview</a></li>
                                                <li><a>Pricing</a></li>
                                                <li><a>For Magento 2</a></li>
                                                <li><a>For Magento 1</a></li>
                                                <li><a>Varnish Cluster</a></li>
                                            </ul>
                                        </li>
                                        </ul>
                                        </li>

                                        <li className="topmenu"><a>Account</a>
                                        <ul className="submenu">
                                        <li className='small-text'>Free </li>
                                        <li>
                                            <a>Magento 2 </a>
                                            <ul className="submenu">
                                                <li><a>MGT Developer Toolbar</a></li>
                                                <li><a>Pricing</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Magento 1</a>
                                            <ul className="submenu">
                                            <li className='small-text'>Free </li>
                                                <li><a>MGT Developer Toolbar</a></li>
                                                <li><a>CloudFront Invalidation</a></li>
                                            </ul>
                                        </li>
                                        </ul>
                                        </li>
                                        
                                        <li className="topmenu">
                                            <a>About </a>
                                            <ul className="submenu">
                                                <li>
                                                    <a>Overview </a>
                                                    <ul className="submenu">
                                                        <li><a>larger</a></li>
                                                        <li><a>smaller</a></li>
                                                        <li className="divider"></li>
                                                        <li><a>default</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>indentation</a>
                                                    <ul className="submenu">
                                                        <li><a>+1 space</a></li>
                                                        <li><a>-1 space</a></li>
                                                        <li className="divider"></li>
                                                        <li><a>default</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="topmenu"><Link to='/contact'>Contact</Link></li>

                                    </ul>
                                </Dropdown>

                            </Nav>
                            <Nav>
                                <Link to="/" className='header-btn'>Cloud Hosting </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </Style>
    )
}

export default header