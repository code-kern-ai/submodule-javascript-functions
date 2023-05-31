export enum FetchType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export function jsonFetchWrapper(url: string, fetchType: FetchType, onResult?: (result: any) => void, body?: BodyInit, headers?: HeadersInit, onError?: (response: any) => void) {
    if (!headers) headers = {};
    headers["Content-Type"] = "application/json";

    let hasError = false;
    let myFetch = fetch(url, {
        method: fetchType,
        headers: headers,
        body: body,
    }).then(response => {
        if (!response.ok) {
            if (onError) onError(response);
            else throw new Error("Error in request at " + url);
            hasError = true;
        }
        else return response.json();
    });

    if (onResult && !hasError) myFetch.then(result => onResult(result));


}