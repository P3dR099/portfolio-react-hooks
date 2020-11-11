import React from 'react';

const Footer = (props) => {

    let networks
    if (props.data) {
        networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; 2020 | Pedro Conde </li>
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;
