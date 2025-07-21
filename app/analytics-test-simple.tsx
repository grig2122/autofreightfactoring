export function AnalyticsTestSimple() {
  return (
    <>
      {/* Simplest possible GA4 implementation */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V11G85PLVJ"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V11G85PLVJ');
          `,
        }}
      />
    </>
  );
}