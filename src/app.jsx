import React from 'react';
import HeaderContainer from './header';
import MainContainer from './main';
import {Provider} from 'react-redux';
import store from './store';


const App = () => (
	<Provider store={store}>
		<HeaderContainer/>
		<MainContainer/>
	</Provider>
);

export default App;

