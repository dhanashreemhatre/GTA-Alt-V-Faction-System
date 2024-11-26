// Component: Status Indicator
const StatusIndicator = ({ status }) => (
    <div className="flex items-center gap-2">
      <div
        className={`h-2 w-2 rounded-full ${
          status === "Online" ? "bg-green-500" : "bg-gray-500"
        } animate-pulse`}
      />
      <span className={status === "Online" ? "text-green-500" : "text-gray-500"}>
        {status}
      </span>
    </div>
  );

export default StatusIndicator;