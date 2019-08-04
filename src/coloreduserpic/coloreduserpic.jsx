import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ColoredUserpic = (props) => {
	const Wrapper = styled.div`
		width: 158px;
		border-radius: 50%;
		height: 158px;
		background-color: ${props.background};
		position: relative;
		&:before, &:after{
			content: '';
			position: absolute;
		};
		&:after{
		top: -${props.colorWidth};
		left: -${props.colorWidth};
		right: -${props.colorWidth};
		bottom: -${props.colorWidth};
		border-radius: 50%;
		background-image: linear-gradient(98deg, rgba(0,128,0,1) 0%, 
		rgba(0,128,0,1) 15%, rgba(0,57,141,1) 62%, rgba(0,0,255,1) 100%);
		z-index: -2;
		};
		&:hover {
			&:after{
			background-image: linear-gradient(270deg, rgba(0,128,0,1) 0%, 
			rgba(0,128,0,1) 15%, rgba(0,57,141,1) 62%, rgba(0,0,255,1) 100%);
			}
		}
	`;

	const Pic = styled.img`
		width: ${props.size}
		height: ${props.size};
		border-radius: 50%;
		margin: ${props.margin};
	`;

	return (
		<Wrapper>
			<Pic src={props.src} alt='user'/>
		</Wrapper>);
};

ColoredUserpic.propTypes = {
	size: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	margin: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
	colorWidth: PropTypes.string.isRequired,
};

export default ColoredUserpic;
