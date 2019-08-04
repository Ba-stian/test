import React, {Component} from 'react';
import Header from './header.jsx';
import {connect} from 'react-redux';
import {searchSubmitted} from '../actions';
import PropTypes from 'prop-types';


/**
 * @classdesc HeaderContainer class
 */
class HeaderContainer extends Component {
	/**
	 * @return {HeaderContainer}
	 */
	render() {
		const {onSearchSubmit} = this.props;

		return (
			<Header onSearchSubmit={onSearchSubmit}/>
		);
	}
}

const mapDispatchToProps = {
	onSearchSubmit: searchSubmitted,
};

HeaderContainer.propTypes = {
	onSearchSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
