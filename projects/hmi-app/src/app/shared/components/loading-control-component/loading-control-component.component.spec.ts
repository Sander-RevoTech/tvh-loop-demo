/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { LoadingControlComponentComponent } from "./loading-control-component.component";

describe("LoadingControlComponentComponent", () => {
	let component: LoadingControlComponentComponent;
	let fixture: ComponentFixture<LoadingControlComponentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LoadingControlComponentComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadingControlComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
