/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ServersDetailComponent } from "./servers-detail.component";

describe("ServersDetailComponent", () => {
	let component: ServersDetailComponent;
	let fixture: ComponentFixture<ServersDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ServersDetailComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ServersDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
