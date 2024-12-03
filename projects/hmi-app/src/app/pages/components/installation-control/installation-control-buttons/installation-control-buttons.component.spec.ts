/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { InstallationControlButtonsComponent } from "./installation-control-buttons.component";

describe("InstallationControlButtonsComponent", () => {
	let component: InstallationControlButtonsComponent;
	let fixture: ComponentFixture<InstallationControlButtonsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InstallationControlButtonsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InstallationControlButtonsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
