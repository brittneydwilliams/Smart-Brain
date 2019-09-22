import React from "react";
import Tilt from 'react-tilt'
import britt from "./brittneyanimated.jpg"
import "./Logo.css";

const Logo = () =>{
	return(
		<div className= "ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 250, width: 250 }} >
			 <div className="Tilt-inner pa3">
			 	<img style={{paddingTop: "5px"}} alt= "logo" src= {britt}/> 
			 </div>
			</Tilt>
		</div>

		);
}

export default Logo;