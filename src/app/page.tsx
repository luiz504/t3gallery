import { db } from '~/server/db'

export const dynamic = 'force-dynamic'

const mockUrls = [
  'https://utfs.io/f/3336c555-590a-4c54-b013-a073c2c1ba6e-4rjpq0.svg',
  'https://utfs.io/f/0acb97a4-b227-4391-b62d-ab28173534d3-8myeez.webp',
  'https://utfs.io/f/55579bde-857c-4a75-9948-f12b8c90ff5a-hv8ky0.png',
  'https://utfs.io/f/88c67f82-9ec4-4b27-bde0-6b944f99a931-cyclh9.png',
  'https://utfs.io/f/b075b3ab-037f-47dc-b57d-94b636681ecf-dk6j3t.jpg',
  'https://utfs.io/f/dfa8af8e-0e61-4f83-86b0-f43872f88460-ciaqv5.png',
  'https://utfs.io/f/42e876b3-88c5-4217-b492-954f15cb20af-pgor6y.png',
]

const mockedImages = mockUrls.map((url, index) => ({
  url,
  id: String(index + 1),
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-2 px-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockedImages, ...mockedImages, ...mockedImages].map(
          (image, index) => (
          <img key={String(index +1)} className="w-48" src={image.url} alt={image.id} /> //eslint-disable-line
          ),
        )}
      </div>
    </main>
  )
}
