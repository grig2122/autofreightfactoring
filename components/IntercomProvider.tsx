'use client';

import { IntercomProvider as BaseIntercomProvider } from 'react-use-intercom';

interface IntercomProviderProps {
  children: React.ReactNode;
}

export function IntercomProvider({ children }: IntercomProviderProps) {
  // Only render if we have the Intercom App ID
  if (!process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
    return <>{children}</>;
  }

  return (
    <BaseIntercomProvider
      appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID}
      apiBase={process.env.NEXT_PUBLIC_INTERCOM_API_BASE}
      initializeDelay={1000}
      shouldInitialize
    >
      {children}
    </BaseIntercomProvider>
  );
}