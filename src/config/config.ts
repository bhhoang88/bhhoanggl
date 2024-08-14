export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Bee Developers",
    description: "Make beautiful websites regardless of your design experience.",
    language: [
        {
            code: 'vi',
            default: true,
            eventCode: 'vi',
            text: 'Vn'
        },
        {
            code: 'en',
            eventCode: 'en',
            text: 'English'
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui-docs-v2.vercel.app",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};