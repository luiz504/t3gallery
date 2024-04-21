/* eslint-disable @next/next/no-img-element */
import { getImage } from '~/server/queries/get-image'

type Props = {
  params: { id: string }
}
export default async function ImgModal({ params: { id } }: Props) {
  const idAsNumber = Number(id)

  if (isNaN(idAsNumber)) {
    throw new Error('Invalid id')
  }

  const image = await getImage(idAsNumber)

  return (
    <div>
      <img src={image.url} className="w-96" alt={image.name} />
    </div>
  )
}
