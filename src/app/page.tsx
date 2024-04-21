/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Gallery } from './_components/Gallery'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  return (
    <main>
      <div className="flex">
        <SignedOut>
          <div className="flex w-full justify-center text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <Gallery />
        </SignedIn>
      </div>
    </main>
  )
}
