import React from 'react';
import { View, StatusBar } from 'react-native';
import HomeScreen from '../components/HomeScreen';

const PageHome = () => {
	return (
		<View style={{flex: 1}}>
			<StatusBar barStyle='dark-content' backgroundColor='#fafafa' />
			<HomeScreen />
		</View>)
}

export default PageHome;