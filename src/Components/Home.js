import React from "react";
import DBService from "../Services/DBService";
import { Services } from "./Services";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };
    }
    componentDidMount() {
        this.getAllServices();
    }

    async getAllServices() {
        let services = await DBService.getServices();
        this.setState({ services: services.data });
    }
    render() {
        let { services } = this.state;
        return (
            <>
            <div className="jumbotron">
            </div>
                <div className="container">
                    <div className="row">
                        <Services services={services} />
                    </div>
                </div>
            </>
        );
    }
}
