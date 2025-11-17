import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = '加载中...', 
  fullScreen = false 
}) => {
  const containerClass = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-50'
    : 'flex flex-col items-center justify-center py-12';

  return (
    <div className={containerClass}>
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
        {message}
      </p>
    </div>
  );
};

export default LoadingState;