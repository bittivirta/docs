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
        locales: ["en", "fi"],
    },

    plugins: ["plugin-image-zoom"],

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
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themes: [
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
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "serverSidebar",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "hostingSidebar",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "gameSidebar",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "docsSidebar",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "companySidebar",
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
            footer: {
                copyright: `Copyright © ${new Date().getFullYear()} Bittivirta - All rights reserved`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            imageZoom: {
                // CSS selector to apply the plugin to, defaults to '.markdown img'
                selector: ".markdown img",
                // Optional medium-zoom options
                // see: https://www.npmjs.com/package/medium-zoom#options
                options: {
                    margin: 24,
                    background: "#BADA55",
                    scrollOffset: 0,
                    container: "#zoom-container",
                    template: "#zoom-template",
                },
            },
        }),
};

module.exports = config;
