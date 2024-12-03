import { OnInit, OnDestroy, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import * as AppStore from '@hmi-app/app-store';

import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	CommandsSettings,
	IButtonStartStop
} from '@revotechiscool/revo-tech-hmi-lib';
import {
	IButton,
	ButtonStates,
	ILabelInput,
	InputTypes,
	InputStates,
	ILabelText,
	Unit,
	LabelInput,
	LabelText,
	Button
} from '@revotechiscool/revo-tech-core-lib';

import { IMotor } from './motor.base';
import { ControlComponentBase } from './control-component-base';
import { settings } from 'cluster';
import { FormControl, FormGroup } from '@angular/forms';

@Directive()
export class MotorBaseControl extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: IMotor;
	commands: CommandsSettings;
	showDirectionButtons = true;
	startButton: IButton;
	stopButton: IButton;
	leftBttn: IButton;
	rightBttn: IButton;
	resetBttn: IButton;

	speedManual: LabelInput;
	speedAuto: LabelText;
	buttonStartStopGroupd: IButtonStartStop;

	form = new FormGroup({});

	constructor(
		protected router: Router,
		protected idService: ComponentIdService,
		protected poller: PlcTagPollingService,
		protected writer: PlcTagWriteService,
		protected location: Location,
		protected activatedRoute: ActivatedRoute,
		protected store: Store<AppStore.AppState>
	) {
		super(router, idService, poller, writer, location, activatedRoute, store);
		this.initCoreComponents();
		this.init();
	}

	initCoreComponents() {
		this.startButton = new Button({
			value: $('START'),
			state: ButtonStates.success,
			onActionMouseDown: this.startPressed.bind(this),
			onActionMouseUp: () => {},
			icon: 'play_arrow'
		});

		this.stopButton = new Button({
			value: $('STOP'),
			onActionMouseDown: this.stopPressed.bind(this),
			onActionMouseUp: () => {},
			state: ButtonStates.error,
			icon: 'stop'
		});

		this.leftBttn = new Button({
			value: $('LEFT'),
			onActionMouseDown: this.directionLefPressed.bind(this),
			onActionMouseUp: () => {},
			state: ButtonStates.success,
			icon: 'keyboard_arrow_left'
		});

		this.rightBttn = new Button({
			value: $('RIGHT'),
			onActionMouseDown: this.directionRightPressed.bind(this),
			onActionMouseUp: () => {},
			state: ButtonStates.success,
			icon: 'keyboard_arrow_right'
		});

		this.resetBttn = new Button({
			value: $('RESET'),
			onActionMouseDown: this.resetPressed.bind(this),
			onActionMouseUp: () => {},
			state: ButtonStates.reset,
			icon: 'sync'
		});

		this.speedManual = new LabelInput({
			inputType: InputTypes.number,
			state: InputStates.success,
			inputValue: 0,
			unit: Unit.percentage,
			label: $('Speed manual'),
			onActionClick: this.updateSpeedManaul.bind(this),
			validations: {
				form: this.form,
				key: 'speed_manual',
				required: true,
				minValue: 0,
				maxValue: 100,
				numberStep: 0
			}
		});

		this.speedAuto = new LabelText({
			text: 0,
			label: $('Speed auto'),
			unit: Unit.percentage
		});
	}

	ngOnInit() {}

	updateProperties() {
		this.commands = new CommandsSettings({
			startStop: { startbttn: this.startButton, stopbttn: this.stopButton },
			direction: {
				bttnLeft: this.leftBttn,
				bttnRight: this.rightBttn,
				show: this.showDirectionButtons
			},
			bttnReset: { ...this.resetBttn },
			manualModeActive: this._tag._Status._ManualModeActive.Value as boolean,
			speedControl: this._tag._Status._ManualModeActive.Value
				? { ...this.speedManual }
				: { ...this.speedAuto }
		});

		this.showControl = true;
	}

	startPressed() {}

	stopPressed() {}

	directionLefPressed() {}

	directionRightPressed() {}

	resetPressed() {
		this.writer.writeTag(this.resetTag, true);
	}

	updateSpeedManaul(value: number) {}
}
