import React from 'react';
import '../../styles/jumbotron.css';

const Jumbotron = () => {
    return (
        <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5 cont">
                <h1 className="display-5 fw-bold">JumboTRON</h1>
                <img className="jumbotron"/>
                <p className="col-md fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">I am a button</button>
            </div>
        </div>
        </>
    );
}

export default Jumbotron;