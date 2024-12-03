import { Component, OnInit } from '@angular/core';
import {
	colNameActiveAlarms,
	colNameAlarmLog
} from '@revotechiscool/revo-tech-automation-types';

@Component({
	selector: 'app-maintenance',
	templateUrl: './maintenance.component.html',
	styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
	readonly plcwebAlarmsRout = '/' + colNameActiveAlarms;
	readonly colNameAlarmLog = '/' + colNameAlarmLog;

	constructor() {}

	ngOnInit() {}
}
