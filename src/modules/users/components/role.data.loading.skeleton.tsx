export default function RoleDataLoadingSkeleton() {
  return (
    <>
      <div className="border-t border-t-slate-300 border-b border-b-slate-300 px-3">
        <div className="flex gap-1 items-center">
          <div className="bg-slate-300 w-20 h-1"></div>
          <span className="text-slate-300 text-lg font-bold">:</span>
          <div className="bg-slate-300 w-32 h-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bg-slate-200 h-40 rounded-md"></div>
        ))}
      </div>
    </>
  );
}
