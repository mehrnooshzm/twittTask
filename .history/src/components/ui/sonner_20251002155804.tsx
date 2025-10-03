import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className="toaster group [&_div[data-content]]:w-full"
      style={
        {
          "--normal-bg": "var(--chart)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
