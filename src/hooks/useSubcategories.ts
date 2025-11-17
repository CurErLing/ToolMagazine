import { useState, useCallback } from 'react';

export const useSubcategories = () => {
  const [activeSubcategory, setActiveSubcategory] = useState<{ [key: string]: string }>({
    tools: 'ai', // 默认显示AI助手
    resources: 'music',
    explore: 'zoom'
  });

  // 切换子分类
  const switchSubcategory = useCallback((categoryKey: string, subKey: string) => {
    setActiveSubcategory(prev => ({ ...prev, [categoryKey]: subKey }));
  }, []);

  return {
    activeSubcategory,
    switchSubcategory
  };
};