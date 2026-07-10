import { readFileSync } from "node:fs";
import { join } from "node:path";

const stitchRoot = join(process.cwd(), "stitch_");

export function readStitchHtml(screen: "_1" | "_2" | "_3" | "_4" | "_5") {
  const html = readFileSync(join(stitchRoot, screen, "code.html"), "utf8");

  return html.replace(
    "</body>",
    `
<script>
  document.querySelectorAll("button").forEach((button) => {
    if (button.textContent && button.textContent.trim() === "person") {
      button.addEventListener("click", () => {
        window.parent.location.href = "/signup";
      });
    }
  });
</script>
</body>`,
  );
}
