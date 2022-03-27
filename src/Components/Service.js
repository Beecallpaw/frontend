import React from "react";
import { Link } from "react-router-dom";

export const Service = (props) => {
    let { service } = props;
    return (
            <div className="col-md-4">
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <p>
                    <Link
                        className="btn btn-secondary"
                        to={`services/${service.slug}`}
                        role="button"
                    >
                        View details
                    </Link>
                </p>
            </div>
    );
};
