import React from "react";
import homestyle from "./Homestyle.module.css";
import { useState ,useEffect } from "react";

function Homepage() {
const now = new Date();
const updateTime = ()=>{
    const now = new Date();
    setTime(now)
  }
  
setInterval(updateTime,1000)
    // ✅ Load data from localStorage
  const [buyCount, setBuy] = useState(() => {
    return parseInt(localStorage.getItem("buyCount")) || 0; 
  });

  const [noBuyCount, setNotBuy] = useState(() => {
    return parseInt(localStorage.getItem("noBuyCount")) || 0;
  });

  // ✅ Jab state change ho, toh localStorage me save ho jaye
  useEffect(() => {
    localStorage.setItem("buyCount", buyCount);
  }, [buyCount]);

  useEffect(() => {
    localStorage.setItem("noBuyCount", noBuyCount);
  }, [noBuyCount]);

  const updateBuy = () => {
    
    setBuy(prev => prev + 1);
  };

  const updateNotBuy = () => {
    setNotBuy(prev => prev + 1);
  };

  const resetCounts = () => {
    setBuy(0);
    setNotBuy(0);
    localStorage.removeItem("buyCount");
    localStorage.removeItem("noBuyCount");
  };
  
  
 
  return (
    <div>
      <div className={homestyle.container}>
        <div className={`${homestyle.item} , ${homestyle.header}`}>
          <p> Banana Tracking</p>
        </div>
     
        <div className={`${homestyle.item} , ${homestyle.hero}`}>   <p style={{color:"#ffffff", fontSize:"2.5rem"}}>{now.toLocaleTimeString()}</p>
          <div className={`${homestyle.box} ${homestyle.box1}`}>
            <div className="item">
              <p>Total buy(days)</p>
            </div>
            <div className={homestyle.count} onClick={updateBuy}>
              {buyCount}
            </div>
          </div>
          <div className={`${homestyle.box} ${homestyle.box2}`}>
            <div className="item">
              <p>Total not buy(days)</p>
            </div>
            <div className={homestyle.count} onClick={updateNotBuy}>
              {noBuyCount}
            </div>
         
          </div>
        </div>
        <div className={`${homestyle.item} , ${homestyle.footer}`} >
          <button onClick={resetCounts}>Reset</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
