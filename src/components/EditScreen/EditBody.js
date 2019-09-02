import React from 'react';
import { View, StyleSheet } from 'react-native';

import TableHeader from './Table/TableHeader';
import TableInput from './Table/TableInput';
import TableContentClass from './Table/TableContentClass';

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
})

const EditBody = () => {
	return(
		<View style={styles.wrapper}>
			<TableHeader />
			<TableContentClass />
			<TableInput />
		</View>
	)
};

export default EditBody;