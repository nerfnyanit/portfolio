import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me | nerfnyanit"
}

export default function page() {
  return (
    <div className="py-10 px-4 sm:py-20 sm:px-6 mx-auto max-w-5xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-wide text-white">
        ABOUT ME
      </h1>
      
      <header className="space-y-2 mb-8 sm:mb-12">
        <h2 className="text-gray-400 text-sm sm:text-base">フロントエンドエンジニア</h2>
        <p className="text-gray-400 text-sm sm:text-base">東京都在住</p>
        <p className="text-sm sm:text-lg text-gray-200">
          Next.js / React を中心にUI設計と実装を行っています
        </p>
      </header>

      <main className="space-y-6">
        <section className="space-y-4 sm:space-y-6">
          <h3 className="relative inline-block text-xl sm:text-2xl font-bold text-white">
            どんな考えで開発しているか
          </h3>
          <p className="leading-relaxed text-gray-300 text-sm sm:text-base">
            React / Next.js を使ったフロントエンド開発を中心に学習・制作を行っています。<br />
            「なぜそう書くのか」を常に考え、可読性・保守性を意識したコンポーネント設計を心がけています。
          </p>

          <h3 className="relative inline-block text-xl sm:text-2xl font-bold text-white">
            今後の学習について
          </h3>
          <p className="leading-relaxed text-gray-300 text-sm sm:text-base">
            現在は App Router / Server Components の理解を深め、<br />
            設計レベルで Next.js を使いこなせることを目標にしています。
          </p>
        </section>

        {/* SNSリンク */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6 justify-start sm:justify-start">
          {/* GitHub */}
          <a
            href="https://github.com/nerfnyanit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="rounded-full p-3 transition-colors hover:bg-neutral-800">
              <Image 
                src="/about/Github.png" 
                alt="GitHub" 
                width={48} 
                height={48}
                className="transition-transform duration-200 group-hover:scale-110" 
              />
            </div>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>

          {/* X(Twitter) */}
          <a
            href="https://x.com/nerfnyanit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="rounded-full p-3 transition-colors hover:bg-neutral-800">
              <Image 
                src="/about/X(white).png" 
                alt="X(Twitter)" 
                width={48} 
                height={48}
                className="transition-transform duration-200 group-hover:scale-110" 
              />
            </div>
            <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              X(Twitter)
            </span>
          </a>
        </div>
      </main>
    </div>
  )
}
