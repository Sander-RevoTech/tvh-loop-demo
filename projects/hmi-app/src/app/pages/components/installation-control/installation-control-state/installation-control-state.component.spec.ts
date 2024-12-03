/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { InstallationControlStateComponent } from "./installation-control-state.component";

describe("InstallationControlStateComponent", () => {
	let component: InstallationControlStateComponent;
	let fixture: ComponentFixture<InstallationControlStateComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InstallationControlStateComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InstallationControlStateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
