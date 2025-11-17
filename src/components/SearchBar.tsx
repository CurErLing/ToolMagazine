import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { SearchEngine } from '../data/siteData';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedEngine: SearchEngine;
  onEngineSelect: (engine: SearchEngine) => void;
  onSearch: () => void;
  searchEngines: SearchEngine[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedEngine,
  onEngineSelect,
  onSearch,
  searchEngines
}) => {
  const [showEngineDropdown, setShowEngineDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowEngineDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 获取搜索引擎图标组件
  const EngineIcon = selectedEngine.icon;

  return (
    <div className="max-w-2xl mx-auto">
      <form 
        className={`relative rounded-lg shadow-lg transition-all duration-300 ${isFocused ? 'shadow-xl' : ''}`}
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        role="search"
        aria-label="网站搜索"
      >
        {/* 搜索引擎选择器 */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setShowEngineDropdown(!showEngineDropdown)}
            className="flex items-center h-full px-4 bg-gray-50 dark:bg-gray-700 border-r border-gray-300 dark:border-gray-600 rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="选择搜索引擎"
            aria-expanded={showEngineDropdown}
            aria-haspopup="listbox"
          >
            <EngineIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" aria-hidden="true" />
            <ChevronDown 
              className={`ml-2 h-4 w-4 text-gray-500 transition-transform duration-200 ${showEngineDropdown ? 'rotate-180' : ''}`} 
              aria-hidden="true"
            />
          </button>
          
          {/* 搜索引擎下拉菜单 */}
          {showEngineDropdown && (
            <div 
              className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 overflow-hidden"
              role="listbox"
              aria-label="搜索引擎列表"
            >
              {searchEngines.map((engine) => {
                const Icon = engine.icon;
                return (
                  <button
                    key={engine.id}
                    type="button"
                    onClick={() => {
                      onEngineSelect(engine);
                      setShowEngineDropdown(false);
                    }}
                    className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      selectedEngine.id === engine.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    role="option"
                    aria-selected={selectedEngine.id === engine.id}
                  >
                    <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300 mr-3" aria-hidden="true" />
                    <span className="text-gray-900 dark:text-white">{engine.name}</span>
                    {selectedEngine.id === engine.id && (
                      <span className="ml-auto text-blue-600 dark:text-blue-400 text-sm">当前</span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        
        {/* 搜索输入框 */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={`在 ${selectedEngine.name} 上搜索...`}
          className="w-full pl-24 pr-12 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          aria-label="搜索关键词"
          autoComplete="off"
        />
        
        {/* 搜索按钮 */}
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 flex items-center px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-all duration-200 hover:shadow-md transform hover:scale-105"
          aria-label="执行搜索"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;