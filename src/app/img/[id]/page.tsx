import { ImageFullView } from '~/components/image-full-view'

type Props = {
  params: { id: string }
}
export default function ImgPage({ params: { id } }: Props) {
  const idAsNumber = Number(id)

  if (isNaN(idAsNumber)) {
    throw new Error('Invalid id')
  }
  return <ImageFullView id={idAsNumber} />
}
