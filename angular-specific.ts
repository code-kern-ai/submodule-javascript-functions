import { ActivatedRoute } from "@angular/router";

export function findProjectIdFromRoute(route: ActivatedRoute): string {
    while (route.parent) {
        route = route.parent;
        if (route.snapshot.params.projectId) {
            return route.snapshot.params.projectId;
        }
    }
    return null;
}