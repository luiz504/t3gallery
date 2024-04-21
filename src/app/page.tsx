/* eslint-disable @next/next/no-img-element */
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'

import { fetchMyImages } from '~/server/queries/fetch-my-images'

export const dynamic = 'force-dynamic'

const Gallery: FC = async () => {
  const images = await fetchMyImages()

  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link
            href={`/img/${image.id}`}
            className="flex flex-1 bg-slate-800/30"
          >
            <Image
              src={image.url}
              style={{ objectFit: 'contain' }}
              width={480}
              height={480}
              alt={image.name}
            />
          </Link>

          <div className="truncate">{image.name}</div>
        </div>
      ))}
    </>
  )
}

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 p-4">
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
