import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import {loadEnv} from 'vite';
import spectre from './package/src';
import {spectreDark} from './src/ec-theme';

console.log('process.env.GISCUS_REPO_ID', process.env.GISCUS_REPO_ID);
console.log('process.env.GISCUS_CATEGORY_ID', process.env.GISCUS_CATEGORY_ID);
const {
    GISCUS_REPO_ID,
    GISCUS_CATEGORY_ID,
} = loadEnv(process.env.NODE_ENV!, process.cwd(), '');

// https://astro.build/config
const config = defineConfig({
    site: 'https://ahmedwael216.github.io/blog',
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
            giscus: {
                repository: "ahmedwael216/blog",
                repositoryId: GISCUS_REPO_ID,
                category: "Announcements",
                categoryId: GISCUS_CATEGORY_ID,
                mapping: "pathname",
                strict: false,
                reactionsEnabled: true,
                emitMetadata: false,
                lang: "en",
            },
        }),
    ]
});

export default config;

//TODO add features from https://djsiddz.github.io/space-ahead/about/
