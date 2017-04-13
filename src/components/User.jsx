import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
	let { name, location, avatar, age } = props;

	return (
		<div>
			<h3>{name} <small>({age})</small></h3>
			<p>{location}</p>
			<img
				src={avatar}
				alt={name}
				style={{
					maxHeight: 300
				}}
			/>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
	age: PropTypes.number
};

export default User;