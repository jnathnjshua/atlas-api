type AppConfig = {
  port: number;
  nodeEnv: "development" | "test" | "production";
};

export const config: AppConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv:
    (process.env.NODE_ENV as AppConfig["nodeEnv"]) || "development",
};
