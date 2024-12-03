export interface IRoute {
	name: string;
	title: string;
}

export const pages = {
	zone100: { name: 'zone-100', title: 'ZONE 100' } as IRoute,
	zone200: { name: 'zone-200', title: 'ZONE 200' } as IRoute,
	zone300: { name: 'zone-300', title: 'ZONE 300' } as IRoute,
	zone400: { name: 'zone-400', title: 'ZONE 400' } as IRoute,
	zone500: { name: 'zone-500', title: 'ZONE 500' } as IRoute
};

export const controlPages = {
	barcodeScannerDetail: 'barcode-scanner-detail',
	scaleDetail: 'scale-detail',
	siemensDrive: 'g115-detail',
	upDownControl: 'clx-servo',
	dolControl: 'dol-motor',
	nordControl: 'nord-drive'
};
