import { createFileRoute } from "@tanstack/react-router";
import { Init } from "../pages/init/init";

export const Route = createFileRoute("/")({
    component:Init
})