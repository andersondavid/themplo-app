import dateNow from '../dateNow';

const createNewDocument = (dispatch, docName) => {

	const date = new Date();

	const generateDocStorageId = () => {
		let initName = docName.substring(0, 5);
		let randNum = Math.floor((Math.random() * 1000));
		let finalName = '@' + initName.toLocaleLowerCase() + '_' + randNum;
		return finalName;
	}
	
	let orderInfo = {
		docName, 
		lastUpdate: dateNow,
		totalPrice: 0,
		docStorageId: generateDocStorageId(),
	}
	
	dispatch({
		type: 'SET_INFO',
		docName: orderInfo.docName,
		lastUpdate: orderInfo.lastUpdate, 
		totalPrice: orderInfo.totalPrice,
		docStorageId: orderInfo.docStorageId
	})
}

export default createNewDocument;