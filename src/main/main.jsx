import React, {Component} from 'react';
import main from './main.css';
import PropTypes from 'prop-types';


/**
 * @classdesc Main class
 */
export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderedElements: this.props.elements.slice(0, 3),
			restElements: this.props.elements.slice(3),
		};
	}


	render() {
		const {elements, search, level, category, language} = this.props;
		const {renderedElements} = this.state;
		return (
			<main>
				<div className={main.container}>
					<div className={main.wrap}>
						<h1 className={main.header}>статьи</h1>
						<div className={main.columns}>
							{renderedElements.map(({level, isVideo, text}, id) =>
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
								</div>)}
						</div>
						<button className={main.btn}
							onClick={this.onClick.bind(this)}>Показать больше
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
		const {renderedElements, restElements} = this.state;
		this.setState({
			renderedElements: [...renderedElements, ...restElements],
		});
	}




	filterArray() {
		const {elements, level, category, language} = this.props;
		const result = [];
		elements.forEach((element) => {
			for (const key in element) {
				if(element[key] == category) {
					result.push(element);
				}
				if(element[key] == level){
					result.push(element);
				}
				if (element[key] == language) {
					result.push(element);
				}
			}
		});
		console.log(result)


	const defaultRender = result.slice(0, 3);
	const restRender = result.slice(3);

	console.log(defaultRender, restRender, this.props);

	// this.setState({
	// 	renderedElements: defaultRender,
	// 	restElements: restRender,
	// });
	}
}

Main.propTypes = {
	elements: PropTypes.array.isRequired,
	search: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
};
