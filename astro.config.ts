import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import {spectreDark} from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
    site: 'https://ahmedwael216.github.io',
    base: 'blog',
    output: 'static',
    integrations: [
        expressiveCode({
            themes: [spectreDark],
        }),
        sitemap(),
        spectre({
            name: 'Ahmed Wael',
            openGraph: {
                home: {
                    title: 'Ahmed Wael',
                    description: 'A quite place for a noisy brain.',
                },
                blog: {
                    title: 'Blog',
                    description: 'News and guides for Spectre.',
                },
                projects: {
                    title: 'Projects',
                },
            },
            // giscus: {
            //     repository: "ahmedwael216/blog",
            //     repositoryId: "R_kgDORnkNFg",
            //     category: "Announcements",
            //     categoryId: "DIC_kwDORnkNFs4C4cVQ",
            //     mapping: "pathname",
            //     strict: false,
            //     reactionsEnabled: true,
            //     emitMetadata: false,
            //     lang: "en",
            // },
        }),
    ]
});

export default config;

//TODO add features from https://djsiddz.github.io/space-ahead/about/
