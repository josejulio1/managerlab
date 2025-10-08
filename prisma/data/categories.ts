import { Category } from "../../generated/prisma";

const categories: Array<Category> = [
    {
        id: 1,
        name: 'Social Media',
        description: 'From strategy creation to content curation, we handle it all so you can focus on creating.',
        slug: 'social-media'
    },
    {
        id: 2,
        name: 'Ads Campaigns',
        description: 'Strategic development and management of paid ads campaigns to expand your reach and increase your business monetization.',
        slug: 'ads-campaigns'
    },
    {
        id: 3,
        name: 'Management',
        description: 'Personalized strategy to scale your creative brand.',
        slug: 'management'
    }
];

export default categories;