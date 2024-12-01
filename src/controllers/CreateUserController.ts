import { FastifyRequest, FastifyReply } from "fastify";
import { User } from "../helpers/interfaces/interfaces";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email, phone, age, live, profission, wage, company, area, position } = request.body as User;

        const NewUser = new CreateUserService();
        const User = await NewUser.Execute({ name, email, phone, age, live, profission, wage, company, area, position });

        reply.send(User);
    };
};