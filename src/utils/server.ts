import fastify from "fastify";
import { logger } from "./logger";

export async function buildServer() {
  const app = fastify({
    logger,
  });

  // define plugins

  // define routes

  return app;
}
