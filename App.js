/**
 * themplo app
 * https://github.com/AndersonDavid/themplo
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes'



const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Routes />
		</View>
	);
};

export default App;
