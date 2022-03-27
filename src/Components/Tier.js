import React from "react";
import { Link } from "react-router-dom";

export const Tier = ({ tier }) => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{tier.name}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">
                    ${tier.price} <small className="text-muted">/ mo</small>
                </h1>
                <p>{tier.description}</p>
                <Link
                    className="btn btn-lg btn-block btn-primary"
                    to={ {pathname: `/checkout?price=${tier.price}`, state: {price: 123}}}
                    role="button"
                    price="123"
                >
                    View details
                </Link>
            </div>
        </div>
    );
};
