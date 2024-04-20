import { type FC } from 'react'

export const TopNav: FC = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>SignIn</div>
    </nav>
  )
}
