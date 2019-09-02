import React, { useState } from 'react';
import { View, TextInput, TouchableHighlight, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import createNewDocument from '../../services/redux/createNewDocument'

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fafafa',
		height: 220,
		borderColor: '#7789ff',
		borderBottomWidth: 20,
		marginLeft: -20,
		borderLeftWidth: 20,
		borderBottomLeftRadius: 90,
		alignItems: 'flex-end',
		justifyContent: 'center',
		padding: 15,
		elevation: 5
	},
	textInput: {
		borderBottomColor: '#4455ff',
		borderBottomWidth: 2,
		width: Dimensions.get('screen').width * 0.7,
		color: '#4455ff',
		fontSize: 25,
		marginBottom: 15,
	},
	buttonSubmit: {
		width: 110,
		backgroundColor: '#4455ff',
		paddingVertical: 10,
		borderRadius: 10,
		elevation: 5
	},
	textButton: {
		textAlign: 'center',
		color: '#fafafa',
		fontSize: 20,
		fontWeight: 'bold'
	}
});

const HomeHeader = () => {
	const { navigate } = useNavigation();
	const [docName, setDocName] = useState('');
	const dispatch = useDispatch();

	const newDocument = () => {
		if (docName) {
			createNewDocument(dispatch, docName);
			navigate('PageEdit');
		} else {
			Alert.alert('Nome vazio!', 'Porfavor insira o nome do documento.')
		};
	};

	return (
		<View style={styles.wrapper}>
			<TextInput
				style={styles.textInput}
				placeholder={'Novo Documento...'}
				placeholderTextColor={'#99aaff'}
				value={docName}
				onChangeText={(text) => setDocName(text)} />
			<TouchableHighlight
				underlayColor={'#99aaff'}
				style={styles.buttonSubmit}
				onPress={() => newDocument()} >
				<Text style={styles.textButton}>CRIAR</Text>
			</TouchableHighlight>
		</View>
	)
}

export default HomeHeader;