import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const borderClasses = {
    sm: 'border-2',
    md: 'border-4',
    lg: 'border-4'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} ${borderClasses[size]} rounded-full border-gray-200 dark:border-gray-700`}></div>
        <div className={`${sizeClasses[size]} ${borderClasses[size]} rounded-full border-blue-600 border-t-transparent animate-spin absolute top-0 left-0`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;