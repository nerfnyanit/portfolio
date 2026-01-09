import { Metadata } from "next";
import ClientFetch from "../components/ClientFetch";
import Counter from "../components/Counter";
import Todo from "../components/Todo";

export const metadata: Metadata = {
  title: "Projects | nerfnyanit"
}

export default function page() {
  return (
  <section className="py-20 px-6 mx-auto max-w-5xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-wide">
        PROJECTS
      </h1>

      <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-2xl">
        学習・実装を通して制作したフロントエンド作品です。<br />
        UI設計・状態管理・データ取得などを意識して実装しています。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <Counter />
        <ClientFetch />
        <Todo />
      </div>
  </section>
  )
}