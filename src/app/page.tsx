/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { type FC } from 'react'

import { fetchMyImages } from '~/server/queries/fetch-my-images'

export const dynamic = 'force-dynamic'

const Gallery: FC = async () => {
  const images = await fetchMyImages()

  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img className="w-48" src={image.url} alt={image.name} />{' '}
          <div>{image.name}</div>
        </div>
      ))}
    </>
  )
}

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4 px-4">
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
