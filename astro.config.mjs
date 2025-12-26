// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://sheetyapp.com',
    integrations: [
        starlight({
            title: 'Sheety Documentation',
            description: 'Official documentation for Sheety',
            logo: {
                src: './public/logo-64.png',
                replacesTitle: false,
            },
            components: {
                SiteTitle: './src/components/DocsHeader.astro',
            },
            customCss: [
                // Relative path to your custom CSS file
            ],
            social: [
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Welcome', link: '/docs/' },
                        { label: 'Quick Start', link: '/docs/getting-started' },
                    ],
                },
                {
                    label: 'Tutorials',
                    items: [
                        { 
                            label: 'Workbooks & Sheets',
                            collapsed: false,
                            items: [
                                { label: 'Creating Your First Workbook', link: '/docs/tutorials/creating-your-first-workbook' },
                                { label: 'Adding Columns to Your Sheet', link: '/docs/tutorials/adding-columns' },
                                { label: 'Adding Data to Your Sheet', link: '/docs/tutorials/adding-data' },
                                { label: 'Column Validation', link: '/docs/tutorials/column-validation' },
                                { label: 'Creating Compute Columns', link: '/docs/tutorials/compute-columns' }
                            ]
                        },
                        { 
                            label: 'Queries & Filtering',
                            collapsed: false,
                            items: [
                                { label: 'Creating Sheet Queries', link: '/docs/tutorials/creating-query' },
                            ]
                        },
                        { 
                            label: 'Apps & Dashboards',
                            collapsed: false,
                            items: [
                                { label: 'Creating Your First App', link: '/docs/tutorials/creating-app' },
                            ]
                        },
                    ],
                },
                {
                    label: 'Concepts',
                    collapsed: true,
                    autogenerate: { directory: 'concepts' },
                },
                {
                    label: 'Guides',
                    collapsed: true,
                    items: [
                        { label: 'Q-Expression Guide', link: '/docs/guides/q-expression' },
                        { label: 'Column Management Page', link: '/docs/guides/column-management' },
                    ],
                },
                {
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        { label: 'Q Expressions', link: '/docs/q-expressions' },
                        { label: 'Row Actions', link: '/docs/row-actions' },
                    ],
                },
            ],
        }),
        sitemap({
            filter: (page) => !page.includes('/404'),
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        })
    ],
});
