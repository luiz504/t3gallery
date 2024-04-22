'use client'
import { type FC } from 'react'
import { useUploadThingInputProps } from './useSimpleUploadThingInputProps'
import { useRouter } from 'next/navigation'
import { ArrowUpTraySVG } from '~/components/icons/ArrowUpTray'
import { toast } from 'sonner'
import { LoadingSpinner } from '~/components/icons/LoadingSpinner'

const UPLOAD_TOAST_ID = 'upload-begin'

export const SimpleUploadButton: FC = () => {
  const router = useRouter()
  const { inputProps } = useUploadThingInputProps('imageUploader', {
    onUploadBegin: () => {
      toast(
        <div className="flex items-center gap-2">
          <LoadingSpinner /> <span className="text-lg">Uploading...</span>
        </div>,
        {
          duration: 100000,
          id: UPLOAD_TOAST_ID,
        },
      )
    },
    onClientUploadComplete: () => {
      toast.dismiss(UPLOAD_TOAST_ID)
      toast('Upload complete!')
      router.refresh()
    },
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
