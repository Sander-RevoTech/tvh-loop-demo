const createArrayFromEnum = (enumValue: any) =>
	Object.entries(enumValue).map(item => item[1]);

export { createArrayFromEnum };
