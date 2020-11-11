import React from 'react';
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import ParticlesBg from 'particles-bg'
// import { Transition } from "react-transition-group";
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const Header = (props) => {

    let name, occupation, description, city, networks

    if (props.data) {
        name = props.data.name;
        occupation = props.data.occupation;
        description = props.data.description;
        city = props.data.address.city;
        networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }


    const bounceAnimation = keyframes`${bounceInDown}`;
    const BouncyDiv = styled.div`
     animation: 1.5s ${bounceAnimation};
    `;

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
                        <BouncyDiv>
                            <h1 >Soy {name}.</h1>
                            <h3 ><span>{occupation}</span> viviendo en {city} . {description}.</h3>
                            <hr />
                            <ul className="social" >
                                {networks}
                            </ul>
                        </BouncyDiv>
                    </div >
                </div >

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header >
        </React.Fragment >

    );
}

export default Header;
