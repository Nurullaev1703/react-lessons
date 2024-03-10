import {router} from "../.."

declare module "@tanstack/react-router" {
    interface Register{
        router:typeof router
    }
}
declare module "@tanstack/react-router" {
    interface StaticDataRouteOption{
        title?:string
    }
}