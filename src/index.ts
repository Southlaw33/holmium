import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/ping", (c) => {
  return c.json({ pong: "Hello, World" });
});

app.get("/sit", (c) => {
  return c.json({ Collegename: "sit", city: "Tumkur" }, 200);
});
serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
