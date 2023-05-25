export function jsonCopy(src: any): any {
    return JSON.parse(JSON.stringify(src));
}

export function arrayToDict(array: any[], key: string, targetKey?: string): { [key: string]: any } {
    if (!targetKey) {
        return array.reduce((acc: any, entry: any) => {
            acc[getKeyValue(entry, key)] = entry;
            return acc;
        }, {});
    } else return arrayToDictWithKeys(array, key, [targetKey]);
}

export function arrayToDictWithKeys(array: any[], key: string, targetKey: string[]): { [key: string]: any } {
    if (targetKey.length === 1) {
        return array.reduce((acc: any, entry: any) => {
            acc[getKeyValue(entry, key)] = getKeyValue(entry, targetKey[0]);
            return acc;
        }, {});
    }
    else {
        return array.reduce((acc: any, entry: any) => {
            const target: any = {};
            targetKey.forEach((key: string) => {
                target[getKeyName(key)] = getKeyValue(entry, key);
            });
            acc[getKeyValue(entry, key)] = target;
            return acc;
        }, {});
    }
}

function getKeyValue(obj: any, key: string) {
    const keys = key.split('.');
    let target = obj;
    keys.forEach((key: string) => {
        target = target[key];
    });
    return target;
}

function getKeyName(key: string) {
    const keys = key.split('.');
    return keys[keys.length - 1];
}

export function combineClassNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const TRUE_VALUES = ['true', '1', 'yes', 'y', 'on', 'x'];

export function isStringTrue(value: string): boolean {
    if (!value) return false;
    value = value.toLowerCase();
    return TRUE_VALUES.includes(value);
}

export function copyToClipboard(textToCopy: string) {
    navigator.clipboard.writeText(textToCopy);
}

/**
 * transfer values from dictA to dictB, if the key is not present in dictB, it will be ignored or created.
 * @param  {dictionary[]} dictA holds data that should be transferred.
 * @param  {dictionary[]} dictB holds data that should be overwritten if existing in dictA.
 * @param  {boolean} ignoreNoneExistingKeys - optional - decides weather none existent keys are created or ignored.
 */
export function transferNestedDict(dictA: any, dictB: any, ignoreNoneExistingKeys: boolean = true) {
    if (dictA == null || dictB == null) return;
    if (typeof dictA !== 'object' || typeof dictB !== 'object') return;

    for (let key in dictA) {
        if (dictB[key] == null && ignoreNoneExistingKeys) continue;
        if (typeof dictA[key] === 'object') {
            if (typeof dictB[key] !== 'object') {
                dictB[key] = {};
            }
            transferNestedDict(dictA[key], dictB[key], ignoreNoneExistingKeys);
        } else {
            dictB[key] = dictA[key];
        }
    }
}

export function loopNestedDict(dict: any, callback: (key: string, value: any) => void) {
    for (let key in dict) {
        if (typeof dict[key] === 'object') {
            loopNestedDict(dict[key], callback);
        } else {
            callback(key, dict[key]);
        }
    }
}

export function tryParseJSON(str: string): any {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}