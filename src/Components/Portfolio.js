import React, { Component } from 'react';

class Portfolio extends Component {
    render() {

        let projects

        if (this.props.data) {

            projects = this.props.data.projects.map(function (projects) {

                const projectImage = 'images/portfolio/' + projects.image;

                return <div key={projects.title} style={{ margin: '0px 3% 37px' }} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title}>
                            <img alt={projects.title} src={projectImage} style={{ width: '100%', minHeight: 140, maxHeight: 300 }} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            })
        }

        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Algunos de mis trabajos</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
