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
    if (!dateStr) return null;
    const fixed = dateStr.replace(/(\.\d{3})\d+/, '$1');
    return new Date(fixed + 'Z').getTime();
}

export function formatDisplayTimestamp(createdAt: string): string {
    if (!createdAt) return "<unknown>";
    const date = parseUTCToLocal(createdAt);
    const now = new Date();

    const isSameDay = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    if (isSameDay(date, now)) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    if (isSameDay(date, yesterday)) {
        return "Yesterday";
    }

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = weekdays[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);

    return `${weekday}, ${day}.${month}.${year}`;
}

export function parseUTCToLocal(dateString: string): Date {
    const d = new Date(dateString);

    if (!/[zZ]|[+-]\d{2}:?\d{2}$/.test(dateString)) {
        const parts = dateString.split(/[-T: ]/).map(Number);
        return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4] || 0, parts[5] || 0));
    }

    return d;
}

export function formatDisplayTimestampFull(createdAt: string): string {
    const date = parseUTCToLocal(createdAt);
    const now = new Date();

    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = weekdays[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().padStart(4, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    let relative = "";
    if (diffMinutes < 1) {
        relative = "(just now)";
    } else if (diffMinutes < 60) {
        relative = `(${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago)`;
    } else if (diffHours < 24) {
        relative = `(${diffHours} hour${diffHours !== 1 ? "s" : ""} ago)`;
    } else if (diffDays === 1) {
        relative = `(yesterday)`;
    } else {
        relative = `(${diffDays} day${diffDays !== 1 ? "s" : ""} ago)`;
    }

    return `${weekday}, ${day}.${month}.${year} ${hours}:${minutes} ${relative}`;
}