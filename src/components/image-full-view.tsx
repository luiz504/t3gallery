import Image from 'next/image'
import { type FC } from 'react'

import { getImage } from '~/server/queries/get-image'

type Props = {
  id: number
}
export const ImageFullView: FC<Props> = async ({ id }) => {
  const image = await getImage(id)

  return <Image src={image.url} width={480} height={480} alt={image.name} />
}
