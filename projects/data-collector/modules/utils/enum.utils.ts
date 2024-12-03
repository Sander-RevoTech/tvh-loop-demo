export function getKey(object: any, value: any): string {
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const element = object[key];
			if (value === element) {
				return key;
			}
		}
	}
	return '';
}
