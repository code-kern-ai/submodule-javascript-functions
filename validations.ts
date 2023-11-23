export function isNameValidForInput(name: string | undefined | null, regexCheck: boolean = false): boolean {
    if (regexCheck) return !!name && name.replace(/\s/g, '') != "";
    else return !!name && name.trim() != "";
}



// multiple are considered AND connected
export enum CompareOptions {
    IGNORE_CASE, // compares string and string list in lower case
    TRIM,  // trims string and string list
    STARTS_WITH, //some start with string
    ENDS_WITH, //some end with string
    CONTAINS, //some contain string
    EQUAL //some are equal to string
}

export function inStringList(value: string, list: string[], compareOptions?: CompareOptions[]): boolean {
    if (!value || !list || list.length === 0) return false;
    if (!compareOptions) return list.includes(value);

    const [finalValue, finalList] = applyCompareOptions(value, list, compareOptions);
    return finalList.some((item) => {
        let result = true;
        if (compareOptions.includes(CompareOptions.STARTS_WITH)) result = result && finalValue.startsWith(item);
        if (compareOptions.includes(CompareOptions.ENDS_WITH)) result = result && finalValue.endsWith(item);
        if (compareOptions.includes(CompareOptions.CONTAINS)) result = result && finalValue.includes(item);
        if (compareOptions.includes(CompareOptions.EQUAL)) result = result && item === finalValue;

        if (result) return true;
    });

}

function applyCompareOptions(value: string, list: string[], compareOptions?: CompareOptions[]): [string, string[]] {
    if (compareOptions) {
        if (compareOptions.includes(CompareOptions.IGNORE_CASE)) {
            value = value.toLowerCase();
            list = list.map((item) => item.toLowerCase());
        }
        if (compareOptions.includes(CompareOptions.TRIM)) {
            value = value.trim();
            list = list.map((item) => item.trim());
        }
    }
    return [value, list];
}