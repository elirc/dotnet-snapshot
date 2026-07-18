export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code: string,
    public readonly details?: unknown
  ) {
    super(message);
  }
}

export function notFound(resource: string) {
  return new AppError(404, resource + ' not found', 'not_found');
}
