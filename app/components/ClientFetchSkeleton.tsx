

export default function ClientFetchSkeleton() {
  return (
    <div className="border rounded-xl p-6 shadow-sm animate-pulse">
      <header className="mb-4 text-center">
        <div className="mx-auto h-6 w-32 rounded bg-gray-200" />
      </header>

      <div className="my-4 flex justify-center">
        <div className="h-10 w-48 rounded-lg bg-gray-200" />
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="h-12 w-12 rounded-lg bg-gray-200" />
        <div className="h-10 w-12 rounded-lg bg-gray-200" />
        <div className="h-12 w-12 rounded-lg bg-gray-200" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-4/6 rounded bg-gray-200" />
      </div>
    </div>
  );
}
