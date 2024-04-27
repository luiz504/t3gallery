/* eslint-disable @next/next/no-img-element */
import { clerkClient } from '@clerk/nextjs/server'
import { type FC } from 'react'

import { getImage } from '~/server/queries/get-image'
import { Button } from './ui/button'
import { deleteImage } from '~/server/mutations/delete-image'

type Props = {
  id: number
}
export const ImageFullView: FC<Props> = async ({ id }) => {
  const image = await getImage(id)

  const uploaderInfo = await clerkClient.users.getUser(image.userId)

  const createdOn = new Date(image.createdAt).toLocaleDateString()
  return (
    <div className="grid h-full w-full grid-cols-1  sm:grid-cols-[1fr,192px]">
      <div className="flex items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="border-1 flex flex-col sm:border-l max-sm:border-t">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{createdOn}</span>
        </div>
        <div className="flex justify-end p-2">
          <form
            action={async () => {
              'use server'
              await deleteImage(image.id)
            }}
          >
            <Button variant={'destructive'} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
