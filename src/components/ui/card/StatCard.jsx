
// Component: StatCard
const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`${color} rounded-lg p-4 shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-200 opacity-80">{label}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-white opacity-75" />
      </div>
    </div>
  );

export default StatCard;