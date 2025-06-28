"use client";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <InlineWidget
      url={url}
      styles={{
        height: "600px",
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
      }}
    />
  );
}
