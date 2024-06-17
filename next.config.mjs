import withMDX from '@next/mdx';

export default {
    ...withMDX({
        extension: /\.mdx?$/
    }),
    pageExtensions: ['js','ts','jsx', 'tsx', 'md', 'mdx']
};
