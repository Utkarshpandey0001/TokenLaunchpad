import React from 'react'; 
import { RequestAirdrop } from './RequestAirdrop';
import { Sendtoken } from './Sendtoken';
import { ShowBalance } from './ShowBalance';
import './MainFeaturesPage.css';

function MainFeaturesPage() {
    return (
        <div className="features-container">
            <div className="feature-row">
                <div className="feature-box">
                    <RequestAirdrop />
                </div>
                <div className="feature-box">
                    <ShowBalance />
                </div>
            </div>
            <div className="feature-box-bottom">
                <Sendtoken />
            </div>
        </div>
    );
}

export default MainFeaturesPage;
