export type PageRequest = {
  page: number;
  pageSize: number;
  search?: string;
  status?: string;
  serviceName?: string;
};

export type PageResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

export function normalizePage(query: Record<string, unknown>): PageRequest {
  const page = Math.max(1, Number(query.page ?? 1));
  const requestedPageSize = Number(query.pageSize ?? 25);
  return {
    page,
    pageSize: Math.min(100, Math.max(1, requestedPageSize)),
    search: typeof query.search === 'string' ? query.search : undefined,
    status: typeof query.status === 'string' ? query.status : undefined,
    serviceName: typeof query.serviceName === 'string' ? query.serviceName : undefined
  };
}

export function paginate<T>(items: T[], request: PageRequest): PageResult<T> {
  const start = (request.page - 1) * request.pageSize;
  return {
    items: items.slice(start, start + request.pageSize),
    page: request.page,
    pageSize: request.pageSize,
    total: items.length
  };
}
