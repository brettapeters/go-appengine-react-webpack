import React from 'react';
import User from './User.jsx';

export default class App extends React.Component{
	constructor() {
		super();
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		fetch('/brett').then(response => {
			return response.json();
		}).then(data => {
			this.setState({ user: data });
		});
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<h2>cool</h2>
				<h2>super cool</h2>
				<User {...this.state.user}/>
			</div>
		);
	}
}