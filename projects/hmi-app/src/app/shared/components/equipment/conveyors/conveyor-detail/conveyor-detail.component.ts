import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';
import {
	ComponentIdService,
	PlcTagPollingService,
	PlcTagWriteService,
	BoxSettings,
	GridBoxWrappers
} from '@revotechiscool/revo-tech-hmi-lib';

import {
	ILabelLed,
	WARNING_LED,
	ERROR_LED,
	IButton,
	ButtonStates,
	ILabelText,
	LabelLed,
	INFO_LED,
	Button,
	LabelText,
	ButtonsSize,
	InputTypes,
	InputStates,
	LabelInput,
	Unit
} from '@revotechiscool/revo-tech-core-lib';

import * as AppStore from '@hmi-app/app-store';

import { ControlComponentBase } from '@hmi-app/hmi/classes/control-component-base';
import { Conveyor_UDT } from 'plc/PLC_Main';
import { environment } from '@hmi-src/environments/environment';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-conveyor-detail',
	templateUrl: './conveyor-detail.component.html',
	styleUrls: ['./conveyor-detail.component.scss']
})
export class ConveyorDetailComponent extends ControlComponentBase
	implements OnInit, OnDestroy {
	_tag: Conveyor_UDT;

	settingsForm: FormGroup = new FormGroup({});
	trackingId: LabelText;

	bttnInitialize: Button;
	bttnClearTracking: Button;
	bttnEmpty: Button;
	bttnReset: Button;

	_buttons: BoxSettings = {
		row: 0,
		column: 0,
		title: '',
		content: []
	};

	_status1: BoxSettings = {
		row: 0,
		column: 0,
		content: [],
		title: ''
	};

	_status2: BoxSettings = {
		row: 0,
		column: 0,
		content: [],
		title: ''
	};

	_tracking: BoxSettings = {
		row: 0,
		column: 0,
		content: [],
		title: ''
	};

	_alarms: BoxSettings = {
		row: 0,
		column: 0,
		content: [],
		title: ''
	};

	convSettings: BoxSettings;
	encoderSettings: BoxSettings;
	timingsSettings1: BoxSettings;
	timingsSettings2: BoxSettings;
	alarmsSettings: BoxSettings;

	_gridBoxSettings: GridBoxWrappers = {
		boxes: []
	};

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
		super.name = 'not assigned';
		this.initButtons();
		this.init();
	}

	ngOnInit() { }

	initButtons() {
		this.bttnInitialize = new Button({
			value: $('INITALIZE'),
			onActionMouseUp: null,
			onActionMouseDown: () => {
				this.writer.writeTag(this._tag._Cmd._ReInitialize, true);
			},
			state: ButtonStates.warning,
			icon: 'refresh'
		});

		this.bttnClearTracking = new Button({
			value: $('CLEAR TRACKING'),
			onActionMouseUp: null,
			onActionMouseDown: () => {
				this.writer.writeTag(this._tag._TrackingCmd._ClearTracking, true);
			},
			state: ButtonStates.warning,
			icon: 'delete_forever'
		});

		this.bttnEmpty = new Button({
			value: $('EMPTY'),
			onActionMouseDown: () => {
				this.writer.writeTag(this._tag._Cmd._StartRequestObject, true);
			},
			state: ButtonStates.warning,
			icon: 'delete_forever'
		});

		this.bttnReset = new Button({
			value: $('RESET'),
			onActionMouseDown: () => {
				this.writer.writeTag(this._tag._Cmd._Reset, true);
			},
			state: ButtonStates.reset,
			icon: 'refresh'
		});
	}

	checkTagIsValid() {
		if (
			this._tag._Settings._Speed._UpstreamGain.Value !== null ||
			environment.plcConnected
		) {
			this.objectInitialized = true;
		}
	}

	updateProperties() {
		this.name = this._tag.Name;

		this._buttons = new BoxSettings({
			row: 1,
			column: 1,
			title: $('Commands'),
			buttonSize: ButtonsSize.large,
			content: [
				this.bttnInitialize,
				this.bttnClearTracking,
				this.bttnEmpty,
				this.bttnReset
			]
		});

		this._status1 = new BoxSettings({
			row: 1,
			column: 2,
			title: $('Statuses'),
			lines: true,
			content: [
				new LabelLed({
					label: $('Run command auto'),
					ledOnCmd: this._tag._Cmd._RunAuto.Value,
					color: INFO_LED,
					flash: false
				}),
				new LabelLed({
					label: $('Ready to receive'),
					ledOnCmd: this._tag._Cmd._ReadyToReceive.Value,
					flash: false
				}),
				new LabelLed({
					label: $('Ready to sent'),
					ledOnCmd: this._tag._Cmd._ReadyToSent.Value,
					flash: false
				}),
				// new LabelLed({
				// 	// label: $('Accumulation is on'),
				// 	// ledOnCmd: this._tag._Cmd._Accumulate.Value,
				// 	// flash: false
				// }),
				new LabelLed({
					label: $('Interlocked'),
					ledOnCmd: this._tag._Cmd._Interlock.Value,
					color: WARNING_LED,
					flash: false
				})
			]
		});

		this._status2 = new BoxSettings({
			row: 2,
			column: 2,
			title: $('Statuses'),
			lines: true,
			content: [
				new LabelLed({
					label: $('Running feedback'),
					ledOnCmd: this._tag._Input._Running_FB.Value,
					flash: false
				}),
				new LabelLed({
					label: $('Ready for standby'),
					ledOnCmd: this._tag._Status._ReadyForStandby.Value,
					flash: false
				}),
				new LabelLed({
					label: $('Emtpty'),
					ledOnCmd: this._tag._Status._Empty.Value,
					flash: false
				}),
				new LabelLed({
					label: $('Initialized'),
					ledOnCmd: this._tag._Status._Initialized.Value,
					flash: false
				}),
				new LabelLed({
					label: $('Ready for standby'),
					ledOnCmd: this._tag._Status._ReadyForStandby.Value,
					flash: false
				})
			]
		});

		this._alarms = new BoxSettings({
			row: 2,
			column: 3,
			title: $('Alarms'),
			lines: true,
			content: [
				new LabelLed({
					label: $('Alarm Blocked Receive'),
					ledOnCmd: this._tag._Alarms._BlockedReceive._Active.Value,
					color: ERROR_LED,
					flash: false
				}),
				new LabelLed({
					label: $('Alarm Blocked Sending'),
					ledOnCmd: this._tag._Alarms._BlockedSending._Active.Value,
					color: ERROR_LED,
					flash: false
				}),
				new LabelLed({
					label: $('Alarm objects to close'),
					ledOnCmd: this._tag._Alarms._ToClose._Active.Value,
					color: ERROR_LED,
					flash: false
				}),
				new LabelLed({
					label: $('Alarm object to long'),
					ledOnCmd: this._tag._Alarms._ToLong._Active.Value,
					color: ERROR_LED,
					flash: false
				}),
				new LabelLed({
					label: $('Alarm objects to small'),
					ledOnCmd: this._tag._Alarms._ToSmall._Active.Value,
					color: ERROR_LED,
					flash: false
				})
			]
		});

		this.trackingId = new LabelText({
			label: $('Tracking ID'),
			text: this._tag._TrackingStat._Current._ID.Value
		});

		this._tracking = new BoxSettings({
			row: 2,
			column: 1,
			title: $('Tracking'),
			lines: true,
			content: [this.trackingId]
		});

		this.updateSettings();
		this.updateAlarmsSettings();

		this._gridBoxSettings = new GridBoxWrappers([
			this._alarms,
			this._buttons,
			this._tracking,
			this._status2,
			this._status1
			// this.convSettings,
			// this.encoderSettings,
			// this.timingsSettings1,
			// this.timingsSettings2,
			// this.alarmsSettings
		]);

		this.showControl = true;
	}

	updateSettings() {
		this.convSettings = new BoxSettings({
			title: $('Settings'),
			column: 1,
			row: 3,
			content: [
				//Direction
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Direction'),
					actionValue: $('OK'),
					inputValue: Number(this._tag._Settings._Direction.Value),
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Direction.Name,
						minValue: 0,
						maxValue: 1,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Direction,
							Boolean(Number(value))
						);
					}
				}),

				//Speed
				new LabelInput({
					// Speed
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Speed'),
					actionValue: $('OK'),
					inputValue: this._tag._Settings._Speed._speed.Value as number,
					unit: Unit.percentage,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Speed._speed.Name,
						minValue: 0,
						maxValue: 100,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Speed._speed,
							Number(value)
						);
					}
				}),

				//Speed controller
				new LabelInput({
					// Speed Controller
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Speed Controller'),
					actionValue: $('OK'),
					inputValue: Number(this._tag._Settings._Speed._speedController.Value),
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Speed._speedController.Name,
						minValue: 0,
						maxValue: 1,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Speed._speedController,
							Boolean(Number(value))
						);
					}
				}),

				//Mode
				new LabelInput({
					// Mode
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Mode'),
					actionValue: $('OK'),
					inputValue: this._tag._Settings._Mode.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Mode.Name,
						minValue: 0,
						maxValue: 5,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(this._tag._Settings._Mode, Number(value));
					}
				})
			]
		});

		this.encoderSettings = new BoxSettings({
			title: $('Encoder Settings'),
			column: 2,
			row: 3,
			content: [
				// Relative speed encoder
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Relative speed'),
					actionValue: $('OK'),
					unit: 'm/min' as Unit,
					inputValue: this._tag._Encoder._Settings._BaseRelative
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Encoder._Settings._BaseRelative.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Encoder._Settings._BaseRelative,
							Number(value)
						);
					}
				}),

				// Encoder Base relative %
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Relative speed'),
					actionValue: $('OK'),
					unit: Unit.percentage,
					inputValue: this._tag._Encoder._Settings._BaseRelative
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Encoder._Settings._BaseRelative.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Encoder._Settings._BaseRelative,
							Number(value)
						);
					}
				})
			]
		});

		this.timingsSettings1 = new BoxSettings({
			title: $('Timings'),
			column: 0,
			row: 4,
			content: [
				// Conveyor length
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Conveyor Length'),
					actionValue: $('OK'),
					unit: Unit.milliMeter,
					inputValue: this._tag._Settings._Timings._ConveyorLength
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Timings._ConveyorLength.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Timings._ConveyorLength,
							Number(value)
						);
					}
				}),

				// Init distance
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Init Distance'),
					actionValue: $('OK'),
					unit: Unit.milliMeter,
					inputValue: this._tag._Settings._Timings._InitDistance
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Timings._InitDistance.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Timings._InitDistance,
							Number(value)
						);
					}
				}),

				// Gap time
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Gap Distance'),
					actionValue: $('OK'),
					unit: Unit.milliMeter,
					inputValue: this._tag._Settings._Timings._GapDistance.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Timings._GapDistance.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Timings._GapDistance,
							Number(value)
						);
					}
				})
			]
		});

		this.timingsSettings2 = new BoxSettings({
			title: $('Timings'),
			column: 1,
			row: 4,
			content: [
				// Recieve hold on
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Receive distance'),
					actionValue: $('OK'),
					unit: Unit.milliMeter,
					inputValue: this._tag._Settings._Timings._ReceiveDistance
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Timings._ReceiveDistance.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Timings._ReceiveDistance,
							Number(value)
						);
					}
				}),

				// Sent hold on
				new LabelInput({
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Sent Distance'),
					actionValue: $('OK'),
					unit: Unit.milliMeter,
					inputValue: this._tag._Settings._Timings._SendDistance
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Timings._SendDistance.Name,
						minValue: 0,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Timings._SendDistance,
							Number(value)
						);
					}
				})
			]
		});
	}

	updateAlarmsSettings() {
		this.alarmsSettings = new BoxSettings({
			title: $('Alarms Settings'),
			column: 3,
			row: 3,
			content: [
				new LabelInput({
					// BLOCK RETRYS
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Block detection'),
					actionValue: $('OK'),
					inputValue: Number(
						this._tag._Settings._Alarms._BlockDetectionOn.Value
					),
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Alarms._BlockDetectionOn.Name,
						minValue: 0,
						maxValue: 1,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Alarms._BlockDetectionOn,
							Boolean(Number(value))
						);
					}
				}),
				new LabelInput({
					// BLOCK RETRYS
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Block retrys'),
					actionValue: $('OK'),
					inputValue: this._tag._Settings._Alarms._BlockRetrys.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Alarms._BlockRetrys.Name,
						minValue: 0,
						maxValue: 10,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Alarms._BlockRetrys,
							Number(value)
						);
					}
				}),
				new LabelInput({
					// Sent time error
					inputType: InputTypes.number,
					state: InputStates.success,
					label: $('Alarm Time sending (sent time)'),
					actionValue: $('OK'),
					inputValue: this._tag._Settings._Alarms._SentTimeError
						.Value as number,
					validations: {
						form: this.settingsForm,
						key: this._tag._Settings._Alarms._SentTimeError.Name,
						maxValue: 300 * 1000,
						numberStep: 1
					},
					onActionClick: (value: any) => {
						this.writer.writeTag(
							this._tag._Settings._Alarms._SentTimeError,
							Number(value)
						);
					}
				})
			]
		});
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}
}
