import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	OnDestroy
} from '@angular/core';
import { Router, RouterEvent, ChildActivationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { detect } from 'detect-browser';
import { Observable } from 'rxjs';

import * as AppStore from '@hmi-app/app-store';
import * as HmiStore from '@hmi-app/hmi';
import * as AuthStore from '@hmi-app/auth/store';

import {
	ILabelLed,
	WARNING_LED,
	INFO_LED,
	ILanguage
} from '@revotechiscool/revo-tech-core-lib';
import { GlobalApplicationStatus_UDT } from 'plc/PLC_MAIN';
import {
	PlcTagPollingService,
	ComponentIdBase,
	ComponentIdService
} from '@revotechiscool/revo-tech-hmi-lib';
import { Elanguage } from '@revotechiscool/revo-tech-core-types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ComponentIdBase
	implements OnInit, OnDestroy {
	_hideHamburger: boolean;
	@Input() onBurgerMenuClick: Function;
	@Input() set hideHamburger(value: boolean) {
		this._hideHamburger = value;
	}

	screenName = '';
	mobile: Boolean;
	now = new Date();
	userLoggedIn: Boolean;
	userName: String;

	warningLed: ILabelLed = {
		ledOnCmd: false,
		color: WARNING_LED
	};

	infoLed: ILabelLed = {
		ledOnCmd: false,
		color: INFO_LED
	};

	alarmActive = false;
	pollingFlag = false;
	chrome: Boolean = detect().name === 'chrome';
	plcState: GlobalApplicationStatus_UDT;

	allConnectionsOnline: boolean;

	private subscription: Subscription;
	private authSubscription: Subscription;

	languages: ILanguage[] = [
		{ label: 'ENG', lang: Elanguage.enUS },
		{ label: 'FRA', lang: Elanguage.frBE }
	];

	constructor(
		private store: Store<AppStore.AppState>,
		private router: Router,
		private idService: ComponentIdService,
		private poller: PlcTagPollingService,
		private mediaMatcher: MediaMatcher,
		overlayContainer: OverlayContainer
	) {
		super(idService);
		this.activateMobileLayout();
		// overlayContainer.getContainerElement().classList.add('light-theme');
		setInterval(() => {
			this.now = new Date();
		}, 1);

		this.subscription = this.store
			.select('plcInterface')
			.subscribe((state: HmiStore.IPlcInterfaceState) => {
				if (state.initialized) {
					this.allConnectionsOnline = state.connectionsStatus.allOnline;
					this.plcState =
						state.PLCs.plcMain.Dbs.ApplicationState_DB_DB13._GlobalState;

					if (!this.pollingFlag) {
						this.poller.addTag(this.plcState, this);
						this.pollingFlag = true;
					}
					this.alarmActive = this.plcState._States._AlarmActive
						.Value as boolean;
					this.infoLed = {
						...this.infoLed,
						ledOnCmd: this.plcState._States._AutoMode.Value as boolean
					};
					this.warningLed = {
						...this.warningLed,
						ledOnCmd: this.plcState._States._EmptyMode.Value as boolean
					};
					this.alarmActive = this.plcState._States._AlarmActive
						.Value as boolean;
					this.infoLed = {
						...this.infoLed,
						ledOnCmd: this.plcState._States._AutoMode.Value as boolean
					};
					this.warningLed = {
						...this.warningLed,
						ledOnCmd: this.plcState._States._EmptyMode.Value as boolean
					};
				}
			});

		this.authSubscription = this.store
			.select('authInterface')
			.subscribe((state: AuthStore.IAuthState) => {
				this.userLoggedIn = state.authenticated;
				this.userName = state.user && state.user.name;
			});
	}

	ngOnInit(): void {
		this.getScreenName();
	}

	activateMobileLayout() {
		const mediaQuery = this.mediaMatcher.matchMedia('(max-width: 800px)');
		this.mobile = mediaQuery.matches;
		mediaQuery.addListener(e => {
			this.mobile = e.matches;
		});
	}

	handleBurgerMenuClick() {
		if (this.onBurgerMenuClick) {
			this.onBurgerMenuClick();
		}
	}

	getScreenName() {
		this.router.events.subscribe((e: RouterEvent) => {
			if (e instanceof ChildActivationEnd) {
				const event = e as ChildActivationEnd;
				// Lets target the last child
				let lastChildFound = false;
				let child = e.snapshot.firstChild;
				while (!lastChildFound) {
					if (child.firstChild) {
						child = child.firstChild;
					} else {
						this.screenName = child.data.title
							? child.data.title
							: 'No title configured';
						lastChildFound = true;
					}
				}
			}
		});
	}

	login() {
		this.router.navigate(['login']);
	}

	logout() {
		this.store.dispatch(new AuthStore.Logout());
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		this.authSubscription.unsubscribe();
		this.poller.removeTag(this.plcState, this);
	}
}
