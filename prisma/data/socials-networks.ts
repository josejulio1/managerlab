import { SocialNetwork } from "../../generated/prisma";

const socialsNetworks: Array<SocialNetwork> = [
    {
        id: 1,
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: 'FaInstagram'
    },
    {
        id: 2,
        name: 'Linkedin',
        url: 'https://linkedin.com/in',
        icon: 'FaLinkedin'
    },
    {
        id: 3,
        name: 'Facebook',
        url: 'https://facebook.com',
        icon: 'FaFacebookF'
    }
];

export default socialsNetworks;