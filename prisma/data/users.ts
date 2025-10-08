import { User } from "../../generated/prisma";

const users: Array<User> = [
    {
        id: 1,
        name: 'Eva Feria',
        specialty: 'Marketing Specialist',
        image: 'EVA.png'
    },
    {
        id: 2,
        name: 'Rich-Allee John',
        specialty: 'Drone Operator',
        image: 'RICHALLEE.png'
    },
    {
        id: 3,
        name: 'David Vargas',
        specialty: 'Video & Content Editor',
        image: 'MENIN.png'
    }
];

export default users;