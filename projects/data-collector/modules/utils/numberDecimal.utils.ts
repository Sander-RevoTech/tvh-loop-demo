export const getValueFromNumberDecimal = (decimal: any) => {
	return decimal ? parseFloat(decimal.toJSON()['$numberDecimal']) : null;
};

export function parseMongoDecimal(number, round: number = 3): Number {
	if (number === null || number === undefined) {
		return 0;
	}
	const val = number.toString();
	const numb = Number(val);
	return Number(numb.toFixed(round));
}
