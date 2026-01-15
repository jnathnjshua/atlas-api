import { buildApp } from "./app";
import { config } from "./config";

const app = buildApp();

const start = async () => {
  try {
    await app.listen({ port: config.port });
    app.log.info(`Server running in ${config.nodeEnv} mode`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
