import React, { Component } from "react";
import "./assets/css/custom.css";
import { BiWifi, BiWifiOff } from "react-icons/bi";

export default class NetStatus extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    };
  }
  componentDidMount() {
    setInterval(() => {
      navigator.onLine ? this.setState({status:true}) : this.setState({status:false});
    }, 3000);
  }

  render() {
    return (
      <div>

        {this.state.status ? (
          <div className="connected container">
            <BiWifi className="main" />

            <h1>Internet Connection Status</h1>
            <h3>You're online! connection looks good</h3>
          </div>
        ) : (
          <div className="not-connected container">
            <BiWifiOff className="main" />
            <h1>Internet Connection Status</h1>
            <h3>oops! Your Internet Connection is Down</h3>
          </div>
        )}
      </div>
    );
  }
}
