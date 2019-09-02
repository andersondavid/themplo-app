import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { useSelector } from 'react-redux';

import EditHeaderButtons from './EditHeaderButtons';
import EditHeaderInfo from './EditHeaderInfo';

const iconDown = require('../../assets/arrow_down.png');

const styles = StyleSheet.create({
	wrapper: {
		height: 56,
		backgroundColor: '#4455ff',
	},
	toolbar: {
		height: 56,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 16,
		paddingRight: 8,
		flexDirection: 'row',
	},
	title: {
		fontSize: 18,
		color: '#fafafa',
		fontWeight: 'bold',
	},
	icon: {
		height: 40,
		width: 40,
	},
	areaInfo: {
		position: 'absolute',
		top: 56,
		padding: 8,
		width: '100%',
	},
});

const EditHeader = () => {
	const [directionArrow, setDirectionArrow] = useState(0);
	const orderInfo = useSelector(state => state.orderInfo);
	const headerHeight = useRef(new Animated.Value(56)).current;

	const expandToolbar = () => {
		setDirectionArrow((directionArrow == 0 ? 180 : 0));
		Animated.timing(headerHeight, {
			duration: 200,
			toValue: headerHeight._value == 56 ? 194 : 56,
		}).start()

	}

	return (
		<Animated.View style={[styles.wrapper, { height: headerHeight }]}>
			<View style={styles.toolbar}>
				<Text style={styles.title}>
					{orderInfo.docName || 'Sem tituto'}
				</Text>
				<TouchableOpacity onPress={() => expandToolbar()} >
					<Image source={iconDown} style={[styles.icon, {
						transform: [{ rotateZ: directionArrow + 'deg' }]
					}]} />
				</TouchableOpacity>
			</View>

			{/*=========== BUTTONS ==============*/}
			<View style={styles.areaInfo}>
				<EditHeaderInfo />
				<EditHeaderButtons data={orderInfo} />
			</View>

		</Animated.View>
	)
};

export default EditHeader;