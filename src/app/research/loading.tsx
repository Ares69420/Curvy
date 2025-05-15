export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 rounded-full opacity-25"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-purple-400">Loading research...</p>
      </div>
    </div>
  );
}