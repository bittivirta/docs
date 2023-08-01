// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Bittivirta Docs",
    tagline: "Documentation for Bittivirta services",
    favicon: "/favicon.ico",

    url: "https://docs.bittivirta.fi/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "fi",
        locales: ["fi"],
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

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/bittivirta/docs",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            }),
        ],
    ],

    markdown: {
        mermaid: true,
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
            navbar: {
                title: "Bittivirta",
                logo: {
                    alt: "Bittivirta Logo",
                    src: "https://cdn.bittivirta.fi/graphics/logo/2023/bittivirta/svg/icon.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "clientAreaSidebar",
                        label: "Client Area",
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
                        'primaryColor': '#BB2528',
                    },
                }
            },
            footer: {
                copyright: `Copyright © ${new Date().getFullYear()} Bittivirta - All rights reserved`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
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
