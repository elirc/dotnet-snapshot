export type SyntheticLog = {
  id: string;
  timestamp: Date;
  serviceName: 'BillingService' | 'AuthService' | 'SearchService' | 'NotificationService' | 'ApiGateway';
  level: 'info' | 'warn' | 'error';
  message: string;
  traceId: string;
};
