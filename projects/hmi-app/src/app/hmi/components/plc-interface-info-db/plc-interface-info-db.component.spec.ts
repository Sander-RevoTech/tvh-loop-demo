/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PlcInterfaceInfoDbComponent } from "./plc-interface-info-db.component";

describe("PlcInterfaceInfoDbComponent", () => {
	let component: PlcInterfaceInfoDbComponent;
	let fixture: ComponentFixture<PlcInterfaceInfoDbComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlcInterfaceInfoDbComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlcInterfaceInfoDbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
