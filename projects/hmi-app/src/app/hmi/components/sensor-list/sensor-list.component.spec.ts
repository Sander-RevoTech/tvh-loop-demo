/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SensorListComponent } from "./sensor-list.component";

describe("SensorListComponent", () => {
	let component: SensorListComponent;
	let fixture: ComponentFixture<SensorListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SensorListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SensorListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
