import { DisplayGraphs, InformationSourceType, LabelSource } from "./enums";

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
            case LabelSource.MODEL_CALLBACK: return "Model Callback";
            case LabelSource.INFORMATION_SOURCE: return "Information Source";
            default: return source;
        }
    }
    return source;
}