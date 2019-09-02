const date = new Date();

const currentDate = () => {
	let currentDay = date.getDay() + 1 ;
	let currentMonth = date.getMonth() + 1;

	if (currentDay < 10) {
		currentDay =  '0' + currentDay;
	};
	if (currentMonth < 10) {
		currentMonth =  '0' + currentMonth;
	};
	return currentDay + '/' + currentMonth;
}

const currentTime = () => {
	let currentMinutes = date.getMinutes();
	let currentHours = date.getHours();

	if (currentMinutes < 10) {
		currentMinutes =  '0' + currentMinutes;
	};
	if (currentHours < 10) {
		currentHours =  '0' + currentHours;
	};
	return currentHours + ':' + currentMinutes;
};

const dateNow = {
	date: currentDate(),
	time: currentTime(),
};

export default dateNow;