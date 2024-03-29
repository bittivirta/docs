import prismVscodeDarkPlus from "./src/theme/prism-vscode-dark-plus.ts"
const info = require("./.tmp/info.json")


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bittivirta Docs",
  tagline: "Documentation for Bittivirta services",
  favicon: "/favicon.ico",

  url: "https://docs.bittivirta.fi/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  staticDirectories: ['static'],

  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-plugin-image-zoom"),
    async function tailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 75,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  // scripts: [
  //   "/crisp.js",
  // ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bittivirta/docs/blob/" + (info.branch == "master" ? "main" : info.branch) + "/",
          admonitions: {
            keywords: ['result'],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleTagManager: {
          containerId: 'G-C7W0T4C3ZR',
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "fi"],
      }),


    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: "Docs",
        logo: {
          alt: "Bittivirta Logo",
          src: "https://cdn.bittivirta.fi/logo/logo.svg",
          srcDark: 'https://cdn.bittivirta.fi/logo/logo-alt.svg',
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "generalSidebar",
            label: "General",
          },
          {
            type: "docSidebar",
            sidebarId: "serverSidebar",
            label: "Server",
          },
          {
            type: "docSidebar",
            sidebarId: "hostingSidebar",
            label: "Hosting",
          },
          {
            type: "docSidebar",
            sidebarId: "gameSidebar",
            label: "Game Servers",
          },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            label: "Docs",
          },
          {
            type: "docSidebar",
            sidebarId: "companySidebar",
            label: "Company",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/bittivirta/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
        options: {
          themeVariables: {
            'primaryColor': '#1060ee',
          },
        }
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Bittivirta - All rights reserved`,
      },
      prism: {
        theme: prismVscodeDarkPlus,
        darkTheme: prismVscodeDarkPlus,
        additionalLanguages: ['bash', "log", "diff", "ini", "json", "mermaid", "nginx", "php", "sql", "css", "java", "apacheconf"],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'theme-code-block-error-line',
            line: 'error',
          },
          {
            className: 'theme-code-block-terminal-line',
            line: 'terminal',
          },
          {
            className: 'theme-code-block-script-line',
            line: 'script',
          },
          {
            className: 'theme-code-block-comment-line',
            line: 'comment',
          },
          {
            className: 'theme-code-block-mariadb-line',
            line: 'mariadb',
          },
          {
            className: 'theme-code-block-mysql-line',
            line: 'mysql',
          },
        ],
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    }),
};

module.exports = config;
