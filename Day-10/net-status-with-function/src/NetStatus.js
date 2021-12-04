import { useState } from "react";
import { BiWifi, BiWifiOff } from "react-icons/bi";
import "./assets/custom.css";

const NetStatus = () => {
  const [status, setStatus] = useState(false);

    setInterval(() => {
        navigator.onLine ? setStatus(true) : setStatus(false);
      }, 3000)

  return (
    <div>
      {status ? (
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
};

export default NetStatus;
