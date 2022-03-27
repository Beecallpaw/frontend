import React from "react";
import DBService from "../Services/DBService";
import { Tier } from "./Tier";

class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
        };
    }
    componentDidMount() {
        const param = window.location.pathname.split("/").pop();
        this.getServiceDetails(param);
    }
    async getServiceDetails(param) {
        let details = await DBService.getServiceDetails(param);
        this.setState({ details: details.data });
    }
    render() {
        let { details } = this.state;
        let loading = !!Object.keys(details).length;
        return (
            loading && (
                <div className="jumbotron">
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">{details.name}</h1>
                        <p className="lead">{details.description}</p>
                    </div>

                    <div className="container">
                        <div className="card-deck mb-3 text-center">

                            { details.tiers.map(tier => (
                                    <Tier tier={tier} key={tier._id}/>
                                ))}
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default Pricing;
