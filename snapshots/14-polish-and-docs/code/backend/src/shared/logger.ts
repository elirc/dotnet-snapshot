type LogLevel = 'info' | 'warn' | 'error';

function write(level: LogLevel, message: string, fields: Record<string, unknown> = {}) {
  console.log(JSON.stringify({ level, message, time: new Date().toISOString(), ...fields }));
}

export const logger = {
  info: (message: string, fields?: Record<string, unknown>) => write('info', message, fields),
  warn: (message: string, fields?: Record<string, unknown>) => write('warn', message, fields),
  error: (message: string, fields?: Record<string, unknown>) => write('error', message, fields)
};
