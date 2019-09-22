import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
	return(
		<div>
			<p className = "f3">
			{"Brittonian Games Presents Picture Face Detector"}
			</p>
			<div className="center">
				<div className="form pa4 br3 shawdow-5"> {/* put center to put decect on same line*/}
				<input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange}/>
				<button 
				className = "w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
				onClick={onButtonSubmit}
				>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;