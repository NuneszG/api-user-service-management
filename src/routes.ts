import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { ShowUsersController } from "./controllers/ShowUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetSpecificUserController } from "./controllers/GetSpecificUserController";

export default function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.put("/auth/update-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().Handle(request, reply);
    });
    
    fastify.post("/auth/create-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().Handle(request, reply);
    });

    fastify.get("/auth/show-all-users/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ShowUsersController().Handle(request, reply);
    });

    fastify.delete("/auth/delete-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().Handle(request, reply);
    });

    fastify.get("/auth/specific-user/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetSpecificUserController().Handle(request, reply);
    });
}