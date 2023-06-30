
class IdGenerator {
    private static id: number = 0;
    public static getNextId() {
        return ++IdGenerator.id;
    }
}

export function extendArrayElementsByUniqueId(arr: any[]): any[] {
    if (!arr || arr.length == 0) return [];
    const firstElement = arr[0];

    if (typeof firstElement === 'object') {
        arr.forEach((element: any) => {
            if (!element.id) {
                element.id = IdGenerator.getNextId();
            }
        });
        return arr;
    } else {
        return arr.map((element: any) => { return { value: element, id: IdGenerator.getNextId() } });
    }

}