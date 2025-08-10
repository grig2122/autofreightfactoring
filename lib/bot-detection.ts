export interface BotDetectionResult {
  isBot: boolean;
  confidence: number;
  reasons: string[];
}

export function detectBot(): BotDetectionResult {
  const reasons: string[] = [];
  let botScore = 0;

  if (typeof window === 'undefined') {
    return { isBot: false, confidence: 0, reasons: [] };
  }

  // Check for headless browser indicators
  if (navigator.webdriver) {
    reasons.push('webdriver_detected');
    botScore += 100;
  }

  // Check for automation tools
  if ((window as any).callPhantom || (window as any)._phantom) {
    reasons.push('phantom_detected');
    botScore += 100;
  }

  // Check for Selenium
  if ((window as any).__selenium_unwrapped || 
      (window as any).__webdriver_evaluate || 
      (window as any).__driver_evaluate) {
    reasons.push('selenium_detected');
    botScore += 100;
  }

  // Check user agent patterns
  const ua = navigator.userAgent.toLowerCase();
  const botPatterns = [
    'bot', 'crawl', 'spider', 'scraper', 'headless',
    'phantom', 'selenium', 'puppeteer', 'playwright'
  ];
  
  if (botPatterns.some(pattern => ua.includes(pattern))) {
    reasons.push('suspicious_user_agent');
    botScore += 80;
  }

  // Check for missing browser features
  if (!(window as any).chrome && ua.includes('chrome')) {
    reasons.push('chrome_object_missing');
    botScore += 60;
  }

  // Check navigator properties
  if (navigator.plugins?.length === 0) {
    reasons.push('no_plugins');
    botScore += 30;
  }

  if (navigator.languages?.length === 0) {
    reasons.push('no_languages');
    botScore += 40;
  }

  // Check for suspicious behavior patterns
  if (window.innerWidth === 0 || window.innerHeight === 0) {
    reasons.push('zero_window_size');
    botScore += 70;
  }

  // Check for missing touch support on mobile devices
  if (/mobile|android|iphone/i.test(ua) && !('ontouchstart' in window)) {
    reasons.push('mobile_without_touch');
    botScore += 50;
  }

  // Check connection type
  const connection = (navigator as any).connection;
  if (connection?.rtt === 0 && connection?.downlink === 10) {
    reasons.push('suspicious_connection');
    botScore += 40;
  }

  // Check permissions API
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'notifications' as PermissionName })
      .then(result => {
        if (result.state === 'prompt' && Notification.permission === 'denied') {
          reasons.push('permission_mismatch');
          botScore += 30;
        }
      })
      .catch(() => {});
  }

  const confidence = Math.min(botScore, 100);
  const isBot = confidence >= 60;

  return { isBot, confidence, reasons };
}

export function trackBotDetection(): void {
  const botResult = detectBot();
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'bot_detection', {
      is_bot: botResult.isBot,
      confidence: botResult.confidence,
      reasons: botResult.reasons.join(','),
      user_agent: navigator.userAgent
    });
  }

  // Set user property for filtering
  if ((window as any).gtag) {
    (window as any).gtag('set', 'user_properties', {
      likely_bot: botResult.isBot
    });
  }

}

// Block known bot IP ranges (server-side check)
export const suspiciousIPRanges = [
  '103.21.244.0/22', // Cloudflare
  '103.22.200.0/22', // Cloudflare
  '103.31.4.0/22',   // Cloudflare
  '104.16.0.0/12',   // Cloudflare
  '108.162.192.0/18', // Cloudflare
  '131.0.72.0/22',   // Cloudflare
  '141.101.64.0/18', // Cloudflare
  '162.158.0.0/15',  // Cloudflare
  '172.64.0.0/13',   // Cloudflare
  '173.245.48.0/20', // Cloudflare
  '188.114.96.0/20', // Cloudflare
  '190.93.240.0/20', // Cloudflare
  '197.234.240.0/22', // Cloudflare
  '198.41.128.0/17', // Cloudflare
];

export function isIPInRange(ip: string, range: string): boolean {
  const [rangeIP, rangeBits] = range.split('/');
  const bits = parseInt(rangeBits, 10);
  
  const ipNum = ipToNumber(ip);
  const rangeNum = ipToNumber(rangeIP);
  const mask = -1 << (32 - bits);
  
  return (ipNum & mask) === (rangeNum & mask);
}

function ipToNumber(ip: string): number {
  const parts = ip.split('.');
  return parts.reduce((acc, part, i) => {
    return acc + (parseInt(part, 10) << (8 * (3 - i)));
  }, 0);
}