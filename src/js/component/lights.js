import React, { useState } from "react";

export const Lights = () => {
	const [red, setred] = useState("red");
	const [yellow, setyellow] = useState("yellow");
	const [green, setgreen] = useState("green");
	return (
		<div>
			<div>
				<span
					className={red == "red" ? "red" : "redOn"}
					onClick={() => {
						if (yellow == "yellow" || green == "green") {
							setred("redOn");
							setgreen("green");
							setyellow("yellow");
						}
					}}></span>
				<span
					className={yellow == "yellow" ? "yellow" : "yellowOn"}
					onClick={() => {
						if (red == "red" || green == "green") {
							setyellow("yellowOn");
							setred("red");
							setgreen("green");
						}
					}}></span>
				<span
					className={green == "green" ? "green" : "greenOn"}
					onClick={() => {
						if (red == "red" || yellow == "yellow") {
							setgreen("greenOn");
							setred("red");
							setyellow("yellow");
						}
					}}></span>
			</div>
		</div>
	);
};
//crear 3 onclicks y el brillo aparte, si es un click puede ser booleano
// ver el tema de hidden y cambiar de clase con react
// tal vez no hay que reemplazar si no agregar una palabra con {}
