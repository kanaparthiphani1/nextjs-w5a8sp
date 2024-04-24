export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-center items-center w-[150px] h-[150px] border-2 border-solid border-slate-50	">
      {children}
    </div>
  );
}
