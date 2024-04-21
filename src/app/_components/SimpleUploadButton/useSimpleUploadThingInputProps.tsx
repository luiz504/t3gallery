import { useUploadThing } from '~/utils/uploadthing'
type Input = Parameters<typeof useUploadThing>
export const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args)

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const selectedFiles = Array.from(e.target.files)

    const result = await $ut.startUpload(selectedFiles)

    console.log('uploaded files', result) //eslint-disable-line
    // TODO: persist result in state maybe?
  }

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: 'image/*',
      type: 'file',
    },
    isUploading: $ut.isUploading,
  }
}
