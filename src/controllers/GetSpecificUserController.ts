import { FastifyRequest, FastifyReply } from "fastify";
import { UserId } from "../helpers/interfaces/interfaces";
import { GetSpecificUserService } from "../services/GetSpecificUserService";

export class GetSpecificUserController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as UserId;
        const User = new GetSpecificUserService();
        
        const SpecificUser = await User.Execute({ id });

        reply.send(SpecificUser);
    };
};