import { buildServer } from "./utils/server";

async function gracefulShutdown({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  await app.listen({ port: 3000 });

  const signals = ["SIGINT", "SIGTERM"];

  for (const signal of signals) {
    process.on(signal, () => gracefulShutdown({ app }));
  }
}

main();

// server initialization and instance in separate files
// pino for custom logging (specifically pino-pretty)
// graceful shutdowns
