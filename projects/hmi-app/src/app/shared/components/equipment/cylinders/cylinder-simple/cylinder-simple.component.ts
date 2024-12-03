import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	AfterViewInit,
	ChangeDetectorRef,
	OnDestroy
} from '@angular/core';

import { Router } from '@angular/router';

import {
	ComponentIdBase,
	ComponentIdService,
	ICylinderSimple,
	ISimpleScanner,
	PlcTagPollingService,
	PlcTagWriteService
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	BoolPlcTag,
	WordlcTag,
	UInt16PlcTag,
	Cylinder_UDT
} from 'plc/PLC_MAIN';

@Component({
	selector: 'app-cylinder-simple',
	templateUrl: './cylinder-simple.component.html',
	styleUrls: ['./cylinder-simple.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class CylinderSimpleComponent extends ComponentIdBase
	implements OnInit, AfterViewInit, OnDestroy {
	alarmActive: WordlcTag;
	goodread: BoolPlcTag;
	badread: BoolPlcTag;

	goodReads: UInt16PlcTag;
	badReads: UInt16PlcTag;

	_cylinder: Cylinder_UDT;
	_cylinderSimple: ICylinderSimple;

	@Input() set settings(value: Cylinder_UDT) {
		if (value) {
			this._cylinder = value;
			this.registerTag();

			this._cylinderSimple = {
				name: this._cylinder.Name.substr(1),
				alarm: this._cylinder._Alarms._Status.Value > 0,
				manualMode:
					this._cylinder._Status._ManualModeActive.Value &&
					!this._cylinder._Status._ManualCommandsDisabled.Value,
				position: this._cylinder._Status._Position.Value as number,
				showManualControl: false
			};
		}
	}

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService
	) {
		super(idService);
	}

	ngOnInit() {}

	ngAfterViewInit() {}

	registerTag() {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
			this.poller.addTag(this._cylinder._Alarms._Status, this);
			this.poller.addTag(this._cylinder._Status._Position, this);
			this.poller.addTag(this._cylinder._Status._ManualModeActive, this);
			this.poller.addTag(this._cylinder._Status._ManualCommandsDisabled, this);
		}
	}

	removeTags() {
		this.poller.removeTag(this._cylinder._Alarms._Status, this);
		this.poller.removeTag(this._cylinder._Status._Position, this);
		this.poller.removeTag(this._cylinder._Status._ManualModeActive, this);
		this.poller.removeTag(this._cylinder._Status._ManualCommandsDisabled, this);
	}

	onClick() {
		this.router.navigate(['cylinder-detail'], {
			queryParams: { id: this._cylinder.Id },
			replaceUrl: false
		});
	}

	ngOnDestroy() {
		this.removeTags();
	}
}
