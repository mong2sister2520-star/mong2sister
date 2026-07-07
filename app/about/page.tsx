import { StitchFrame } from "@/components/StitchFrame";
import { readStitchHtml } from "@/lib/stitch-html";

export default function AboutPage() {
  return <StitchFrame html={readStitchHtml("_2")} title="About KkuLight" />;
}
