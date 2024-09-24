export default function LapsTableSkeleton() {
    return (
        <div className="table-auto w-full animate-pulse">
            {
                [...Array(20)].map((_, i) => (
                    <div key={i} className="h-8 bg-slate-200 rounded my-5"></div>
                ))
            }
        </div>
    )
}