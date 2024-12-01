import { FastifyRequest, FastifyReply } from "fastify";
import { UserId } from "../helpers/interfaces/interfaces";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;

        const UserRemoved = new DeleteUserService();
        const User = await UserRemoved.Execute({ id });

        reply.send(User);
    };
};