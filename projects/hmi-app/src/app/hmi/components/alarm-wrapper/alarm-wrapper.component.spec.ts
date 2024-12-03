/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { AlarmWrapperComponent } from "./alarm-wrapper.component";

describe("AlarmTableComponent", () => {
	let component: AlarmWrapperComponent;
	let fixture: ComponentFixture<AlarmWrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AlarmWrapperComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AlarmWrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
