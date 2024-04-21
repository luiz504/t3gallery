/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'

import { getImage } from '~/server/queries/get-image'

type Props = {
  id: number
}
export const ImageFullView: FC<Props> = async ({ id }) => {
  const image = await getImage(id)

  return (
    <div className="flex h-full w-full ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="border-1 flex w-48 flex-shrink-0 flex-col border-l">
        <p className="text-xl font-bold">{image.name}</p>
      </div>
    </div>
  )
}
