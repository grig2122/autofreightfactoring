interface GoogleTagManagerProps {
  gtmId: string
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
            
            // Enhanced tracking and bot detection
            window.dataLayer = window.dataLayer || [];
            
            // Track page performance
            if (typeof window !== 'undefined' && window.performance) {
              window.addEventListener('load', function() {
                var perfData = window.performance.timing;
                var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                var connectTime = perfData.responseEnd - perfData.requestStart;
                var renderTime = perfData.domComplete - perfData.domLoading;
                
                window.dataLayer.push({
                  'event': 'page_timing',
                  'page_load_time': pageLoadTime,
                  'connect_time': connectTime,
                  'render_time': renderTime
                });
              });
            }
            
            // Enhanced error tracking
            window.addEventListener('error', function(e) {
              window.dataLayer.push({
                'event': 'javascript_error',
                'error_message': e.message,
                'error_source': e.filename,
                'error_line': e.lineno,
                'error_column': e.colno
              });
            });
            
            // Track unhandled promise rejections
            window.addEventListener('unhandledrejection', function(e) {
              window.dataLayer.push({
                'event': 'promise_rejection',
                'rejection_reason': e.reason?.toString() || 'Unknown'
              });
            });
          `,
        }}
      />
    </>
  )
}

export function GoogleTagManagerNoscript({ gtmId }: GoogleTagManagerProps) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}