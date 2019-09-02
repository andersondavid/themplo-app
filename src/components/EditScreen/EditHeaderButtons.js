import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { saveDocument } from '../../services/storage/handleStorage.js';

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 8,
		flexDirection: 'row',
		//justifyContent: 'space-between', when add more btns
		justifyContent: 'space-around',
	},
	buttonSubmit: {
		width: 110,
		paddingVertical: 5,
		borderRadius: 20,
	},
	textButton: {
		textAlign: 'center',
		color: '#fafafa',
		fontSize: 17,
		fontWeight: 'bold'
	}
});

const EditHeaderButtons = () => {
	const dispatch = useDispatch();
	const documentData = useSelector(state => state);

	const saveDoc = () => {
		saveDocument(documentData);
	};

	const clearTable = () => {
		const confirmClear = () => {
			dispatch({
				type: 'LOAD_FULL_DATA',
				fullData: []
			});
		};

		Alert.alert(
			'Limpar tabela?',
			'Essa ação excluirar todos os items da tabela e não pode ser desfeita.',
			[
				{ text: 'SIM', onPress: () => confirmClear() },
				{ text: 'NÃO' },
			]
		);
	};



	return (
		<View style={styles.wrapper}>
			{/* <TouchableHighlight style={styles.buttonSubmit}>
				<Text style={styles.textButton}>SALVAR</Text>
			</TouchableHighlight> */}
			<TouchableHighlight
				underlayColor={'#ffffff44'}
				style={styles.buttonSubmit}
				onPress={() => clearTable()} >
				<Text style={styles.textButton}>LIMPAR</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor={'#ffffff44'}
				style={styles.buttonSubmit}
				onPress={() => saveDoc()} >
				<Text style={styles.textButton}>SALVAR</Text>
			</TouchableHighlight>
		</View>
	);
};

export default EditHeaderButtons;