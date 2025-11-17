import { useState, useCallback } from 'react';
import { SearchEngine } from '../data/siteData';

export const useSearch = (searchEngines: SearchEngine[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEngine, setSelectedEngine] = useState(searchEngines[0] || {});
  const [showEngineDropdown, setShowEngineDropdown] = useState(false);

  // 处理搜索
  const handleSearch = useCallback(() => {
    if (searchTerm.trim()) {
      window.open(selectedEngine.url + encodeURIComponent(searchTerm), '_blank');
    }
  }, [searchTerm, selectedEngine]);

  // 处理键盘事件
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  // 选择搜索引擎
  const handleEngineSelect = useCallback((engine: SearchEngine) => {
    setSelectedEngine(engine);
    setShowEngineDropdown(false);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    selectedEngine,
    setSelectedEngine,
    showEngineDropdown,
    setShowEngineDropdown,
    handleSearch,
    handleKeyPress,
    handleEngineSelect
  };
};