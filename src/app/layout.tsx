import '~/styles/globals.css'
import '@uploadthing/react/styles.css'

import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { extractRouterConfig } from 'uploadthing/server'

import { ourFileRouter } from './api/uploadthing/core'

import { TopNav } from '~/app/_components/TopNav'
import { Toaster } from '~/components/ui/sonner'
import { AnalyticsProvider } from './_analytics/provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'T3 Gallery',
  description: 'Generated by luiz504',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}
type Props = {
  children: React.ReactNode
  modal: React.ReactNode
}
export default function RootLayout({ children, modal }: Props) {
  return (
    <ClerkProvider>
      <AnalyticsProvider>
        <html lang="en">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body className={`font-sans ${inter.variable} dark`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-auto">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster duration={3000} />
          </body>
        </html>
      </AnalyticsProvider>
    </ClerkProvider>
  )
}
