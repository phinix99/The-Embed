export default function Band({ className = '' }: { className?: string }) {
  return <div className={`h-[3px] bg-green rounded-sm w-11 ${className}`} />;
}
