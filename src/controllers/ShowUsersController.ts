import { FastifyRequest, FastifyReply } from "fastify";
import { ShowUsersService } from "../services/ShowUsersService";

export class ShowUsersController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const Show = new ShowUsersService();
        const ShowAll = await Show.Execute();

        reply.send(ShowAll);
    };
};