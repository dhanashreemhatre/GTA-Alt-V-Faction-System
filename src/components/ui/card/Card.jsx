const Card = ({ children, className = '' }) => (
    <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
  
  const CardHeader = ({ children, className = '' }) => (
    <div className={`p-4 border-b border-gray-700 ${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children, className = '' }) => (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );

  export {Card,CardContent,CardHeader};