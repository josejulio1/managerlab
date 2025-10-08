import { AuthenticatedUsers } from "../../generated/prisma";

const authenticatedUsers: Array<AuthenticatedUsers> = [
    {
        id: 1,
        email: 'test@test.com',
        password: '12345678'
    }
];

export default authenticatedUsers;