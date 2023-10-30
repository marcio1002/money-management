function formatCss(css: string | TemplateStringsArray) {
    return (Array.isArray(css) ? css[0] : css).trim().replace(/[\n\s]+/g, " ");
}

export function css(...css: [TemplateStringsArray] | string[]): string {
    return css.map(formatCss).join(" ").trim();
}
