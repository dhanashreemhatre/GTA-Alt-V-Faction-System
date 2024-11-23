import React from "react";
import { ChevronDown } from "lucide-react";

const Select = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});
Select.displayName = "Select";

const SelectTrigger = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`
        flex h-10 w-full items-center justify-between rounded-md border border-gray-200
        bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500
        focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800
        dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400
        dark:focus:ring-gray-300 ${className}
      `}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={`block truncate ${className}`}
      {...props}
    />
  );
});
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200
        bg-white text-gray-950 shadow-md dark:border-gray-800 dark:bg-gray-950
        dark:text-gray-50 ${className}
      `}
      {...props}
    >
      <div className="w-full p-1">
        {children}
      </div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        relative flex w-full cursor-default select-none items-center rounded-sm
        py-1.5 px-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900
        data-[disabled]:pointer-events-none data-[disabled]:opacity-50
        dark:focus:bg-gray-800 dark:focus:text-gray-50 ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});
SelectItem.displayName = "SelectItem";

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };

