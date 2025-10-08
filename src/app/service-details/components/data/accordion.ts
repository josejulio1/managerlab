import AccordionItem from "../interfaces/accordion";

export const accordionItems: AccordionItem[] = [
    {
        header: 'Questionnaire & Meeting',
        text: 'First, we need to learn everything about your brand',
        isInitial: true
    },
    {
        header: 'Strategy Development',
        text: 'Once the vibe is understood, we start developing a comprehensive strategy, which is delivered as a pdf document',
        isInitial: false
    },
    {
        header: 'Workspace Setup',
        text: 'A shared, organized space where you can track progress, approve content. Here&apos;s where the magic happens',
        isInitial: false
    },
    {
        header: 'Monthly Content Plan',
        text: 'A structured roadmap for your social media, including posts, ads, and engagement strategies',
        isInitial: false
    },
    {
        header: 'Review & Approve',
        text: 'You get the final say before anything goes live. We keep things transparent and flexible',
        isInitial: false
    },
    {
        header: 'Content Creation & Implementation',
        text: 'We bring the strategy to life, creating content that connects with your audience',
        isInitial: false
    },
    {
        header: 'Monitoring & Adjusting',
        text: 'We track performance, tweak as needed, and optimize for continuous growth',
        isInitial: false
    }
];