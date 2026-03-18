import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const FIGMA_ASSET_STUB =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgNDAwIDE1MCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzZiNzI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RmlnbWEgYXNzZXQgcGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+";

function figmaAssetPlugin() {
  const virtualPrefix = "\0figma-asset:";

  return {
    name: "figma-asset-fallback",
    resolveId(source: string) {
      if (source.startsWith("figma:asset/")) {
        return `${virtualPrefix}${source}`;
      }
      return null;
    },
    load(id: string) {
      if (id.startsWith(virtualPrefix)) {
        return `export default ${JSON.stringify(FIGMA_ASSET_STUB)};`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), figmaAssetPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
      "@styles": path.resolve(__dirname, "styles"),
    },
  },
});
