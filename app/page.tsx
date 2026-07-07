import { StitchFrame } from "@/components/StitchFrame";
import { readStitchHtml } from "@/lib/stitch-html";

export default function Home() {
  return <StitchFrame html={readStitchHtml("_4")} title="KkuLight Home" />;
}
