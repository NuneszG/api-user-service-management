import { Prisma } from "../helpers/prisma/prisma";
import { User } from "../helpers/interfaces/interfaces";

export class CreateUserService {
    async Execute({ name, email, phone, age, live, profission, wage, company, area, position }: User) {

        if(!name || !email || !phone || !age || !live || !profission || !wage || !company || !area  || !position) {
            throw Error("Inválido. Por favor, preencha todos os dados.");
        }

        const User = await Prisma.user.create({
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

        return User;
    }
}