export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl p-4 text-gray-900 bg-zinc-500 shadow-lg hover:shadow-2xl transform transition-all duration-150 mt-5">
      {children}
    </div>
  );
}
