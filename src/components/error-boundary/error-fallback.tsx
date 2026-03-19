import React from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void; // Optional reset handler
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      {resetErrorBoundary && <button onClick={resetErrorBoundary}>Try again</button>}
    </div>
  );
};

export default ErrorFallback;