import { InformationSourceType } from "./enums";

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
