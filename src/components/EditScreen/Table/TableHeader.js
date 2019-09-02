import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	tableItems: {
		flexDirection: 'row',
		height: 40,
		backgroundColor: '#4455ff',
	},
	tableItemCell: {
		backgroundColor: '#fafafa',
		borderColor: '#dddddd',
		borderWidth: 0.5,
		borderStyle: 'solid',
		flex: 0.2,
		lineHeight: 40,
		textAlign: 'center',
		color: '#333333',
		fontWeight: 'bold',
	},
	tableItemCellLeft: {
		borderTopLeftRadius: 25,
		borderColor: '#dddddd',
		borderWidth: 0.5,
	},
	tableItemCellRight: {
		borderTopRightRadius: 25,
		borderColor: '#dddddd',
		borderWidth: 0.5,
	},
});

const TableHeader = () => {
	return (
		<View style={styles.tableItems}>
			<Text style={[styles.tableItemCell, styles.tableItemCellLeft]}>Cod.</Text>
			<Text style={styles.tableItemCell}>Nome</Text>
			<Text style={styles.tableItemCell}>Preço</Text>
			<Text style={styles.tableItemCell}>Quant.</Text>
			<Text style={[styles.tableItemCell, styles.tableItemCellRight]}>Total</Text>
		</View>
	)
}

export default TableHeader;