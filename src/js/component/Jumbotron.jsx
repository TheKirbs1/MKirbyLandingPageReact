import React from 'react';

const Jumbotron = () => {
	return (
<div className="p-5 mx-5 mt-3 bg-body-tertiary rounded-3 bg-light ">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit purus, lobortis ut risus convallis, semper interdum neque. Etiam vitae scelerisque nisi. Vestibulum porttitor tellus non enim sagittis gravida vel urna maximus, vel consectetur massa mollis. Praesent tincidunt orci eu massa.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
      </div>
    </div>
    )
}

export default Jumbotron;