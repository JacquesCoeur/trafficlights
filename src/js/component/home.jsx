import React from "react";
import { Lights } from "./lights";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="traffictop"></div>
			<div className="contenido">
				<div className="luces">
					<Lights />
				</div>
			</div>
		</div>
	);
};

export default Home;
