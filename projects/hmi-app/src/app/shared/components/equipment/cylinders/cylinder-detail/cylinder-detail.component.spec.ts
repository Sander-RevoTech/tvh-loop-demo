/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NordDriveDetailComponent } from "./cylinder-detail.component";

describe("NordDriveDetailComponent", () => {
	let component: NordDriveDetailComponent;
	let fixture: ComponentFixture<NordDriveDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NordDriveDetailComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NordDriveDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
