import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  title: 'My Portfolio',
  // icons: {
  //   icon: '/favicon-32x32.png',
  // },
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
      <body className="bg-background">{children}</body>
    </html>
  )
}
