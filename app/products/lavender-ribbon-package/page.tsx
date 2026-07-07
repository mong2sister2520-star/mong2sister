import { StitchFrame } from "@/components/StitchFrame";
import { readStitchHtml } from "@/lib/stitch-html";

export default function ProductPage() {
  return (
    <StitchFrame
      html={readStitchHtml("_5")}
      title="KkuLight Lavender Ribbon Package"
    />
  );
}
