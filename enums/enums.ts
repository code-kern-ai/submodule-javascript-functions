export enum InformationSourceType {
    LABELING_FUNCTION = "LABELING_FUNCTION",
    ACTIVE_LEARNING = "ACTIVE_LEARNING",
    PRE_COMPUTED = "PRE_COMPUTED",
}

export enum LabelSource {
    MANUAL = "MANUAL",
    WEAK_SUPERVISION = "WEAK_SUPERVISION",
    INFORMATION_SOURCE = "INFORMATION_SOURCE",
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
    COMMENTS = 'COMMENTS',
    DRILL_DOWN = 'DRILL_DOWN',
    CATEGORY = 'CATEGORY',
}

export enum StaticOrderByKeys {
    WEAK_SUPERVISION_CONFIDENCE = 'WEAK_SUPERVISION_CONFIDENCE',
    RANDOM = 'RANDOM'
}

export enum InformationSourceReturnType {
    RETURN = "RETURN",
    YIELD = "YIELD"
}

export enum AdminMessageLevel {
    INFO = 'info',
    WARNING = 'warning'
};

// Small letters because of the BE response
export enum FeedbackType {
    POSITIVE = 'positive',
    NEGATIVE = 'negative',
    NEUTRAL = 'neutral'
}

export enum ModelsDownloadedStatus {
    FINISHED = 'finished',
    DOWNLOADING = 'downloading',
    INITIALIZING = 'initializing',
    FAILED = 'failed',
}

export enum IntegrationType {
    GITHUB_ISSUE = 'GITHUB_ISSUE',
    GITHUB_FILE = 'GITHUB_FILE',
    SHAREPOINT = 'SHAREPOINT',
    PDF = 'PDF',
}

export enum UserRole {
    ENGINEER = "ENGINEER",
    EXPERT = "EXPERT",
    ANNOTATOR = "ANNOTATOR",
}
