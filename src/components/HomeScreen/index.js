import React from 'react';
import { View } from 'react-native';

import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

const HomeScreen = () => {
	return (
		<View style={{ backgroundColor: '#4455ff', flex: 1 }}>
			<HomeHeader />
			<HomeBody />
		</View>
	)
}

export default HomeScreen;