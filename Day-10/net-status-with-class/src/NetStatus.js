import React, { Component } from "react";
import "./assets/css/custom.css";
import { BiWifi, BiWifiOff } from "react-icons/bi";

export default class NetStatus extends Component {
  constructor() {
    super();
    this.state = {
      isDisconnected: false,
    };
  }

  handleConnectionChange = () => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      const webPing = setInterval(() => {
        fetch("//google.com", {
          mode: "no-cors",
        })
          .then(() => {
            this.setState({ isDisconnected: false }, () => {
              return clearInterval(webPing);
            });
          })
          .catch(() => this.setState({ isDisconnected: true }));
      }, 1000);
      return;
    }

    return this.setState({ isDisconnected: true });
  };

  componentDidMount() {
    this.handleConnectionChange();
    window.addEventListener("online", this.handleConnectionChange);
    window.addEventListener("offline", this.handleConnectionChange);
  }
  componentWillUnmount() {
    window.removeEventListener("online", this.handleConnectionChange);
    window.removeEventListener("offline", this.handleConnectionChange);
  }
  render() {
    return (
      <div>
        {!this.state.isDisconnected ? (
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
