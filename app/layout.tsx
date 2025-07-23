import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keerthi Group - Multi-Industry Excellence',
  description:
    'Since 1986 Keerthi Group has delivered outstanding solutions across automobiles, chemicals, software and more.',
  keywords: [
    'Keerthi Group',
    'automobiles',
    'chemicals',
    'Bangalore',
    'industrial',
    'software',
  ],
  generator: 'v0.dev',
  openGraph: {
    title: 'Keerthi Group - Multi-Industry Excellence',
    description:
      'Since 1986 Keerthi Group has delivered outstanding solutions across automobiles, chemicals, software and more.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="m-0 mx-auto w-full max-w-7xl px-4">{children}</body>
    </html>
  )
}
