import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import { ToolCategoryWithSub } from '../data/toolData';

interface HeaderProps {
  toolCategories: Record<string, ToolCategoryWithSub>;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onCategoryClick: (categoryKey: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  toolCategories, 
  isDarkMode, 
  onToggleDarkMode, 
  onCategoryClick 
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            凌同学工具库
          </span>
        </div>
        <div className="flex items-center space-x-6">
          {Object.entries(toolCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => onCategoryClick(key)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-200"
              aria-label={category.title}
            >
              {category.title}
            </button>
          ))}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;