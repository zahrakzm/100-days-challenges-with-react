import { useState, useEffect } from "react";
import { BiWifi, BiWifiOff } from "react-icons/bi";
import "./assets/custom.css";

const NetStatus = () => {
const [isDisconnected, setIsDisconnected] = useState(false)

const handleConnectionChange=()=> {
  const condition = navigator.onLine ? 'online' : 'offline';
  if (condition === 'online') {
    const webPing = setInterval(
      () => {
        fetch('//google.com', {
          mode: 'no-cors',
          })
        .then(() => {
         setIsDisconnected(false, () => {
            return clearInterval(webPing)
          });
        }).catch(() => setIsDisconnected(true) )
      }, 2000);
    return;
  }

  return setIsDisconnected(true);
}

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return () => {
      window.addEventListener('online', handleConnectionChange);
      window.addEventListener('offline', handleConnectionChange);
    }
  }, [handleConnectionChange])


  return (
    <div>
   
      {!isDisconnected ? (
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
