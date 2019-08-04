const initialState = {
	search: '',
	level: '',
	category: '',
	language: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_SUBMITTED':
		return {
			...action.payload,
		};
	default:
		return state;
	}
};


export default reducer;
