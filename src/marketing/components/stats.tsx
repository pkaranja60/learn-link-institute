export function Stats() {
  return (
    <div className="flex flex-col gap-6 pt-20 pl-10 lg:w-96 lg:shrink-0 lg:border-gray-700 lg:border-r lg:pr-8">
      <div className="flex items-center gap-4">
        <span className="font-bold text-4xl text-gray-800">5000+</span>
        <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">
          Professionals Trained
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-4xl text-gray-800">10+</span>
        <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">
          Years of Experience
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-4xl text-gray-800">30+</span>
        <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">
          Countries
        </span>
      </div>
    </div>
  );
}
