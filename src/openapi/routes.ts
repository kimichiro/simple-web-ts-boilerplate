export interface RoutePath {
    path: string
}

export type RouteOperation = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'

export interface RouteEndpoint {
    path: string

    get?: RouteOperationHandler
    put?: RouteOperationHandler
    post?: RouteOperationHandler
    delete?: RouteOperationHandler
    options?: RouteOperationHandler
    head?: RouteOperationHandler
    patch?: RouteOperationHandler
    trace?: RouteOperationHandler
}

export interface RouteOperationHandler {
    id: string
    thisObject: Object
    functionName: string
    function: Function
    parameters: RouteOperationParameter[]
}

export interface RouteOperationParameter {
    name: string
    index: number
    // type: 
}

export class RouteDescriptor {
    constructor(
        private readonly routePathMap = new Map<Function, RoutePath>(),
        private readonly routeEndpointMap = new Map<Function, RouteEndpoint[]>(),
    ) {}

    get routeEndpoints(): RouteEndpoint[] {
        let allEndpoints: RouteEndpoint[] = []
        for (const [constructor, routeEndpoints] of this.routeEndpointMap.entries()) {
            const routePath = this.routePathMap.get(constructor)
            const basePath = routePath ? routePath.path : ''
            allEndpoints = routeEndpoints.reduce((acc, routeEndpoint) => [
                ...acc, {
                    ...routeEndpoint,
                    path: `${basePath}${routeEndpoint.path}`,
                },
            ], allEndpoints)
        }
        return allEndpoints
    }

    setRoutePath(
        constructor: Function,
        routePath: RoutePath,
    ): void {
        this.routePathMap.set(constructor, routePath)
    }

    setRouteOperation(
        constructor: Function,
        path: string,
        operation: RouteOperation,
        routeOperation: RouteOperationHandler,
    ): void {
        let endpoints = this.routeEndpointMap.get(constructor)
        if (!endpoints) {
            endpoints = []
            this.routeEndpointMap.set(constructor, endpoints)
        }

        endpoints.push({
            path,
            [operation]: routeOperation,
        })
    }
}
