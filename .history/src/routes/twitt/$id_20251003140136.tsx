import { createFileRoute } from "@tanstack/react-router";
import TwittView from "@/components/twitt/view";

export const twittDetailRoute = createFileRoute("/twitt/$id")({
  component: TwittView, // مستقیماً کامپوننت را وارد کن
});
