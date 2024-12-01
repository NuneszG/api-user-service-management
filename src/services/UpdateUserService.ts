import { Prisma } from "../helpers/prisma/prisma";
import { UserData } from "../helpers/interfaces/interfaces";

export class UpdateUserService {
    async Execute({ id, name, email, phone, age, live, profission, wage, company, area, position }: UserData) {

        const User = await Prisma.user.findFirst({
            where: {
                id: id
            }
        });

        const UserUpdated = await Prisma.user.update({
            where: {
                id: User?.id
            },
            data: {
                name,
                email,
                phone,
                age,
                live,
                profission,
                wage,
                company,
                area,
                position
            }
        });

        return UserUpdated;
    };
};