export interface StatsCardProps {
  label: string;
  value: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-bold text-4xl text-gray-800">{value}</span>
      <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
