import { createStore, combineReducers } from 'redux';

const documentData = {
	orderInfo: {
		name: 'Sem nome',
		lastUpdate: {
			data: '01/01',
			time: '23:00'
		},
		totalPrice: 0,
		docStorageId: '@none'
	},
	orderData: []
};

const deleteItemFromState = (state, code) => {
	let newState = []
	state.forEach(item => {
		if (item.code != code) {
			newState.push(item)
		};
	});
	return newState;
};


/** ===== ORDER INFO */

function orderInfo(state = documentData.orderInfo, action) {
	switch (action.type) {
		case 'SET_INFO':
			return {
				docName: action.docName,
				lastUpdate: action.lastUpdate,
				totalPrice: action.totalPrice,
				docStorageId: action.docStorageId,
			};

		default:
			return state;
	};
};


/** ===== ORDER DATA */

function orderData(state = documentData.orderData, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, {
				name: action.name,
				code: action.code,
				price: action.price,
				quantity: action.quantity,
			},];

		case 'DELETE_ITEM':
			return deleteItemFromState(state, action.code);

		case 'LOAD_FULL_DATA':
			return action.fullData;
		default:
			return state;
	}
}

let reducers = combineReducers({
	orderInfo,
	orderData
});

export default createStore(reducers);