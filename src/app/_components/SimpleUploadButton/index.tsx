'use client'
import { type FC } from 'react'
import { useUploadThingInputProps } from './useSimpleUploadThingInputProps'
import { useRouter } from 'next/navigation'
import { ArrowUpTraySVG } from '~/components/icons/ArrowUpTray'

export const SimpleUploadButton: FC = () => {
  const router = useRouter()
  const { inputProps } = useUploadThingInputProps('imageUploader', {
    onClientUploadComplete: () => router.refresh(),
  })

  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer">
        <ArrowUpTraySVG />
      </label>
      <input id="upload-button" className="sr-only" {...inputProps} />
    </div>
  )
}
