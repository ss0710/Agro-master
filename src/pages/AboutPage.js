import React, { Component } from 'react';

import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about-container">
                    <h3 className="about-title">About Trusted tech</h3>
                    <div className="about-content">
                    Supply chain is always hard to manage and requires a lot of
administrative machinery. However, when managed with smart
contracts using blockchain, a lot of the paperwork is reduced. Also
it leads to an increase in the transparency and helps to build an
efficient Root of Trust. Supply-chaindapp is such an
implementation of a supply chain management system which uses
blockchain to ensure a transparent and secure transfer of product
from the manufacturer to the customer via the
online e-commerce websites.
                        Blockchain will result in the supply chain being more robust, transparent, and cost-effective.
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutPage;
