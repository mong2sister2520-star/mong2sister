import { StitchFrame } from "@/components/StitchFrame";
import { readStitchHtml } from "@/lib/stitch-html";

export default function ShopPage() {
  return <StitchFrame html={readStitchHtml("_3")} title="KkuLight Shop" />;
}
