export const PALETTE = {
  DARK: "dark",
  LIGHT: "light",
};

export function setPalette(palette) {
  const r = document.body;

  r.className = palette;
}
