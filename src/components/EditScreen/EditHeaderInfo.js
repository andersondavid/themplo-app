import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	itemList: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	itemListText: {
		color: '#fafafa',
		fontSize: 15,
		padding: 3,
	},
	itemListTextName: {
		color: '#fafafacc'
	},
	itemListTextValue: {
		fontWeight: 'bold'
	}
})


function EditHeaderInfo() {
	const docData = useSelector(state => state);

	const lastUpdate = docData.orderInfo.lastUpdate;
	let totalValue = 0;

	let numberOfItems = () => {
		if(docData.orderData.length >= 10){
			return docData.orderData.length;
		} else if(docData.orderData.length == 0) {
			return 0;
		} else {
			return '0' + docData.orderData.length;
		}
	}

	docData.orderData.map(item => {
		totalValue += item.price * item.quantity;
	})

	return (
		<View>
			<View style={styles.itemList}>
				<Text style={[styles.itemListText, styles.itemListTextName]}>Data de modificação: </Text>
				<Text style={[styles.itemListText, styles.itemListTextValue]}>{lastUpdate.time + ' ' + lastUpdate.date}</Text>
			</View>
			<View style={styles.itemList}>
				<Text style={[styles.itemListText, styles.itemListTextName]}>Numero de items: </Text>
				<Text style={[styles.itemListText, styles.itemListTextValue]}>{numberOfItems()}</Text>
			</View>
			<View style={styles.itemList}>
				<Text style={[styles.itemListText, styles.itemListTextName]}>Valor Total: </Text>
				<Text style={[styles.itemListText, styles.itemListTextValue]}>R$ {totalValue}</Text>
			</View>
		</View>
	)
}

export default EditHeaderInfo;