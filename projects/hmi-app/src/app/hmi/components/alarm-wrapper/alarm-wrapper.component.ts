import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { marker as $ } from '@biesbjerg/ngx-translate-extract-marker';

import { IScrollRoute } from '@revotechiscool/revo-tech-core-lib';
import {
	PlcTagPollingService,
	ComponentIdBase,
	ComponentIdService,
	IAlarmTableTitles
} from '@revotechiscool/revo-tech-hmi-lib';
import { Alarms_DB_DB51, EMG_STATUS_DB_DB85, EMG_Status_UDT, HmiAlarm } from 'plc/PLC_MAIN';
import { IPlcDbsMain } from 'plc/plc-collection';

import * as AppStore from '@hmi-app/app-store';
import * as hmiStore from '../../store';
import { pages } from '@hmi-src/app/pages/route-names';
import {
	EAlarmType,
	IConnectionStatus,
	IPlc,
	IPlcWebAlarmDb
} from '@revotechiscool/revo-tech-automation-types';
import { IPlcInterfaceState } from '../../store';
import { state } from '@angular/animations';

@Component({
	selector: 'app-alarm-wrapper',
	templateUrl: './alarm-wrapper.component.html',
	styleUrls: ['./alarm-wrapper.component.scss']
})
export class AlarmWrapperComponent extends ComponentIdBase
	implements OnDestroy {
	plcAlarms: IPlcWebAlarmDb[] = [];
	plcHardwareAlarms: IPlcWebAlarmDb[] = [];
	plcAlarmServerOnline = false;

	plcAlarmTitles: IAlarmTableTitles = {
		activeAlarmsMessage: $('Active PLC alarms'),
		noActiveAlarmsMessage: $('No PLC alarms active'),
		noConnectionMessage: $('No connection to PLC alarm server'),
		title: $('PLC Alarms')
	};

	plcHardwareAlarmTitles: IAlarmTableTitles = {
		activeAlarmsMessage: $('Active PLC Hardware alarms'),
		noActiveAlarmsMessage: $('No PLC Hardware alarms active'),
		noConnectionMessage: $('No connection to PLC alarm server'),
		title: $('PLC Hardware Alarms')
	};

	connectionAlarms: IPlcWebAlarmDb[] = [];
	connectionAlarmsTitles: IAlarmTableTitles = {
		activeAlarmsMessage: $('Active Connection alarms'),
		noActiveAlarmsMessage: '',
		noConnectionMessage: '',
		title: $('Connection Alarms')
	};

	emergencyAlarms: IPlcWebAlarmDb[] = [];
	emergencyAlarmsTitles: IAlarmTableTitles = {
		activeAlarmsMessage: $('Active Emergency alarms'),
		noActiveAlarmsMessage: '',
		noConnectionMessage: '',
		title: $('Emergency Alarms')
	};

	hmiStore$$: Subscription;
	emgDb: EMG_STATUS_DB_DB85;

	constructor(
		private store: Store<AppStore.AppState>,
		private poller: PlcTagPollingService,
		private idService: ComponentIdService,
		private router: Router
	) {
		super(idService);

		this.hmiStore$$ = this.store
			.select('plcInterface')
			.subscribe((state: hmiStore.IPlcInterfaceState) => {
				this.emgDb = state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85;
				this.pollSignals(state);
				this.filterAlarms(state);
				this.buildConnectionAlarms(state);
				this.buildEmergencyAlarms(state);
			});
	}

	ngOnDestroy() {
		this.hmiStore$$.unsubscribe();
		this.poller.removeTag(this.emgDb._EMG_MAIN, this);
		this.poller.removeTag(this.emgDb._EMG_ZONE_1, this);
		this.poller.removeTag(this.emgDb._EMG_ZONE_2, this);
		this.poller.removeTag(this.emgDb._EMG_ZONE_3_4, this);
		this.poller.removeTag(this.emgDb._EMG_ZONE_5, this);
	}

	pollSignals(state: IPlcInterfaceState) {
		if (!this.tagsregisterd) {
			this.tagsregisterd = true;
			this.poller.addTag(
				state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_MAIN,
				this
			);
			this.poller.addTag(
				state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_1,
				this
			);
			this.poller.addTag(
				state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_2,
				this
			);
			this.poller.addTag(
				state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_3_4,
				this
			);
			this.poller.addTag(
				state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_5,
				this
			);
		}
	}

	filterAlarms(state: IPlcInterfaceState) {
		this.plcAlarms = [];
		this.plcHardwareAlarms = [];
		const alarmState = state.activeAlarms;
		//console.log('al');
		for (const al of alarmState) {
			const softwareAlarms = al.alarms.filter(
				a => a.alarmType === EAlarmType.SOFTWARE
			);
			this.plcAlarms = this.plcAlarms.concat(softwareAlarms);

			const hardwareAlarms = al.alarms.filter(
				a => a.alarmType === EAlarmType.HARDWARE
			);
			this.plcHardwareAlarms = this.plcHardwareAlarms.concat(hardwareAlarms);

			this.plcAlarmServerOnline = al.connectionStatus.Connected;
		}
	}

	onPlcAlarmClick(alarm: IPlcWebAlarmDb) {
		if (alarm.info && alarm.info.zoneName && alarm.info.objectName) {
			const params: IScrollRoute = {
				scrollToElement: alarm.info.objectName,
				highlight: true
			};

			//Switch to link the zone name to the correct route :)
			let route = '';

			if (alarm.info.zoneName.includes('100')) {
				route = pages.zone100.name;
			}

			if (alarm.info.zoneName.includes('200')) {
				route = pages.zone200.name;
			}

			if (alarm.info.zoneName.includes('300')) {
				route = pages.zone300.name;
			}

			if (alarm.info.zoneName.includes('400')) {
				route = pages.zone400.name;
			}

			if (alarm.info.zoneName.includes('500')) {
				route = pages.zone500.name;
			}

			if (route.length) {
				this.router.navigate([route], { queryParams: params });
			}
		}
	}

	onEmgAlarmClick() {
		// this.router.navigate([pages.emgOverview]);
	}

	buildEmergencyAlarms(state: IPlcInterfaceState) {
		this.emergencyAlarms = [];
		this.updateEmgStatus(
			state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_MAIN,
			'MAIN CABINET'
		);
		this.updateEmgStatus(
			state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_1,
			'ZONE 1'
		);
		this.updateEmgStatus(
			state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_2,
			'ZONE 2'
		);
		this.updateEmgStatus(
			state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_3_4,
			'ZONE1, ZONE 3, ZONE 4'
		);
		this.updateEmgStatus(
			state.PLCs.plcMain.Dbs.EMG_STATUS_DB_DB85._EMG_ZONE_5,
			'ZONE 5'
		);
	}

	updateEmgStatus(status: EMG_Status_UDT, text: string) {
		if (status._activated.Value) {
			this.emergencyAlarms.push({
				alarmtext:
					'EMG button activated in: ' +
					text +
					' (unlock all EMG buttons and press reset on cabinet)'
			});
		}

		if (status._waitingForReset.Value) {
			this.emergencyAlarms.push({
				alarmtext: 'Waiting For EMG RESET at: ' + text + ' (all buttons are ok)'
			});
		}
	}

	buildConnectionAlarms(state: hmiStore.IPlcInterfaceState) {
		this.connectionAlarms = [];
		const connections = state.connectionsStatus;

		for (const key of Object.keys(state.PLCs)) {
			const plc = state.PLCs[key] as IPlc;
			if (!plc.connected) {
				this.connectionAlarms.push({
					alarmtext: $('Alarm: ') + plc.NAME + $(': not connected')
				});
			}
		}

		for (const key of Object.keys(state.connectionsStatus.clientConnections)) {
			const connection = state.connectionsStatus.clientConnections[
				key
			] as IConnectionStatus;
			if (!connection.Connected) {
				this.connectionAlarms.push({
					alarmtext: connection.ErrorMessage
				});
			}
		}

		for (const connection of connections.dataCollectorConnections) {
			if (state.connectionsStatus.clientConnections.dataCollector.Connected) {
				if (!connection.Connected && connection.Name != 'Alarms server: PLC_Main') {
					this.connectionAlarms.push({
						alarmtext: connection.ErrorMessage
					});
				}
			}
		}
	}
}
