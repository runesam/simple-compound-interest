import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';

import App from './app/';

if (module.hot) {
	const root = document.getElementById('app');
	if (root) {
		ReactDOM.render(<AppContainer><App /></AppContainer>, root);
	}
}
