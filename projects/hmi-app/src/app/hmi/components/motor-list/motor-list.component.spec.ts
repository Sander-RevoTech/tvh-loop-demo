/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MotorListComponent } from "./motor-list.component";

describe("MotorListComponent", () => {
	let component: MotorListComponent;
	let fixture: ComponentFixture<MotorListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MotorListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MotorListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
