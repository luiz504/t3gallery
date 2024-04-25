'use client'
import { useEffect, type FC, type PropsWithChildren } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { env } from '~/env'
import { useAuth, useUser } from '@clerk/nextjs'

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

const PostHogWrapper: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth()
  const userInfo = useUser()

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
        name: userInfo.user.fullName,
      })
    } else if (!auth.isSignedIn) {
      posthog.reset()
    }
  }, [userInfo, auth])

  return children
}

export const AnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PostHogProvider client={posthog}>
      <PostHogWrapper>{children}</PostHogWrapper>
    </PostHogProvider>
  )
}
