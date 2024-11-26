// Component: ActionButton
const ActionButton = ({
    icon: Icon,
    label,
    onClick,
    color = "bg-gray-800",
  }) => (
    <button
      onClick={onClick}
      className={`${color} w-full flex items-center gap-3 text-gray-200 hover:brightness-110 px-4 py-3 rounded-lg transition-all duration-200 shadow-md`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

export default ActionButton