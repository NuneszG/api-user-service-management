import { Prisma } from "../helpers/prisma/prisma";
import { UserId } from "../helpers/interfaces/interfaces";

export class GetSpecificUserService {
    async Execute({ id }: UserId) {

        const User = await Prisma.user.findFirst({
            where: {
                id: id
            }
        });

        return User;
    };
};