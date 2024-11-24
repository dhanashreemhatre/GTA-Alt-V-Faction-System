import React from 'react';

// Dialog context for managing state
const DialogContext = React.createContext({});

export const Dialog = ({ children, open, onOpenChange }) => {
  if (!open) return null;
  
  return (
    <DialogContext.Provider value={{ onOpenChange }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50" 
          onClick={() => onOpenChange(false)}
        />
        {/* Dialog container */}
        <div className="relative z-50">
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  );
};

export const DialogContent = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`
     rounded-lg shadow-lg 
      w-full max-w-md p-6 
      relative transform scale-100 
      transition-all duration-200
      ${className}
    `}>
      {children}
    </div>
  );
};

export const DialogTitle = ({ 
  children, 
  className = "" 
}) => {
  return (
    <h2 className={`text-lg font-semibold mb-2 ${className}`}>
      {children}
    </h2>
  );
};

export const DialogDescription = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      {children}
    </div>
  );
};

export const DialogFooter = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`
      mt-6 flex justify-end space-x-2
      ${className}
    `}>
      {children}
    </div>
  );
};

// Basic button component since we don't have shadcn/ui
export const Button = ({ 
  children, 
  variant = 'default', 
  className = "", 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
