// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.sheetyapp.com',
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
                './src/styles/custom.css',
            ],
            social: [
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Welcome', link: '/' },
                        { label: 'Quick Start', link: '/getting-started' },
                    ],
                },
                {
                    label: 'Tutorials',
                    items: [
                        { 
                            label: 'Workbooks & Sheets',
                            collapsed: false,
                            items: [
                                { label: 'Creating Your First Workbook', link: '/tutorials/creating-your-first-workbook' },
                                { label: 'Adding Columns to Your Sheet', link: '/tutorials/adding-columns' },
                                { label: 'Adding Data to Your Sheet', link: '/tutorials/adding-data' },
                                { label: 'Column Validation', link: '/tutorials/column-validation' },
                                { label: 'Creating Compute Columns', link: '/tutorials/compute-columns' }
                            ]
                        },
                        { 
                            label: 'Queries & Filtering',
                            collapsed: false,
                            items: [
                                { label: 'Creating Sheet Queries', link: '/tutorials/creating-query' },
                            ]
                        },
                        { 
                            label: 'Apps & Dashboards',
                            collapsed: false,
                            items: [
                                { label: 'Creating Your First App', link: '/tutorials/creating-app' },
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
                        { label: 'Q-Expression Guide', link: '/guides/q-expression' },
                        { label: 'Column Management Page', link: '/guides/column-management' },
                    ],
                },
                {
                    label: 'Reference',
                    collapsed: true,
                    items: [
                        { label: 'Q Expressions', link: '/q-expressions' },
                        { label: 'Row Actions', link: '/row-actions' },
                    ],
                },
            ],
        })
    ],
});
