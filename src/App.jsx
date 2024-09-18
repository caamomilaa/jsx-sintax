// todos los componentes se exportan

import { Fragment } from 'react';

//recargar la consola, para que se limpien los errores

const name = 'Camila';
const number = 22;
const boolean = true;
const inUndefined = undefined;
const isNull = null;

const numbers = [1, 2, 3];
const object = { a: '1 > El valor de la propiedad A', b: 2 }; //no se puede pintar objetos, estamos tratando de pintar un objeto dentro de otro objeto

const App = () => {
	return (
		<Fragment>
			<div>
				<p>Name: {name}</p>
				<p>Age: {number}</p>
				<p>Boolean: {boolean}</p>
				<p>Null: {isNull}</p>
				<p>Undefined: {inUndefined}</p>
				<p>Numbers: {numbers}</p>
				<p>Object: {object.a}</p>
			</div>
			<h4>
				Al ser objetos, si no queremos partes envueltas en un div, necesitamos
				fragment.
			</h4>
			<img src='/assets/images/vite.svg' alt='' />
		</Fragment>
	);
};

export default App;

//entre llaves, solo etiquetas html o texto, si no, no se pinta en pantalla.

//imagen: arrastrar + shift - public
