import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "hi")
  .get("/id/:id", ({ params: { id } }) => id)
  .post("/post", ({ body }) => body)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
