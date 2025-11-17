import React, { useState } from 'react';
import { Code, Sun, Moon, Menu, X } from 'lucide-react';
import { ToolCategoryWithSub } from '../data/toolData';

interface HeaderProps {
  toolCategories: Record<string, ToolCategoryWithSub>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  toolCategories, 
  isDarkMode, 
  toggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" role="navigation" aria-label="主导航">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform duration-200 hover:rotate-12" aria-hidden="true" />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            凌同学工具库
          </span>
        </div>
        
        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center space-x-6" role="menubar">
          {Object.entries(toolCategories).map(([key, category]) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200"
              aria-label={category.title}
              role="menuitem"
            >
              {category.title}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
            role="switch"
            aria-checked={isDarkMode}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
            role="switch"
            aria-checked={isDarkMode}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>
      
      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          role="menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(toolCategories).map(([key, category]) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label={category.title}
                role="menuitem"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;