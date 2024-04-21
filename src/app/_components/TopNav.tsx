import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import { type FC } from 'react'

import { SimpleUploadButton } from './SimpleUploadButton'

export const TopNav: FC = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <div className="flex min-w-[28px] items-center">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
