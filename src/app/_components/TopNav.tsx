'use client'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'
import { UploadButton } from '~/utils/uploadthing'

export const TopNav: FC = () => {
  const router = useRouter()
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            appearance={{
              button: {
                width: 'auto',
                minWidth: 144,
                paddingRight: 8,
                paddingLeft: 8,
              },
            }}
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
          <div className="flex min-w-[28px] items-center">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
