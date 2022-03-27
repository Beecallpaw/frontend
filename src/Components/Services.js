import React from "react";
import { Service } from "./Service.js";

export const Services = (props) => {
    let { services } = props;
    let loading = !!services.length;
    return (
        <>
            {loading &&
                services.map(service => <Service service={service} key={service._id} />)
            }
        </>
    );
};