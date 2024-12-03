/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { InstallationControlComponent } from "./installation-control.component";

describe("InstallationControlComponent", () => {
	let component: InstallationControlComponent;
	let fixture: ComponentFixture<InstallationControlComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InstallationControlComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InstallationControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
