import React from 'react';

const Resume = (props) => {

    let skillmessage, education, work, skills

    if (props.data) {
        skillmessage = props.data.skillmessage;
        education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p></div>
        })
        work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p className="newline">{work.description}</p>
            </div>
        })
        skills = props.data.skills.map(function (skills) {
            const projectImage = 'images/skills/' + skills.image;
            return <div key={skills.name} style={{ margin: 10 }} className="five columns feature-item">
                <img className='skill' style={{ width: 85 }} alt={skills.name} src={projectImage} />
                <h5>{skills.name}</h5>
                <p>{skills.description}</p>
            </div>
        })
    }

    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">

                <div className="three columns header-col">
                    <h1><span>Works</span></h1>
                </div>

                <div className="nine columns main-col">
                    {work}
                </div>
            </div>



            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Tecnologías</span></h1>
                </div>

                <div>
                    <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
                    <ul className="bgrid-quarters s-bgrid-thirds cf">
                        {skills}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;