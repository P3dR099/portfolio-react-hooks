import React from 'react';

const About = (props) => {

    let name, profilepic, bio, city, estado, zip, email, resumeDownload

    if (props.data) {
        name = props.data.name
        profilepic = "images/" + props.data.image;
        bio = props.data.bio;
        city = props.data.address.city;
        estado = props.data.address.state;
        zip = props.data.address.zip;
        email = props.data.email;
        resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>
                                    {city} {estado}, {zip}
                                </span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;
