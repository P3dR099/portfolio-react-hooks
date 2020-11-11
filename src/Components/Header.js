import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import ParticlesBg from 'particles-bg'
import { Transition } from "react-transition-group";

class Header extends Component {
    render() {
        let name, occupation, description, city, networks

        let classTransition = 'responsive-headline box box'

        if (this.props.data) {
            name = this.props.data.name;
            occupation = this.props.data.occupation;
            description = this.props.data.description;
            city = this.props.data.address.city;
            networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <React.Fragment>
                <ParticlesBg num={75} color='#FFFFFF' type="cobweb" bg={true} />

                <header id="home">
                    <Nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                        <ListGroup as="ul" horizontal id="nav">
                            <ListGroup.Item as="li" className="current" active><a className="smoothscroll" href="#home">Home</a></ListGroup.Item>
                            <ListGroup.Item as="li" active><a className="smoothscroll" href="#about">About</a></ListGroup.Item>
                            <ListGroup.Item as="li" active><a className="smoothscroll" href="#resume">Resume</a></ListGroup.Item>
                            <ListGroup.Item as="li" active><a className="smoothscroll" href="#portfolio">Works</a></ListGroup.Item>
                            <ListGroup.Item as="li" active><a className="smoothscroll" href="#testimonials">Testimonials</a></ListGroup.Item>
                            <ListGroup.Item as="li" active><a className="smoothscroll" href="#contact">Contact</a></ListGroup.Item>
                        </ListGroup>
                    </Nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <Transition timeout={500} in={true} appear>
                                {status => (
                                    <React.Fragment>
                                        <h1 className={` ${classTransition}-${status}`}>Soy {name}.</h1>
                                        <h3 className={` ${classTransition}-${status}`} ><span>{occupation}</span> viviendo en {city} . {description}.</h3>
                                        <hr />
                                        <ul className={`social ${classTransition}-${status}`} >
                                            {networks}
                                        </ul>
                                    </React.Fragment>

                                )}
                            </Transition>

                        </div >
                    </div >

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header >
            </React.Fragment >

        );
    }
}

export default Header;
