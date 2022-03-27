import React from "react";
import DBService from "../Services/DBService";

export default class Checkout extends React.Component { 
    constructor(props) {
        super(props);
        console.log(window.location)
        console.log(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            country: '',
            state: '',
            zip:'',
            payment:'',
            errors: {},
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getPrice = this.getPrice(this)
    }

    handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }
    async handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        const response = await DBService.checkout(data)

    };

    getPrice(){
        const params = new URLSearchParams(window.location.search)
        console.log(params)
        if(params.get("price")){
            return params.get("price")
        } 
        return 0
    }    
    render() {
        return (
            <div className="container">
                <div className="py-5 text-center mt-3">
                    <h2>Checkout form</h2>
                    <p className="lead">
                        Below is an example form built entirely with Bootstrap’s
                        form controls. Each required form group has a validation
                        state that can be triggered by attempting to submit the form
                        without completing it.
                    </p>
                </div>
              {/* {submitting && (
                    <div class="alert alert-success" role="alert">
                        A simple success alert—check it out!
                    </div>
                )} */}
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">
                                1
                            </span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">
                                        Brief description
                                    </small>
                                </div>
                                <span className="text-muted">${this.getPrice}</span>
                            </li>
    
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${this.getPrice}</strong>
                            </li>
                        </ul>
                    </div>
    
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        name="firstname"
                                        required={true}
                                        value={this.state.firstname}
                                        onChange={(e)=> this.handleInput(e)}
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastname"
                                        value={this.state.lastname}
                                        placeholder=""
                                        required={true}
                                        onChange={(e)=> this.handleInput(e)}
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="you@example.com"
                                        onChange={(e)=> this.handleInput(e)}
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping
                                    updates.
                                </div>
                            </div>
    
                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={this.state.address}
                                    placeholder="1234 Main St"
                                    required={true}
                                        onChange={(e)=> this.handleInput(e)}
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        className="custom-select d-block w-100"
                                        id="country"
                                        name="country"
                                        value={this.state.country}
                                        required={true}
                                        onChange={(e)=> this.handleInput(e)}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="usa">United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <select
                                        className="custom-select d-block w-100"
                                        id="state"
                                        value={this.state.state}
                                        required={true}
                                        name="state"
                                        onChange={(e)=> this.handleInput(e)}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="California">
                                            California
                                        </option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        placeholder=""
                                        required={true}
                                        value={this.state.zip}
                                        name="zip"
                                        onChange={(e)=> this.handleInput(e)}
                                    />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
    
                            <h4 className="mb-3">Payment</h4>
    
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input
                                        id="paypal"
                                        name="payment"
                                        type="radio"
                                        className="custom-control-input"
                                        required={true}
                                        onChange={(e)=> this.handleInput(e)}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="paypal"
                                    >
                                        PayPal
                                    </label>
                                </div>
                            </div>
    
                            <hr className="mb-4" />
                            <button
                                className="btn btn-primary btn-lg btn-block"
                                type="submit"
                                // onClick={this.handleSubmit}
                            >
                                Continue to checkout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};
