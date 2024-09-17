import { DisplayGraphs, InformationSourceType, LabelSource, SearchGroup, Slice, StaticOrderByKeys } from "./enums";

export function informationSourceTypeToString(source: InformationSourceType, short: boolean, forDisplay: boolean = true) {
    if (forDisplay) {
        switch (source) {
            case InformationSourceType.LABELING_FUNCTION: return short ? "LF" : "Labeling Function module";
            case InformationSourceType.ACTIVE_LEARNING: return short ? "AL" : "Active Learning module";
            case InformationSourceType.PRE_COMPUTED: return short ? "PC" : "Pre Computed module";
            default: return source;
        }
    }
    return source;
}

export function displayGraphsTypeToString(source: DisplayGraphs) {
    switch (source) {

        case DisplayGraphs.CONFUSION_MATRIX: return "Confusion Matrix";
        case DisplayGraphs.INTER_ANNOTATOR: return "Inter Annotator";
        case DisplayGraphs.LABEL_DISTRIBUTION: return "Label Distribution";
        case DisplayGraphs.CONFIDENCE_DISTRIBUTION: return "Confidence Distribution";
        case DisplayGraphs.ALL: return "All";
        default: return source;
    }
}

export function labelSourceToString(source: LabelSource, forDisplay: boolean = true) {
    if (forDisplay) {
        switch (source) {
            case LabelSource.MANUAL: return "Manual";
            case LabelSource.WEAK_SUPERVISION: return "Weak Supervision";
            case LabelSource.INFORMATION_SOURCE: return "Information Source";
            default: return source;
        }
    }
    return source;
}


export function sliceTypeToString(sliceType: string): string {
    switch (sliceType) {
        case Slice.STATIC_DEFAULT:
            return 'Static Slice';
        case Slice.STATIC_OUTLIER:
            return 'Outlier Slice';
        case Slice.DYNAMIC_DEFAULT:
            return 'Dynamic Slice';
        default: return sliceType;
    }
}

export function nameForGroupKeyToString(group: SearchGroup): string {
    switch (group) {
        case SearchGroup.ATTRIBUTES:
            return 'Attributes';
        case SearchGroup.USER_FILTER:
            return 'Users';
        case SearchGroup.LABELING_TASKS:
            return 'Labeling task:';
        case SearchGroup.ORDER_STATEMENTS:
            return 'Result Order';
        case SearchGroup.COMMENTS:
            return 'Comments';
        default: return group;
    }
}

export function getOrderByDisplayName(orderByKey: string) {
    switch (orderByKey) {
        case StaticOrderByKeys.RANDOM: return "Random";
        case StaticOrderByKeys.WEAK_SUPERVISION_CONFIDENCE: return "Weak Supervision Confidence";
        default: return orderByKey; //attributes
    }
}