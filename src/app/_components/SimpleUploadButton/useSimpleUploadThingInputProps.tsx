import { useUploadThing } from '~/utils/uploadthing'
type Input = Parameters<typeof useUploadThing>
export const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args)

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const selectedFiles = Array.from(e.target.files)

    await $ut.startUpload(selectedFiles)

    // TODO: persist result in state maybe?
  }

  return {
    inputProps: {
      onChange,
      multiple: false,
      accept: 'image/*',
      type: 'file',
    },
    isUploading: $ut.isUploading,
  }
}
