'use client';

import { useEffect } from 'react';
import { useIntercom } from 'react-use-intercom';

export function IntercomWidget() {
  const { boot, update, show, hide } = useIntercom();
  // For now, we'll work without user context - you can add this later
  const user = null;

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
      // Boot Intercom for anonymous users for now
      boot({
        customAttributes: {
          app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
          environment: process.env.NODE_ENV || 'development',
          user_type: 'anonymous',
          business_type: 'freight_factoring',
        },
      });
    }
  }, [boot]);

  // Update user data when user changes (disabled for now)
  // useEffect(() => {
  //   if (user && process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
  //     update({
  //       userId: user.uid,
  //       email: user.email || undefined,
  //       name: user.displayName || undefined,
  //       customAttributes: {
  //         app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  //         environment: process.env.NODE_ENV || 'development',
  //         user_type: 'freight_factor_client',
  //         signup_method: user.providerData?.[0]?.providerId || 'email',
  //       },
  //     });
  //   }
  // }, [user, update]);

  // Hide Intercom on certain pages if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hideOnPaths = ['/admin', '/api'];
      const currentPath = window.location.pathname;
      
      if (hideOnPaths.some(path => currentPath.startsWith(path))) {
        hide();
      }
    }
  }, [hide]);

  // This component doesn't render anything visible
  return null;
}

// Hook for other components to interact with Intercom
export function useIntercomSupport() {
  const { show, hide, showMessages, showNewMessage, update } = useIntercom();
  
  return {
    showSupport: show,
    hideSupport: hide,
    showMessages,
    showNewMessage,
    updateUser: update,
    // Custom methods for freight factoring context
    showApplicationHelp: () => showNewMessage('Hi! I need help with my factoring application.'),
    showDocumentHelp: () => showNewMessage('Hi! I need help uploading documents.'),
    showPaymentHelp: () => showNewMessage('Hi! I have a question about payments.'),
  };
}