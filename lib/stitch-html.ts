import { readFileSync } from "node:fs";
import { join } from "node:path";

const stitchRoot = join(process.cwd(), "stitch_");

function toAccountLink(attributes: string, content: string) {
  return `<a${attributes} href="/signup" target="_parent" aria-label="Account" style="position: relative; z-index: 60; pointer-events: auto; cursor: pointer;">${content}</a>`;
}

function withAccountLinks(html: string) {
  return html
    .replace(
      /<button([^>]*data-icon=["']person["'][^>]*)>([\s\S]*?)<\/button>/g,
      (_match, attributes: string, content: string) =>
        toAccountLink(attributes, content),
    )
    .replace(
      /<button([^>]*)>(\s*person\s*)<\/button>/g,
      (_match, attributes: string, content: string) =>
        toAccountLink(attributes, content),
    )
    .replace(
      /<button([^>]*)>(\s*<span[^>]*class=["'][^"']*material-symbols-outlined[^"']*["'][^>]*>\s*person\s*<\/span>\s*)<\/button>/g,
      (_match, attributes: string, content: string) =>
        toAccountLink(attributes, content),
    );
}

function withNextNavigation(html: string) {
  return html.replace(
    "</body>",
    `
<script>
  (function () {
    const routeByText = {
      Shop: "/shop",
      About: "/about",
      Cart: "/cart",
      KkuLight: "/"
    };

    document.querySelectorAll("a").forEach((link) => {
      const text = (link.textContent || "").trim();

      if (routeByText[text]) {
        link.setAttribute("href", routeByText[text]);
        link.setAttribute("target", "_parent");
      }

      if (text === "person" || link.getAttribute("data-icon") === "person") {
        link.setAttribute("href", "/signup");
        link.setAttribute("target", "_parent");
        link.setAttribute("aria-label", "Account");
        link.style.position = "relative";
        link.style.zIndex = "60";
        link.style.pointerEvents = "auto";
        link.style.cursor = "pointer";
      }
    });
  })();
</script>
</body>`,
  );
}

export function readStitchHtml(screen: "_1" | "_2" | "_3" | "_4" | "_5") {
  const html = readFileSync(join(stitchRoot, screen, "code.html"), "utf8");

  return withNextNavigation(withAccountLinks(html));
}
