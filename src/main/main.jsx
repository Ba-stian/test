import React, {Component} from 'react';
import main from './main.css';
import PropTypes from 'prop-types';


/**
 * @classdesc Main class
 */
export default class Main extends Component {
	/**
	 * @param {string} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			expand: false,
		};
	}


	/**
	 * @param {object} elements
	 * @return {*}
	 */
	renderElements(elements) {
		const {search, level, category, language} = this.props;
		const {expand} = this.state;
		const filtredItems = elements.filter((element) => {
			return (
				(element.level === level || level.length === 0) &&
					(element.category === category || category.length === 0) &&
					(element.language === language || language.length === 0) &&
					(element.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
																					|| search.length === 0));
		});
		const items = expand ? filtredItems : filtredItems.slice(0, 3);
		return items.map(({level, isVideo, text}, id) =>
			<div className={main.column} key={id}>
				<img
					src={`https://picsum.photos/300/200?random=${id}`}
					alt='fish' className={main.pic}/>
				<div className={main.column_content}>
					<h2 className={main.column_header}>статья
						{isVideo ? ('(видео)') : ''}</h2>
					<p className={main.level}>{level}</p>
					<p className={main.text}>{text}</p>
				</div>
			</div>);
	}

	/**
	 * @return {Main} markup
	 */
	render() {
		const {elements} = this.props;
		return (
			<main>
				<div className={main.container}>
					<div className={main.wrap}>
						<h1 className={main.header}>статьи</h1>
						<div className={main.columns}>
							{this.renderElements(elements)}
						</div>
						<button className={main.btn}
							onClick={this.onClick.bind(this)}>
							{!this.state.expand ? 'Показать больше' : 'Скрыть'}
						</button>
					</div>
				</div>
			</main>
		);
	}


	/**
		 * @update {state}
		 */
	onClick() {
		this.setState((prevState) => {
			return {
				expand: !prevState.expand,
			};
		});
	}
}

Main.propTypes = {
	elements: PropTypes.array.isRequired,
	search: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
};
