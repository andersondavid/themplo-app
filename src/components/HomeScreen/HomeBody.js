import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';

import { getAllDocs, deleteDoc, openDoc } from '../../services/storage/handleStorage.js';
const iconDelete = require('../../assets/delete.png');
const iconRefresh = require('../../assets/refresh.png');

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#4455ff',
		flex: 1,
		padding: 15,
		alignItems: 'flex-end',
		position: 'relative'
	},
	itemList: {
		paddingVertical: 10,
		borderBottomColor: '#8888ff',
		borderBottomWidth: 1,
		width: Dimensions.get('screen').width * 0.6,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	itemListText: {
		color: '#fafafa',
		fontSize: 20,
		textAlign: 'right'
	},
	buttonDelete: {
		padding: 5,
	},
	iconDelete: {
		height: 20,
		paddingHorizontal: 10,
		width: 20
	},
	buttonRefresh: {
		position: 'absolute',
		left: 8,
		bottom: 8
	},
	iconRefresh: {
		height: 35,
		width: 35
	}
})

const HomeBody = () => {
	const [listItems, setListItems] = useState([{ docName: 'Carregando...', docStorageId: 'no' }]);
	const { navigate } = useNavigation();
	const dispatch = useDispatch();

	useEffect(() => {
		updateItems();
	}, []);

	const updateItems = () => {
		getAllDocs().then(data => setListItems(data));
	}

	//======================================================================
	const _itemList = ({ item }) => {
		const loadDoc = () => {
			openDoc(dispatch, item.docStorageId)
			navigate('PageEdit');

		}

		const deleteItem = (docStorageId) => {
			const delConfirmed = () => {
				deleteDoc(docStorageId);
				updateItems();
			}

			Alert.alert(
				'Deletar Item',
				'Tem certeza que deseja deletar este item',
				[
					{ text: 'Sim', onPress: delConfirmed },
					{ text: 'Não' }
				]
			);
		}

		return (
			<TouchableOpacity onPress={() => loadDoc()}>
				<View style={styles.itemList}>
					<Text style={styles.itemListText}>
						{item.docName}
					</Text>
					<TouchableOpacity
						style={styles.buttonDelete}
						onPress={() => deleteItem(item.docStorageId)}>
						<Image source={iconDelete} style={styles.iconDelete} />
					</TouchableOpacity>
				</View>
			</TouchableOpacity >

		)
	};
	//======================================================================

	return (
		<View style={styles.wrapper} >
			<TouchableOpacity
				style={styles.buttonRefresh}
				onPress={() => updateItems()} >
				<Image source={iconRefresh} style={styles.iconRefresh} />
			</TouchableOpacity>
			<ScrollView>
				<FlatList
					data={listItems}
					keyExtractor={(item) => item.docStorageId}
					renderItem={(data) => _itemList(data)} />
			</ScrollView>
		</View>
	);
};

export default HomeBody;