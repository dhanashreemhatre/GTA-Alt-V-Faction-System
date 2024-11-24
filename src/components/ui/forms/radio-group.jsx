// radio-group.jsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={`grid gap-2 ${className}`}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={`
        aspect-square h-4 w-4 rounded-full border border-gray-300
        text-primary ring-offset-background focus:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 disabled:cursor-not-allowed 
        disabled:opacity-50
        ${props.checked ? 'border-primary bg-primary' : 'border-input'}
        ${className}
      `}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

