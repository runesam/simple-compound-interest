import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import Header from './components/common/header';
import Home from './containers/home/';
import calculator from './containers/calculator/';
import StoreConfigure from './../app/store/index';

const store = StoreConfigure();

const App = () => (
	<div>
	<Provider store={store}>
		<Router>
			<div className='container'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/calculator' component={calculator} />
				</Switch>
			</div>
		</Router>
	</Provider>
	</div>
);

export default App;
