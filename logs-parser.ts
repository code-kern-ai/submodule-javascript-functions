export enum InformationSourceType {
    LABELING_FUNCTION = "LABELING_FUNCTION",
    ACTIVE_LEARNING = "ACTIVE_LEARNING",
    PRE_COMPUTED = "PRE_COMPUTED",
    ZERO_SHOT = "ZERO_SHOT",
    CROWD_LABELER = "CROWD_LABELER"
}

export function informationSourceTypeToString(source: InformationSourceType, short: boolean, forDisplay: boolean = true) {
    if (forDisplay) {
        switch (source) {
            case InformationSourceType.LABELING_FUNCTION: return short ? "LF" : "Labeling Function module";
            case InformationSourceType.ACTIVE_LEARNING: return short ? "AL" : "Active Learning module";
            case InformationSourceType.PRE_COMPUTED: return short ? "PC" : "Pre Computed module";
            case InformationSourceType.ZERO_SHOT: return short ? "ZS" : "Zero Shot module";
            case InformationSourceType.CROWD_LABELER: return short ? "CL" : "Crowd labeler";
            default: return source;
        }
    }
    return source;
}

export function parseLogData(logs: string[], isType: InformationSourceType = null) {
    if (!logs) {
        if (isType) return [`Running ${informationSourceTypeToString(isType, false)}...`];
        else return null;
    }
    if (!Array.isArray(logs)) return null;
    if (logs.length == 0) return [];

    let neededIDLength = String(logs.length)?.length;
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