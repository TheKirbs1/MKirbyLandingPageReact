import React from 'react';

const Card = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4 m-5">
		<div className="col">
		  <div className="card h-100">
			<img src="https://placehold.co/500x325" className="card-img-top" alt="500x325 image placeholder" />
			<div className="card-body">
			  <h1 className="card-title">Card title</h1>
			  <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit purus, lobortis ut risus convallis, semper interdum neque. Etiam vitae scelerisque nisi. Vestibulum porttitor </h4>
			</div>
			<div className="card-footer">
				<div className="d-grid gap-2 col-6 mx-auto">
  					<button class="btn btn-primary btn-lg" type="button"><strong>Find Out More!</strong></button>
				</div>
			</div>
		  </div>
		</div>
		<div className="col">
		  <div className="card h-100">
			<img src="https://placehold.co/500x325" className="card-img-top" alt="500x325 image placeholder" />
			<div className="card-body">
			  <h1 className="card-title">Card title</h1>
			  <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit purus, lobortis ut risus convallis, semper interdum neque. Etiam vitae scelerisque nisi. Vestibulum porttitor </h4>
			</div>
			<div className="card-footer">
				<div className="d-grid gap-2 col-6 mx-auto">
  					<button class="btn btn-primary btn-lg" type="button"><strong>Find Out More!</strong></button>
				</div>
			</div>
		  </div>
		</div>
		<div className="col">
		  <div className="card h-100">
			<img src="https://placehold.co/500x325" className="card-img-top" alt="500x325 image placeholder" />
			<div className="card-body">
			  <h1 className="card-title">Card title</h1>
			  <h4 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit purus, lobortis ut risus convallis, semper interdum neque. Etiam vitae scelerisque nisi. Vestibulum porttitor </h4>
			</div>
			<div className="card-footer">
				<div className="d-grid gap-2 col-6 mx-auto">
					<button class="btn btn-primary btn-lg" type="button"><strong>Find Out More!</strong></button>
				</div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default Card;