// const { default: fastify } = require("fastify");

const PORT = 8000;

const fastify = require("fastify")({ logger: true });

const startServer = async () => {
    try {
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

fastify.get("/", (req, reply) => {
    reply.send("Hello World!")
})

startServer();