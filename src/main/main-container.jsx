import React, {Component} from 'react';
import Main from './main.jsx';
import {connect} from 'react-redux';
import Data from '../data/Data.json';

/**
 * @classdesc MainContainer class
 */
class MainContainer extends Component {
	/**
	 * @return {MainContainer} markup
	 */
	render() {
		return (
			<Main elements={Data} {...this.props}/>
		);
	}
}

const mapStateToProps = ({search, level, category, language, submitted}) => ({
	search, level, category, language, submitted,
});

export default connect(mapStateToProps, null)(MainContainer);
