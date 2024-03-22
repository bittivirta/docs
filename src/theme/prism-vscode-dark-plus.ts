// Converted automatically using ./tools/themeFromVsCode
import type { PrismTheme } from "prism-react-renderer"
const prismVscodeDarkPlus: PrismTheme = {
  plain: {
    color: "#CCCCCC",
    backgroundColor: "#0d1421",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#2d9ef7",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#6c975e",
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#5b9bcf",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#b5ccaa",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#5b9bcf",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#9edbfa",
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#cb907b",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#d5b884",
      },
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "#59c7b0",
      },
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#9edbfa",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#CCCCCC",
      },
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#dbdbae",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#59c7b0",
      },
    },
    {
      types: ["char"],
      style: {
        color: "#c186bb",
      },
    },
  ],
}
export default prismVscodeDarkPlus
