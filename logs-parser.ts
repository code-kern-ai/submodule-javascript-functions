import { informationSourceTypeToString } from "./enums/enum-functions";
import { InformationSourceType } from "./enums/enums";

export function parseContainerLogsData(logs: string[], isType: InformationSourceType = null) {
    if (!logs) {
        if (isType) return [`Running ${informationSourceTypeToString(isType, false)}...`];
        else return null;
    }
    if (!Array.isArray(logs)) return null;
    if (logs.length == 0) return [];

    const neededIDLength = String(logs.length)?.length;
    return logs.map((wrapper, index) => {
        const d: Date = new Date(wrapper.substr(0, wrapper.indexOf(' ')));
        if (isNaN(d.getTime())) return wrapper;
        return (
            String(index + 1).padStart(neededIDLength, '0') +
            ': ' +
            d.toLocaleString() +
            ' - ' +
            wrapper.substr(wrapper.indexOf(' ') + 1)
        );
    });
}