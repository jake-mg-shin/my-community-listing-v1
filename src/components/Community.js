import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Community({ id, name, imgUrl, group }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card" style={{ height: "400px" }}>
        <img
          src={imgUrl}
          style={{ height: "200px" }}
          className="card-img-top"
          alt={name}
          title={name}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h4 className="card-text text-right">{group}</h4>
          <Link
            to={{
              pathname: `/detail/${id}`,
              state: id
            }}
            className="btn btn-outline-danger"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

Community.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired
};

export default Community;
