/**
* @deprecated
*/
export function downloadBlob(byteData: any, filename = 'file.zip', type = 'application/octet-stream') {
    console.warn("Caution, deprecated function downloadBlob was called. Use downloadByteData methods instead.");
    const blob = new Blob([JSON.stringify(byteData)], {
        type: type
    })
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    document.body.removeChild(link);
}

export function downloadByteData(byteData: any, filename = 'file.zip', type = 'application/octet-stream') {
    const blob = new Blob([JSON.stringify(byteData)], {
        type: type
    });
    download(blob, filename);
}

export function downloadByteDataNoStringify(byteData: any, filename = 'file.zip', type = 'application/octet-stream') {
    const blob = new Blob([byteData], {
        type: type
    });
    download(blob, filename);
}

export function downloadJsonData(jsonData: any, filename = 'file.json', type = 'application/json') {
    const blob = new Blob([JSON.stringify(jsonData)], {
        type: type
    });
    download(blob, filename);
}

export function download(blob: Blob, filename = 'file.zip') {
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    document.body.removeChild(link);
}