import { createFileRoute } from "@tanstack/react-router";
import { Init } from "../pages/init/Init";


export const Route = createFileRoute("/about")({
  component: Init
})