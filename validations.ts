export function isNameValidForInput(name: string | undefined | null , regexCheck: boolean = false): boolean {
    if (regexCheck) return !!name && name.replace(/\s/g,'') != "";
    else return !!name && name.trim() != "";
}