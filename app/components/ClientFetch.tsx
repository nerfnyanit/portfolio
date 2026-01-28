"use client";

import { useClientFetch } from "../hooks/useClientFetch";
import ClientFetchSkeleton from "./ClientFetchSkeleton";

export default function ClientFetch() {
  const {
    loading,
    users,
    error,
    increment,
    decrement,
    count,
  } = useClientFetch();

  if(loading) {
    return <ClientFetchSkeleton />
  }

  if (error) {
    return (
      <div className="border rounded-xl p-6 shadow-sm text-center text-red-500">
        ユーザー取得に失敗しました
      </div>
    );
  }

  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <header className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Client Fetch</h2>
      </header>

      {users && (
        <div className="my-4 flex justify-center">
          <p className="border rounded-lg px-4 py-2 text-center">
            {users.name}
          </p>
        </div>
      )}

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={decrement}
          aria-label="前のユーザーを表示"
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
          ＜
        </button>

        <p
          className="rounded-lg border px-4 py-2 text-base font-bold"
          role="status"
          aria-live="polite"
        >
          {count}
        </p>

        <button
          onClick={increment}
          aria-label="次のユーザーを表示"
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
          ＞
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        データ取得に関する状態と処理ロジックをカスタムフックとして切り出し、
        UIコンポーネントから非同期処理や状態管理の責務を分離しました。
        状態更新には関数型更新を用い、
        複数回の更新が発生しても状態の競合や意図しない更新が起きない設計としています。
      </p>
    </div>
  );
}
