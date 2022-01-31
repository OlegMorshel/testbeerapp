import React from "react";

import './../../../scss/styles/Beer.scss';
import './../../../scss/media/BeerMedia.scss';

const Beer = ( props ) => {
	return (
    <div className="beer">
      <div className="beer__wrapper container">
        <div className="beer__title">{props.name}</div>
        <div className="beer__container">
          <div className="beer__column">
            <ul className="beer__list">
              <li className="beer__params">{props.brand}</li>
              <li className="beer__params">{props.hop}</li>
            </ul>
          </div>
          <div className="beer__column">
            <p className="beer__consist">Compound:</p>
            <ul className="beer__list">
              <li className="beer__params">{props.yeast}</li>
              <li className="beer__params">{props.malts}</li>
            </ul>
          </div>
        </div>
        <div className="beer__footer">
          <span>Specifications:</span>{" "}
          {`${props.alcohol} ,  ${props.blg} , ${props.ibu}.`}
        </div>
      </div>
    </div>
  );
}

export default Beer;