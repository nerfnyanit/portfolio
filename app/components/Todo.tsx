"use client";

import { useTodo } from "../hooks/useTodo";

export default function Todo() {
  const {
    todos,
    input,
    handleSubmit,
    handleChange,
    toggleCheck,
    deleteTodo,
  } = useTodo();

  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <header className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Todo</h2>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-2 mb-6 min-w-0"
      >
        <input
          className="
            w-full
            min-w-0
            border
            rounded-lg
            px-3
            py-2
            text-sm
            sm:px-3
            sm:py-3
            sm:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          placeholder="やることを入力"
          value={input}
          onChange={handleChange}
          aria-label="やることを入力"
        />

        <button
          type="submit"
          className="
            shrink-0
            rounded-lg
            bg-blue-600
            text-white
            px-4
            py-2
            text-sm
            sm:px-5
            sm:py-3
            sm:text-base
            font-medium
            transition
            hover:bg-blue-700
            active:scale-95
          "
        >
          追加
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              px-4
              py-3
            "
          >
            <span
              className={`flex-1 text-left ${
                todo.check ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleCheck(todo.id)}
                aria-label={
                  todo.check
                    ? "未完了に戻す"
                    : "完了にする"
                }
                className="
                  text-2xl
                  px-2
                  transition
                  hover:scale-110
                "
              >
                {todo.check ? "☑" : "☐"}
              </button>

              <button
                onClick={() => deleteTodo(todo.id)}
                aria-label="Todoを削除"
                className="
                  px-2
                  text-sm
                  text-red-500
                  hover:text-red-600
                  transition
                "
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        Todoの追加・完了切替・削除ができるシンプルなTodoアプリを実装しました。
        状態管理と操作ロジックをカスタムフックに切り出し、
        UIコンポーネントから分離することで、
        保守性と再利用性を意識した設計としています。
      </p>
    </div>
  );
}
