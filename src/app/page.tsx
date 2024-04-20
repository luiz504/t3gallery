/* eslint-disable @next/next/no-img-element */
import { db } from '~/server/db'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })
  return (
    <main>
      <div className="flex flex-wrap gap-4 px-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img className="w-48" src={image.url} alt={image.name} />{' '}
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
