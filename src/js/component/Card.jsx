import React from 'react';
import '../../styles/card.css';


const Card = () => {
    return (
        <>
        <div className="card container">
            <div className="card-head"></div>
            <img className="card-image" src="https://www.cnet.com/a/img/resize/7941f1b56f7d4c2d0e88c401772a7a41a15e4f01/hub/2009/12/10/0d67f834-f0fd-11e2-8c7c-d4ae52e62bcc/TRON_FlynnsArcade_EC005_jpg.jpg?auto=webp&width=1200" alt="Tron" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    );
}

export default Card;