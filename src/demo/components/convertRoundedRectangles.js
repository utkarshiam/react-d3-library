import React from 'react';
import d3DataToJSX from './../../react-d3/d3DataToJSX';
import node from './../d3-examples/roundedRectangles';

module.exports = React.createClass ({
	getInitialState() {
		return {mouse: [480, 250], count: 0;}
	}
	render() {
		return (
			<div>
				{d3DataToJSX(node)}
			</div>
		)
	}
});