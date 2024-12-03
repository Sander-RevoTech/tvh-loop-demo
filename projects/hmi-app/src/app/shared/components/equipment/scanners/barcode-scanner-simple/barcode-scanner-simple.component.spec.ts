/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { BarcodeScannerSimpleComponent } from "./barcode-scanner-simple.component";

describe("BarcodeScannerSimpleComponent", () => {
	let component: BarcodeScannerSimpleComponent;
	let fixture: ComponentFixture<BarcodeScannerSimpleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BarcodeScannerSimpleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BarcodeScannerSimpleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
