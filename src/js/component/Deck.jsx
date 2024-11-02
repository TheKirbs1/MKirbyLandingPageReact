import React from 'react';
import Card from './Card';

const Deck = () => {
    return (
        <>
        <div className="row">
            <div className="col-sm-3">
                <Card />
            </div>
            <div className="col-sm-3">
                <Card />
            </div>
            <div className="col-sm-3">
                <Card />
            </div>
            <div className="col-sm-3">
                <Card />
            </div>
        </div>
        </>
    );
}

export default Deck;