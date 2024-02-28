// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// configiurações
const organizationName = "RaiDeOliveira";
const projectName = "ponderada_deploy";



import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oiiiiii!!! Meu nome é Raí!',
  tagline: 'Tudo bem? :D',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RaiDeOliveira', // Usually your GitHub org/user name.
  projectName: 'ponderada_deploy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //deploymentBranch: 'gp_deploy',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Raí Cajé',
        logo: {
          alt: 'My Site Logo',
          src: 'img/rei.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Quem sou eu?',
          },
          {to: '/blog', label: 'Portfólio', position: 'left'},
          {
            href: 'https://github.com/raideoliveira',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quem sou eu?',
            items: [
              {
                label: 'Quem sou eu?',
                to: '/docs/quem_sou_eu',
              },
            ],
          },
          {
            title: 'Redes sociais',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/raideoliveira/',
              },
              {
                label: 'LastFM',
                href: 'https://www.last.fm/user/CoffeeCoffin',
              },
            ],
          },
          {
            title: 'Portfólio',
            items: [
              {
                label: 'Meu portfólio pessoal',
                to: '/blog',
              },
              {
                label: 'Meu Github',
                href: 'https://github.com/RaiDeOliveira',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
