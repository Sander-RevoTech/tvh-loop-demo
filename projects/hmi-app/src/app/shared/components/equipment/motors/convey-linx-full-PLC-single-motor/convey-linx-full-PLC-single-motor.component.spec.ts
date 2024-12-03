/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ConveyLinxFullPLCSingleMotorComponent } from "./convey-linx-full-PLC-single-motor.component";

describe("ConveyLinxFullPLCSingleMotorComponent", () => {
	let component: ConveyLinxFullPLCSingleMotorComponent;
	let fixture: ComponentFixture<ConveyLinxFullPLCSingleMotorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ConveyLinxFullPLCSingleMotorComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConveyLinxFullPLCSingleMotorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
