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