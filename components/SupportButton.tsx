'use client';

import { useIntercomSupport } from './IntercomWidget';
import { usePathname } from 'next/navigation';

interface SupportButtonProps {
  variant?: 'default' | 'contextual';
  className?: string;
}

export function SupportButton({ variant = 'default', className = '' }: SupportButtonProps) {
  const { showSupport, showApplicationHelp, showDocumentHelp, showPaymentHelp } = useIntercomSupport();
  const pathname = usePathname();

  // Don't show support button if Intercom is not configured
  if (!process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
    return null;
  }

  const handleClick = () => {
    if (variant === 'contextual') {
      // Show contextual help based on current page
      if (pathname.includes('/apply')) {
        showApplicationHelp();
      } else if (pathname.includes('/upload') || pathname.includes('/document')) {
        showDocumentHelp();
      } else if (pathname.includes('/payment') || pathname.includes('/factor')) {
        showPaymentHelp();
      } else {
        showSupport();
      }
    } else {
      showSupport();
    }
  };

  const getButtonText = () => {
    if (variant === 'contextual') {
      if (pathname.includes('/apply')) return 'Get Application Help';
      if (pathname.includes('/upload') || pathname.includes('/document')) return 'Document Help';
      if (pathname.includes('/payment') || pathname.includes('/factor')) return 'Payment Support';
    }
    return 'Get Support';
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        bg-blue-600 hover:bg-blue-700 text-white 
        rounded-lg transition-colors duration-200
        font-medium text-sm
        ${className}
      `}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      {getButtonText()}
    </button>
  );
}

// Floating support button for global use
export function FloatingSupportButton() {
  const { showSupport } = useIntercomSupport();

  // Don't show if Intercom is not configured
  if (!process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
    return null;
  }

  return (
    <button
      onClick={showSupport}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 bg-blue-600 hover:bg-blue-700
        text-white rounded-full shadow-lg
        transition-all duration-200 hover:scale-110
        flex items-center justify-center
      "
      aria-label="Open support chat"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
}