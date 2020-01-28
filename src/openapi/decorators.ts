import { RouteDescriptor, RouteOperation, RouteOperationHandler } from './routes'

const routeDescriptor = new RouteDescriptor()

export const Route = ((path: string): ClassDecorator => 
    <TFunction extends Function>(constructor: TFunction): TFunction | void => {
        routeDescriptor.setRoutePath(constructor, { path })
    })

export const Get = ((path: string = ''): MethodDecorator => httpVerb(path, 'get'))
export const Put = ((path: string = ''): MethodDecorator => httpVerb(path, 'put'))
export const Post = ((path: string = ''): MethodDecorator => httpVerb(path, 'post'))
export const Delete = ((path: string = ''): MethodDecorator => httpVerb(path, 'delete'))
export const Options = ((path: string = ''): MethodDecorator => httpVerb(path, 'options'))
export const Head = ((path: string = ''): MethodDecorator => httpVerb(path, 'head'))
export const Patch = ((path: string = ''): MethodDecorator => httpVerb(path, 'patch'))
export const Trace = ((path: string = ''): MethodDecorator => httpVerb(path, 'trace'))

const httpVerb = ((path: string, operation: RouteOperation): MethodDecorator => 
    <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void => {
        const fn = typeof descriptor.value === 'function'
            ? descriptor.value
            : Function()
        let fnName = propertyKey.toString()
        fnName = fnName || '<anonymous>'
        const handler: RouteOperationHandler = {
            function: fn,
            functionName: fnName,
            id: `${target.constructor.name}.${fnName}`,
            thisObject: target, // change to instance
        }
        routeDescriptor.setRouteOperation(
            target.constructor,
            path,
            operation,
            handler,
        )
    })
