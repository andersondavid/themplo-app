import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, TouchableHighlight, Dimensions, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';

const iconAdd = require('../../../assets/add.png');

const styles = StyleSheet.create({
	tableForm: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 8,
	},
	inputItemCell: {
		color: '#333333',
		backgroundColor: '#fafafa',
		width: Dimensions.get('screen').width * 0.2,
		height: 46,
		textAlign: 'center',
		justifyContent: 'center',
		elevation: 5,
		fontWeight: 'bold',
	},
	inputButton: {
		backgroundColor: '#00b373',
		borderRadius: 28,
		height: 46,
		width: 46,
		position: 'absolute',
		right: 4,
		bottom: 8,
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 10,
	},
	icon: {
		height: 30,
		width: 30,
	},
})

const TableInput = () => {
	const dispatch = useDispatch();
	const [code, setCode] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState(null);
	const [quantity, setQuantity] = useState('1');

	const codeInput = useRef(null);

	const _addItem = () => {
		if (!code) {
			Alert.alert('Campo em branco', "Você deixo o campo Código em branco.")
		} else if (!name) {
			Alert.alert('Campo em branco', "Você deixo o campo Nome em branco.");
		} else if (!price) {
			Alert.alert('Campo em branco', "Você deixo o campo Preço em branco.")
		} else if (!quantity) {
			Alert.alert('Campo em branco', "Você deixo o campo Quantidade em branco.")
		} else {
			dispatch({ type: 'ADD_ITEM', code, name, price, quantity });
			setCode('');
			setName('');
			setPrice(null);
			setQuantity('1');
			codeInput.current.focus();
		}
	}

	return (
		<View style={styles.tableForm}>
			<TextInput
				ref={codeInput}
				style={styles.inputItemCell}
				onChangeText={(text) => setCode(text)}
				value={code}
				placeholder={'Cod.'}
				placeholderTextColor={'#9d9d9d'} />
			<TextInput
				style={styles.inputItemCell}
				onChangeText={(text) => setName(text)}
				value={name}
				placeholder={'Nome'}
				placeholderTextColor={'#9d9d9d'}
				autoCorrect={false} />
			<TextInput
				style={styles.inputItemCell}
				keyboardType={'numeric'}
				onChangeText={(text) => setPrice(text)}
				value={price}
				placeholder={'Preço'}
				placeholderTextColor={'#9d9d9d'} />
			<TextInput
				style={[styles.inputItemCell, {borderTopRightRadius: 22,
																			borderBottomRightRadius: 22}]}
				keyboardType={'numeric'}
				value={quantity}
				onChangeText={(text) => setQuantity(text)}
				placeholder={'Qtd.'}
				placeholderTextColor={'#9d9d9d'} />
			<TouchableHighlight
				underlayColor={'#33f9a9'}
				onPress={() => _addItem()}
				style={styles.inputButton}>
				<Image source={iconAdd} style={styles.icon} />
			</TouchableHighlight>
		</View >
	)
}

export default TableInput;