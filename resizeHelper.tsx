type ResizeHelper = {
    elementId?: string; // if not set, the window is used
    onResizeX?: () => void;
    onResizeY?: () => void;
    onResize?: () => void;
}

class ResizeLookup {
    public static active: { [lookupKey: string]: ResizeObserver } = {};
}

export function onResize(info: ResizeHelper, timeout?: number): ResizeObserver {
    if (timeout) {
        setTimeout(() => onResize(info), timeout);
        return;
    }
    const element = info.elementId ? document.getElementById(info.elementId) : document.documentElement;
    let lastWidth = element.clientWidth;
    let lastHeight = element.clientHeight;
    function f() {
        if (info.onResizeX && lastWidth !== element.clientWidth) info.onResizeX();
        if (info.onResizeY && lastHeight !== element.clientHeight) info.onResizeY();

        if (info.onResize) info.onResize();
        lastWidth = element.clientWidth;
        lastHeight = element.clientHeight;
    }

    const resizeObserver = new ResizeObserver(f);


    resizeObserver.observe(element);
    const lookupKey = info.elementId || "@@window@@";
    if (lookupKey in ResizeLookup.active) {
        ResizeLookup.active[lookupKey].disconnect();
    }
    ResizeLookup.active[lookupKey] = resizeObserver;
    return resizeObserver;
}

export function removeResizeObserver(elementId?: string): ResizeObserver {
    const lookupKey = elementId || "@@window@@";
    if (!(lookupKey in ResizeLookup.active)) return;
    ResizeLookup.active[lookupKey].disconnect();
    delete ResizeLookup.active[lookupKey];
}
