type Props = {
  params: { id: string }
}
export default function ImgModal({ params: { id } }: Props) {
  return <div>{id}</div>
}
