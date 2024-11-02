import React from 'react';
import Jumbotron from './Jumbotron';
import Deck from './Deck';

const BodyContainer = () => {
    return (
        <>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
            <Jumbotron />
            <Deck />
            </div>
            <div className="col-sm-1"></div>
        </div>
        </>
    );
}

export default BodyContainer;