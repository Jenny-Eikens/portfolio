import './globals.css'
import ClientWrapper from './components/ClientWrapper'

export const metadata = {
  title: 'Jennifer Eikens | Frontend Developer',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  description: 'Portfolio page built with Next',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper />
        {children}
      </body>
    </html>
  )
}
