import { readFileSync } from "node:fs";
import { join } from "node:path";

const stitchRoot = join(process.cwd(), "stitch_");

export function readStitchHtml(screen: "_1" | "_2" | "_3" | "_4" | "_5") {
  return readFileSync(join(stitchRoot, screen, "code.html"), "utf8");
}
