import { jsonCopy } from "./general";

export function postProcessRecord(record: any, attributes: any[]) {
    const prepareRecord = jsonCopy(record);
    if (!prepareRecord.hasOwnProperty('data')) {
        if (prepareRecord.hasOwnProperty('fullRecordData')) {
            prepareRecord.data = prepareRecord.fullRecordData;
        }
        else if (prepareRecord.hasOwnProperty('recordData')) {
            prepareRecord.data = prepareRecord.recordData;
        } else {
            throw new Error("Cant find record data in record object");
        }
    }
    attributes.forEach((attribute, index) => {
        if (typeof prepareRecord.data[attribute.name] === 'boolean') {
            prepareRecord.data[attribute.name] = prepareRecord.data[attribute.name].toString();
        }
    });
    return prepareRecord;
}

export function postProcessAttributes(attributes: any[]) {
    const prepareAttributes = jsonCopy(attributes);
    if (attributes && attributes.length > 0) {
        if (!attributes[0].hasOwnProperty('key')) {
            prepareAttributes.forEach((attribute, index) => {
                if (attribute.id !== null) {
                    attribute.key = attribute.id;
                } else {
                    throw new Error("Cant find attribute id in attribute object");
                }
            });
        }
    }
    return prepareAttributes;
}

export function postProcessUpdateAndSortRecords(prev: any[], newRecords: any[]) {
    const merged = [...prev, ...newRecords];
    const uniqueRecords = Array.from(
        new Map(merged.map((item) => [item.data?.running_id, item])).values()
    );
    uniqueRecords.sort(
        (a, b) => (a.data?.running_id || 0) - (b.data?.running_id || 0)
    );
    return uniqueRecords;
}