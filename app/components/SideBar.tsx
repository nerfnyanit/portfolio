import Link from "next/link";

export default function SideBar() {

  const linkClass = `
    relative
    text-gray-400 hover:text-white
    transition-colors
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-white
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `
  
  return (
    <>
      {/* PC版サイドバー */}
      <nav className="pt-10 hidden md:block">

        <div className="relative mb-10">
          <h1 className="text-5xl font-extrabold text-white relative z-10">
            nerfnyanit
          </h1>
          <h2 className="absolute top-16 left-0 text-xl text-gray-400 tracking-widest z-0">
            Web Frontend Engineer
          </h2>
        </div>

        <div className="flex flex-col gap-8 mt-40 text-2xl font-semibold">
          <Link href="/" className={linkClass}>Home</Link>
          <Link href="/projects" className={linkClass}>Projects</Link>
          <Link href="/skills" className={linkClass}>Skills</Link>
          <Link href="/about" className={linkClass}>About Me</Link>
        </div>
      </nav>

      {/* モバイル版下部ナビ */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 py-4 px-4 flex justify-around md:hidden">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
        <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</Link>
        <Link href="/skills" className="text-gray-400 hover:text-white transition-colors text-sm">Skills</Link>
        <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
      </nav>
    </>
  )
}
