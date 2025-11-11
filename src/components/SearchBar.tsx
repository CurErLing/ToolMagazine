import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { SearchEngine } from '../data/siteData';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedEngine: SearchEngine;
  setSelectedEngine: (engine: SearchEngine) => void;
  showEngineDropdown: boolean;
  setShowEngineDropdown: (show: boolean) => void;
  searchEngines: SearchEngine[];
  onSearch: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedEngine,
  setSelectedEngine,
  showEngineDropdown,
  setShowEngineDropdown,
  searchEngines,
  onSearch,
  onKeyPress
}) => {
  const handleEngineSelect = (engine: SearchEngine) => {
    setSelectedEngine(engine);
    setShowEngineDropdown(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="relative">
          <button
            onClick={() => setShowEngineDropdown(!showEngineDropdown)}
            className="flex items-center justify-between w-24 px-3 py-3 bg-white dark:bg-gray-800 rounded-l-lg border-r border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-haspopup="true"
            aria-expanded={showEngineDropdown}
          >
            <span>{selectedEngine.name}</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
            {showEngineDropdown && (
            <div className="absolute top-full left-0 mt-1 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
              {searchEngines.map((engine) => (
                <button
                  key={engine.name}
                  onClick={() => handleEngineSelect(engine)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {engine.name}
                </button>
                ))}
            </div>
          )}
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="搜索..."
            className="w-full pl-10 pr-4 py-3 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={onKeyPress}
            aria-label="搜索关键词"
          />
          <button
            onClick={onSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            aria-label="搜索"
          >
            搜索
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;