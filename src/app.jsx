import React from 'react';
import ColoredUserpic from './coloreduserpic/coloreduserpic.jsx';


const App = () => (
	<ColoredUserpic src={'https://picsum.photos/200/300?grayscale'}
		size={'150px'} background={'red'} margin={'4px'}
		colorWidth={'6px'}/>
);

export default App;
