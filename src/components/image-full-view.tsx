/* eslint-disable @next/next/no-img-element */
import { clerkClient } from '@clerk/nextjs/server'
import { type FC } from 'react'

import { getImage } from '~/server/queries/get-image'

type Props = {
  id: number
}
export const ImageFullView: FC<Props> = async ({ id }) => {
  const image = await getImage(id)

  const uploaderInfo = await clerkClient.users.getUser(image.userId)

  const createdOn = new Date(image.createdAt).toLocaleDateString()
  return (
    <div className="flex h-full w-full ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="border-1 flex w-48 flex-col  border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{createdOn}</span>
        </div>
      </div>
    </div>
  )
}
