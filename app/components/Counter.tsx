"use client";

import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <header className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Counter</h2>
        <p
          className="text-3xl font-bold"
          role="status"
          aria-live="polite"
        >
          {count}
        </p>
      </header>

      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={increment}
          aria-label="カウントを増やす"
          className="
            rounded-lg
            border
            px-5
            py-3
            text-base
            font-medium
            transition
            hover:bg-gray-100
            active:scale-95
            focus:outline-none
            focus:ring-2
          "
        >
          +
        </button>

        <button
          onClick={decrement}
          aria-label="カウントを減らす"
          className="
            rounded-lg
            border
            px-5
            py-3
            text-base
            font-medium
            transition
            hover:bg-gray-100
            active:scale-95
            focus:outline-none
            focus:ring-2
          "
        >
          −
        </button>

        <button
          onClick={reset}
          aria-label="カウントをリセット"
          className="
            rounded-lg
            border
            border-red-500
            px-5
            py-3
            text-base
            font-medium
            transition
            hover:bg-red-50
            active:scale-95
            focus:outline-none
            focus:ring-2
            focus:ring-red-400
          "
        >
          リセット
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        カウント状態と増減操作をカスタムフックに集約し、
        UIコンポーネントは表示と操作のトリガーのみに専念させています。
        増減処理には関数型更新を採用し、
        Reactの非同期更新による状態不整合を防止しました。
      </p>
    </div>
  );
}
