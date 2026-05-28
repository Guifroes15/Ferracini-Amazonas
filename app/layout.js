export const metadata = {
  title: 'Ferracini Amazonas · Dia dos Namorados 2026',
  description: 'O charme dele merece o melhor. Sapatos selecionados Ferracini Amazonas para presentear quem você ama.',
  openGraph: {
    title: 'Ferracini Amazonas · Dia dos Namorados',
    description: 'O charme dele merece o melhor.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F4F0EA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
