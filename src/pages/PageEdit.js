import React from 'react';
import { View, StatusBar } from 'react-native';
import EditScreen from '../components/EditScreen';

const PageEdit = () => {
	return (
		<View style={{flex: 1}}>
			<StatusBar barStyle='light-content' backgroundColor='#4455ff' />
			<EditScreen />
		</View>)
}

export default PageEdit;