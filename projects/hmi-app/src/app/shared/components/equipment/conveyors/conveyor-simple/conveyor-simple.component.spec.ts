/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ConveyorSimpleComponent } from "./conveyor-simple.component";

describe("ConveyorSimpleComponent", () => {
	let component: ConveyorSimpleComponent;
	let fixture: ComponentFixture<ConveyorSimpleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ConveyorSimpleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConveyorSimpleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
