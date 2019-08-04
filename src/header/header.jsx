import React, {Component} from 'react';
import header from './header.css';
import lists from '../data/filters.json';


/**
 * @classdesc Header class
 */
export default class Header extends Component {
	/**
	 * @param {object} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			level: '',
			category: '',
			language: '',
		};
	}

	/**
	 * @return {Header}
	 */
	render() {
		const {search, category, language, level} = this.state;
		const {levels, categories, languages} = lists;

		return (
			<header className={header.header}>
				<div className={header.container}>
					<div className={header.row}>
						<div className={header.search}>
							<label className={header.labels}>Поиск по ключевым
								словам:</label>
							<form className={header.search_group}
								onSubmit={(e) => this.onFormSubmit(e)}>
								<input type="text" placeholder='Поиск'
									className={header.search_input}
									value={search} name="search"
									onChange={(e) => this.onInputChange(e)}/>
								<button className={header.search_btn}/>
							</form>
						</div>
					</div>
					<div className={header.row}>
						<div className={header.filter}>
							<label className={header.labels}>Фильтровать статьи
								по:</label>
							<select className={header.select} name="level" onChange={(e) => this.onInputChange(e)}>
								<option value={level}>Любой уровень</option>
								{levels.map((level, id) =>
									<option key={id} value={level}>{level}</option>)}
							</select>
							<select className={header.select} name="category" onChange={(e) => this.onInputChange(e)}>
								<option value={category}>Все категории</option>
								{categories.map((categorie, id) => <option
									key={id}
									value={categorie}>{categorie}</option>)}
							</select>
							<select className={header.select} name="language" onChange={(e) => this.onInputChange(e)}>
								<option value={language}>Все языки</option>
								{languages.map((language, id) => <option
									key={id}
									value={language}>{language}</option>)}
							</select>
						</div>
					</div>
				</div>
			</header>
		);
	}

	/**
	 * @param {event} e
	 */
	onInputChange(e) {
		const {name, value} = e.target;
		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	/**
	 * @param {event} e
	 */
	onFormSubmit(e) {
		e.preventDefault();
		const {onSearchSubmit} = this.props;
		const {search} = this.state;
		if (search.length < 4) {
			return;
		}
		onSearchSubmit(this.state);
		this.setState({
			search: '',
		});
	}


}



