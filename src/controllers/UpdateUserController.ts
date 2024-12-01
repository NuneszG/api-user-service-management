import { FastifyRequest, FastifyReply } from "fastify";
import { User, UserId } from "../helpers/interfaces/interfaces";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;
        const { name, email, phone, age, live, profission, wage, company, area, position } = request.body as User;

        const UserUpdated = new UpdateUserService();
        const User = await UserUpdated.Execute({ id, name, email, phone, age, live, profission, wage, company, area, position });

        reply.send(User);
    };
};