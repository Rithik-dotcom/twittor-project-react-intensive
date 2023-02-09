import React from "react";
import "./Home.css"
import HomeOption from "../HomeOptions/HomeOption";
import LoginOption from "../LoginOptions/LoginOption";

const Home = () => {
  return (
    <div className="homeContainer">
     <div className="leftContainer">
     <HomeOption/>
     </div>

     <div className="centerContainer">Center</div>

     <div className="rightContainer">
     <LoginOption/>
     </div>
    </div>
  )
}

export default Home

// function Home(){
//     return(
//         <div>hello </div>
//         )
// }
// export default Home