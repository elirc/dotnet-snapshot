export type Env = {
  nodeEnv: string;
  port: number;
  corsOrigin: string;
};

export function loadEnv(): Env {
  return {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT ?? 4000),
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173'
  };
}

export const env = loadEnv();
