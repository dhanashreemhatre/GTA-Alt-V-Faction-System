const Button = ({ children, className = '', onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors  ${className}`}
    >
      {children}
    </button>
  );

export default Button;