import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools"
export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className = "[&.active]:font-bold">
                    {"Главная"}
                </Link>
                <Link to="/about" className = "[&.active]:font-bold">
                    {"Вторая"}
                </Link>
                <Link to="/products/" className = "[&.active]:font-bold">
                    {"Товары"}
                </Link>
                <Link to="/cars/" className = "[&.active]:font-bold">
                    {"Машины"}
                </Link>
            </div>
            <div className="p-2">
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </>
    )
})