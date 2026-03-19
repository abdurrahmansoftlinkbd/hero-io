const Skeleton = () => {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100">
      <div className="skeleton w-full aspect-4/3 rounded-none" />
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 w-3/4 rounded-sm" />
        <div className="flex items-center justify-between">
          <div className="skeleton h-4 w-16 rounded-sm" />
          <div className="skeleton h-4 w-12 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
