export enum InformationSourceType {
    LABELING_FUNCTION = "LABELING_FUNCTION",
    ACTIVE_LEARNING = "ACTIVE_LEARNING",
    PRE_COMPUTED = "PRE_COMPUTED",
    ZERO_SHOT = "ZERO_SHOT",
    CROWD_LABELER = "CROWD_LABELER"
}

export enum DisplayGraphs {
    ALL,
    CONFUSION_MATRIX = "CONFUSION_MATRIX",
    INTER_ANNOTATOR = "INTER_ANNOTATOR",
    LABEL_DISTRIBUTION = "LABEL_DISTRIBUTION",
    CONFIDENCE_DISTRIBUTION = "CONFIDENCE_DISTRIBUTION",
}

export enum LabelSource {
    MANUAL = "MANUAL",
    WEAK_SUPERVISION = "WEAK_SUPERVISION",
    INFORMATION_SOURCE = "INFORMATION_SOURCE",
    MODEL_CALLBACK = "MODEL_CALLBACK",
}

export enum Slice {
    STATIC_DEFAULT = "STATIC_DEFAULT",
    STATIC_OUTLIER = "STATIC_OUTLIER",
    DYNAMIC_DEFAULT = "DYNAMIC_DEFAULT",
}

export enum SearchGroup {
    ATTRIBUTES = 'ATTRIBUTES',
    LABELING_TASKS = 'LABELING_TASKS',
    ORDER_STATEMENTS = 'ORDER_STATEMENTS',
    USER_FILTER = 'USER_FILTER',
    COMMENTS = 'COMMENTS',
    DRILL_DOWN = 'DRILL_DOWN',
}

export enum StaticOrderByKeys {
    MODEL_CALLBACK_CONFIDENCE = "MODEL_CALLBACK_CONFIDENCE",
    WEAK_SUPERVISION_CONFIDENCE = 'WEAK_SUPERVISION_CONFIDENCE',
    RANDOM = 'RANDOM'
}

export enum InformationSourceReturnType {
    RETURN = "RETURN",
    YIELD = "YIELD"
}