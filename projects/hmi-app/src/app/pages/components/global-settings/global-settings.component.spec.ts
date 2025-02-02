/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { GlobalSettingsComponent } from "./global-settings.component";

describe("GlobalSettingsComponent", () => {
	let component: GlobalSettingsComponent;
	let fixture: ComponentFixture<GlobalSettingsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GlobalSettingsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GlobalSettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
