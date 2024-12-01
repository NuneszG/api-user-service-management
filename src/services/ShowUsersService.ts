import { Prisma } from "../helpers/prisma/prisma";

export class ShowUsersService {
    async Execute() {

        const Show = await Prisma.user.findMany();

        return Show;
    };
};