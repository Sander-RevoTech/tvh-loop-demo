/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ConveyorDetailComponent } from "./conveyor-detail.component";

describe("ConveyorDetailComponent", () => {
	let component: ConveyorDetailComponent;
	let fixture: ComponentFixture<ConveyorDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ConveyorDetailComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConveyorDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
