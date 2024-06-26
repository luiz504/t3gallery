import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchMyImages } from '~/server/queries/fetch-my-images'

export const Gallery: FC = async () => {
  const images = await fetchMyImages()

  return (
    <div className="grid w-full grid-cols-1 content-start gap-4 p-4 xs:mx-4 xs:grid-cols-gallery">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 flex-col">
          <Link
            href={`/img/${image.id}`}
            className="flex flex-1 overflow-hidden bg-slate-800/30"
          >
            <Image
              src={image.url}
              className="max-h-full min-w-full object-contain"
              width={480}
              height={480}
              alt={image.name}
            />
          </Link>

          <div className="truncate">{image.name}</div>
        </div>
      ))}
    </div>
  )
}
