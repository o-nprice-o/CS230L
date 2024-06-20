import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* Repeat for the other two cards */}
      </div>
    </div>
  );
}

export default Card;
