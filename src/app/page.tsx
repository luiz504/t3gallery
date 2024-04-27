/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Gallery } from './_components/Gallery'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  return (
    <div className="flex flex-1">
      <SignedOut>
        <div className="flex w-full flex-1 items-center justify-center text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Gallery />
      </SignedIn>
    </div>
  )
}
