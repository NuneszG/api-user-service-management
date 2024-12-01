import { Prisma } from "../helpers/prisma/prisma";
import { UserId } from "../helpers/interfaces/interfaces";

export class DeleteUserService {
    async Execute({ id }: UserId) {

        const User = await Prisma.user.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.user.delete({
            where: {
                id: User?.id
            }
        });

        return `Os dados do ${User?.name} foram deletados.`;
    };
};