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