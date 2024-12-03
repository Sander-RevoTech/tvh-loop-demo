/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MotorSimpleComponent } from "./motor-simple.component";

describe("MotorSimpleComponent", () => {
	let component: MotorSimpleComponent;
	let fixture: ComponentFixture<MotorSimpleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MotorSimpleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MotorSimpleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
