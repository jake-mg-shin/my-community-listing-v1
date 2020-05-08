import React from "react";
import PropTypes from "prop-types";

function Price({ id, communityId, price, area, type }) {
  return (
    <div className="row">
      <div className="col">
        <div className="card" style={({ width: "50rem" }, { padding: "0" })}>
          <div className="card-body">
            <h4 className="card-text ">Price: $ {price}</h4>
            <h4 className="card-text ">Area: {area} sqft</h4>
            <h4 className="card-text ">Type: {type}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

Price.propTypes = {
  id: PropTypes.string.isRequired,
  communityId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default Price;
