import {router} from "../.."

declare module "@tanstack/react-router" {
    interface Register{
        router:typeof router
    }
}