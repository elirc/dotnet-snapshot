import { createApp } from './app';
import { env } from './config/env';
import { logger } from './shared/logger';

const app = createApp();

app.listen(env.port, () => {
  logger.info('NetAiOps API listening', { port: env.port, nodeEnv: env.nodeEnv });
});
