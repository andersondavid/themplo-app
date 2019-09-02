import React from 'react';
import { View } from 'react-native';

import EditHeader from './EditHeader';
import EditBody from './EditBody';

const EditScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<EditHeader />
			<EditBody />
		</View>
	)
}

export default EditScreen;