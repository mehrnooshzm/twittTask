// src/routes/twitt/$id.tsx
import { createFileRoute } from "@tanstack/react-router";
import TwittView from "@/components/twitt/view";

export const twittDetailRoute = createFileRoute("/twitt/$id")({
  component: TwittView,
});
