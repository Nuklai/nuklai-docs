// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nuklai Protocol',
  tagline: 'Building lightning fast VMs and onchain dApps',
  favicon: 'img/logo-light.png',

  // Set the production url of your site here
  url: 'https://docs.nukl.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nuklai', // Usually your GitHub org/user name.
  projectName: 'nuklai-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
      type: 'text/css',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/banner.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        placeholder: 'Search xyz',
        contextualSearch: true,
      },
      navbar: {
        title: 'Nuklai Protocol',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'left',
          },
          // Coming back to this
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.nukl.ai/about',
            label: 'About',
            position: 'right',
          },
          {
            href: 'https://app.nukl.ai/',
            label: 'Application',
            position: 'right',
          },
          {
            href: 'https://github.com/nuklai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'Nuklai, Data Marketplace, Blockchain, DeFi, AI, LLM, Avalanche, HyperSDK',
        },
        {
          name: 'description',
          content:
            'Building lightning-fast VMs & on-chain dApps, empowering next-gen blockchain developers and AI Data scientists.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nuklai Protocol Documentation' },
        {
          name: 'twitter:description',
          content:
            'Building lightning-fast VMs & on-chain dApps, empowering next-gen blockchain developers and AI Data scientists.',
        },
        { name: 'twitter:image', content: '/img/banner.jpg' },
        { property: 'og:title', content: 'Nuklai Protocol Documentation' },
        {
          property: 'og:description',
          content:
            'Building lightning-fast VMs & on-chain dApps, empowering next-gen blockchain developers and AI Data scientists.',
        },
        { property: 'og:url', content: 'https://docs.nukl.ai' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/img/banner.jpg' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
      ],
      // footer: {
      //   style: 'dark',
      //   links: [],
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config;
