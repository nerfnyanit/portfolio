"use client"

import useInput from "../hooks/useInput"

export default function Input() {
    const {input,view,handleSubmit,handleChange,reset} = useInput();

  return (
    <div className="border rounded-xl p-6 shadow-sm">
        <main className="mb-4">
          <h1 className="text-center text-3xl font-bold">Input</h1>
          <h1 className="text-center text-2xl font-semibold mt-4">{view}</h1>

          <form 
            onSubmit={handleSubmit} 
            className="mt-2 flex gap-2 items-center"
          >
            <input
              placeholder="入力"
              className="flex-1 rounded-lg border px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={handleChange}
            />

            <button 
              type="submit" 
              className="rounded-lg bg-blue-600 text-white px-2 py-2 text-sm font-medium transition hover:bg-blue-700 active:scale-95">
                送信
            </button>

            <button 
              type="button" 
              onClick={reset} 
              className="rounded-lg border border-red-500 px-4 py-2 text-sm font-medium transition active:scale-95">
                リセット
            </button>

            </form>
        </main>

            <p className="mt-4 text-sm leading-relaxed">
              入力状態および送信処理をカスタムフックで管理し、UIから状態管理の責務を分離しています。
              型安全なイベントハンドラを用いて入力値を更新し、空白入力は送信不可とすることで不正な状態遷移を防止しました。
              リセット時には入力値と表示状態を同時にクリアし、UIの一貫性を担保しています。
            </p>
    </div>
  )
}
