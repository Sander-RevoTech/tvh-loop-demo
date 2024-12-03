export class CycleLoadBalancer {
	Currentindex: number;
	operations: number; // The number of operations in one cycle
	minIndex: number;
	maxIndex: number;

	handleIndex() {
		if (this.Currentindex < this.maxIndex) {
			this.Currentindex++;
		} else {
			this.Currentindex = this.minIndex;
		}
	}

	constructor(operations: number, minIndex: number, maxIndex: number) {
		this.operations = operations;
		this.minIndex = minIndex;
		this.maxIndex = maxIndex;
		this.Currentindex = this.minIndex;
	}
}
