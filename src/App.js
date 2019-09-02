/**
 * themplo app
 * https://github.com/AndersonDavid/themplo
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Routes from './routes'

import { Provider } from 'react-redux'
import storeState from './services/redux/storeState'



const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Provider store={storeState}>
				<Routes />
			</Provider>
		</View>
	);
};

export default App;

