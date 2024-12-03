export class DateUtils {
	public static getTodayStartTime(): Date {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return today;
	}

	public static getTodayEndTime(): Date {
		const today = new Date();
		today.setHours(23, 59, 59, 999);
		return today;
	}
}
