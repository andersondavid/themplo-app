import AsyncStorage from '@react-native-community/async-storage';

export const saveDocument = async (documentData) => {
	let docStorageId = documentData.orderInfo.docStorageId;
	let docName = documentData.orderInfo.docStorageId;

	try {
		await AsyncStorage.setItem(docStorageId, JSON.stringify(documentData));
		alert(docName + ' salvo!');
	} catch (e) {
		alert('Erro ao salvar arquivo.');
	}
}

export const getAllDocs = async () => {
	try {
		let allIds = await AsyncStorage.getAllKeys();

		let promiseArr = allIds.map(id => (
			AsyncStorage.getItem(id).then(item => {
				let itemData = JSON.parse(item);
				return { docName: itemData.orderInfo.docName, docStorageId: id }
			})
		));
		return Promise.all(promiseArr).then(item => item);

	} catch (e) {
		alert('Erro ao encontrar documento individuais para abrir.');
	}



}

export const deleteDoc = async (docStorageId) => {
	try {
		await AsyncStorage.removeItem(docStorageId);
		alert('Documento deletado.');
	} catch (e) {
		console.log(e)
		alert('Erro ao deletar documento.')
	}
}

export const openDoc = async (dispatch, docStorageId) => {

	try {
		let getItemData = await AsyncStorage.getItem(docStorageId);
		let { orderInfo, orderData } = JSON.parse(getItemData)

		dispatch({
			type: 'SET_INFO',
			docName: orderInfo.docName,
			lastUpdate: orderInfo.lastUpdate,
			totalPrice: orderInfo.totalPrice,
			docStorageId: orderInfo.docStorageId,
		});

		dispatch({
			type: 'LOAD_FULL_DATA',
			fullData: orderData
		})
	} catch (e) {
		alert('Erro ao abrir documento.')
	}
}