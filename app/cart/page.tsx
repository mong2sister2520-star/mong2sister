import { StitchFrame } from "@/components/StitchFrame";
import { readStitchHtml } from "@/lib/stitch-html";

export default function CartPage() {
  return <StitchFrame html={readStitchHtml("_1")} title="KkuLight Cart" />;
}
