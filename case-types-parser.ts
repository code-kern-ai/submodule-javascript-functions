import { isDict } from "./general";

export function capitalizeFirstPerWord(str: string) {
    str = str.replace(/_/g, ' ');
    const parts = str.split(" ");
    for (let i = 0; i < parts.length; i++) {
        parts[i] = capitalizeFirst(parts[i]);
    }
    return parts.join(" ");
}

export function capitalizeFirst(str: string) {
    str = str.replace(/_/g, ' ');
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function capitalizeFirstForClassName(str: string) {
    if (str.indexOf(" ") == -1) return str.charAt(0).toUpperCase() + str.slice(1);
    const parts = str.split(" ");
    for (let i = 0; i < parts.length; i++) {
        if (i == parts.length - 1) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1).toLowerCase(); // if space, replace the last part it with a capital letter
        else parts[i] = parts[i];
    }
    return parts.join("");
}

function toSnakeCase(key) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export function convertCamelToSnakeCase(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        const newKey = toSnakeCase(key);
        const value = obj[key];
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            newObj[newKey] = convertCamelToSnakeCase(value);
        } else {
            newObj[newKey] = value;
        }
    });
    return newObj;
}

export function camelCaseToDashCase(str: string) {
    return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}

export function snakeCaseToCamelCase(str: string) {
    return str.toLowerCase().replace(/([_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('_', '')
    );
}

export function convertVarToCamel(obj: any) {
    if (isDict(obj)) {
        const n = {};
        Object.keys(obj)
            .forEach((k) => {
                n[snakeCaseToCamelCase(k)] = convertVarToCamel(obj[k]);
            });

        return n;
    } else if (Array.isArray(obj)) {
        return obj.map((i) => {
            return convertVarToCamel(i);
        });
    }

    return obj;
}

export enum caseType {
    LOWER,
    UPPER,
    CAPITALIZE_FIRST,
    CAPITALIZE_FIRST_PER_WORD
}