export function dateAsUTCDate(date: Date) {
    if (!date) return new Date();
    let d = new Date();
    d.setUTCFullYear(date.getFullYear());
    d.setUTCMonth(date.getMonth());
    d.setUTCDate(date.getDate());
    d.setUTCHours(date.getHours());
    d.setUTCMinutes(date.getMinutes());
    d.setUTCSeconds(date.getSeconds());
    return d;
}

export function parseUTC(utc: string, onlyDate: boolean = false) {
    if (!utc) return '';
    const utcDate = dateAsUTCDate(new Date(utc));
    if (!utcDate) return '';
    if (onlyDate) return utcDate.toLocaleDateString();
    return utcDate.toLocaleString();
}

export function parseUTCToInputValue(utc: string) {
    const utcDate = dateAsUTCDate(new Date(utc));
    if (!utcDate) return '';
    return utcDate.toISOString().slice(0, 10);
}

export function isValidDate(date: string) {
    if (isNaN(Date.parse(date))) return false;
    const d = new Date(date);
    return d.getFullYear() < 2100;
}

export function timeDiffCalc(dateA: any, dateB: any = Date.now()) {
    return new Date(Math.abs(dateB - dateA)).toISOString().substring(11, 19);
}

export function formatTimeDigitalClock(s: number) {
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export function parseTaskDate(dateStr: string): number {
    const fixed = dateStr.replace(/(\.\d{3})\d+/, '$1');
    return new Date(fixed + 'Z').getTime();
}