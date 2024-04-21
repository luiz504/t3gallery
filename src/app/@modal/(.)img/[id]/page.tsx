import { Modal } from './modal'
import { ImageFullView } from '~/components/image-full-view'

type Props = {
  params: { id: string }
}
export default function ImgModal({ params: { id } }: Props) {
  const idAsNumber = Number(id)

  if (isNaN(idAsNumber)) {
    throw new Error('Invalid id')
  }

  return (
    <Modal>
      <ImageFullView id={idAsNumber} />
    </Modal>
  )
}
