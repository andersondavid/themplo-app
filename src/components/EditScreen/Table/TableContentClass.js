import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	tableItem: {
		flex: 1,
		flexDirection: 'row',
		height: 40,
	},
	tableItemCell: {
		color: '#333333',
		borderStyle: 'solid',
		borderWidth: 0.5,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		borderColor: '#dddddd',
		flex: 0.2,
		lineHeight: 40,
		textAlign: 'center'
	},
})

class TableContentClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataTable: this.props.dataTable
		}
	}

	_itemList({ item }) {
		return (
			<View style={styles.tableItem} >
				<Text style={styles.tableItemCell}>{item.code}</Text>
				<Text style={styles.tableItemCell}>{item.name}</Text>
				<Text style={styles.tableItemCell}>{item.price}</Text>
				<Text style={styles.tableItemCell}>{item.quantity}</Text>
				<Text style={styles.tableItemCell}
					onPress={() => this._deleteItem(item.code)}>
					{item.price * item.quantity}
				</Text>
			</View>
		)
	}

	scrollToEnd() {
		const wait = new Promise((resolve) => resolve);
		wait.then(() => {
			this.flatList.scrollToEnd({ animated: true });
		});
	}

	_deleteItem(code) {
		const delConfirmed = (code) => {
			this.props.deleteItem({
				type: 'DELETE_ITEM',
				code,
			})
		}

		Alert.alert(
			'Deletar Item',
			'Tem certeza que deseja deletar este item?',
			[
				{ text: 'SIM', onPress: () => delConfirmed(code) },
				{ text: 'NÃO' }
			]
		)
	}

	render() {
		return (
			<ScrollView
				ref="flatList">
				<FlatList
					data={this.props.dataTable}
					onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
					keyExtractor={(item) => item.code}
					renderItem={(item) => this._itemList(item)} />
			</ScrollView>
		)
	}
}

const mapToStateProps = (state) => ({
	dataTable: state.orderData,
})

const mapToDispatchProps = (dispatch) => ({
	deleteItem: itemToDelete => dispatch(itemToDelete)
})

export default connect(
	mapToStateProps,
	mapToDispatchProps
)(TableContentClass);