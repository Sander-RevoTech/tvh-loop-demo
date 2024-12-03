/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { HmiWrapperComponent } from "./hmi-wrapper.component";

describe("HmiWrapperComponent", () => {
	let component: HmiWrapperComponent;
	let fixture: ComponentFixture<HmiWrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HmiWrapperComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HmiWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
