import React from "react";

import './Beer.scss';

const Beer = () => {
	return (
    <div className="beer">
      <div className="beer__wrapper container">
        <div className="beer__title">Name of beer</div>
        <div className="beer__container">
          <div className="beer__column">
            <ul className="beer__list">
              <li className="beer__params">brand</li>
              <li className="beer__params">hop</li>
            </ul>
          </div>
          <div className="beer__column">
            <p className="beer__consist">Compound:</p>
            <ul className="beer__list">
              <li className="beer__params">yeast</li>
              <li className="beer__params">malts</li>
            </ul>
          </div>
        </div>
        <div className="beer__footer">Specifications: aclcohol, blg, ibu</div>
      </div>
    </div>
  );
}

export default Beer;