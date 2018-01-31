import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="full-width-container not-found-container white-font">
            <div className="center-content-container container">
                <div className="not-found-title emphasis-font">404 - PAGE NOT FOUND</div>
                <div>We can't find the page you're looking for.</div>
                <Link to="/">
                    <button type="submit" className="btn btn-primary not-found-button">Return to Home</button>
                </Link>
            </div>
        </div>
    )

}