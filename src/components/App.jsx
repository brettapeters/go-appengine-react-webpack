import React from 'react';

export default class App extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<img src="images/foggy.jpg" alt="foggy" />
			</div>
		);
	}
}