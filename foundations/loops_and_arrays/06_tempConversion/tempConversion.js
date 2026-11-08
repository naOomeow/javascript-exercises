const convertToCelsius = function (farenhiet) {
	let conv =  (farenhiet - 32) * 5 / 9;
	conv *= 10;
	conv = Math.round(conv);
	return conv /= 10;
}; 

const convertToFahrenheit = function (celcius) {
	let conv = (celcius * 9 / 5) + 32;
	conv *= 10;
	conv = Math.round(conv);
	return conv /= 10;
};

module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
