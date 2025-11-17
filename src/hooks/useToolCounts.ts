import { useState, useEffect, useCallback } from 'react';
import { ToolItem, initialToolCategories, ToolCategoryWithSub } from '../data/toolData';

export const useToolCounts = () => {
  const [toolCategories, setToolCategories] = useState<Record<string, ToolCategoryWithSub>>(initialToolCategories);

  // 从localStorage加载工具计数
  const loadToolCounts = useCallback(() => {
    try {
      const savedCounts = localStorage.getItem('toolCounts');
      if (!savedCounts) return initialToolCategories;
      
      const counts = JSON.parse(savedCounts);
      
      // 深度克隆初始分类，避免修改原始对象
      const categoriesWithCounts = JSON.parse(JSON.stringify(initialToolCategories));
      
      Object.keys(categoriesWithCounts).forEach(categoryKey => {
        const category = categoriesWithCounts[categoryKey] as ToolCategoryWithSub;
        if (category.subcategories) {
          Object.keys(category.subcategories).forEach(subKey => {
            const subcategory = category.subcategories![subKey]; // 使用非空断言操作符
            const tools = subcategory.tools;
            // 只在有计数时更新
            if (tools && Array.isArray(tools)) {
              tools.forEach((tool: ToolItem) => {
                if (counts[tool.url] !== undefined) {
                  tool.count = counts[tool.url];
                }
              });
              // 只有在需要时排序
              if (tools.length > 1) {
                (tools as ToolItem[]).sort((a: ToolItem, b: ToolItem) => b.count - a.count);
              }
            }
          });
        } else if (category.tools) {
          // 只在有计数时更新
          if (Array.isArray(category.tools)) {
            category.tools.forEach((tool: ToolItem) => {
              if (counts[tool.url] !== undefined) {
                tool.count = counts[tool.url];
              }
            });
            // 只有在需要时排序
            if (category.tools.length > 1) {
              (category.tools as ToolItem[]).sort((a: ToolItem, b: ToolItem) => b.count - a.count);
            }
          }
        }
      });
      
      return categoriesWithCounts;
    } catch (error) {
      console.error('从localStorage加载工具分类数据失败:', error);
      return initialToolCategories;
    }
  }, []);

  // 初始化时加载计数
  useEffect(() => {
    setToolCategories(loadToolCounts());
  }, [loadToolCounts]);

  // 更新工具计数
  const updateToolCount = useCallback((categoryKey: string, toolIndex: number, activeSubcategory: { [key: string]: string }) => {
    // 找到目标工具
    let targetTool: ToolItem | null = null;
    let toolsArray: ToolItem[] | null = null;
    
    const category = toolCategories[categoryKey] as ToolCategoryWithSub;
    
    if (category.subcategories && activeSubcategory[categoryKey]) {
      const subcategory = category.subcategories[activeSubcategory[categoryKey]];
      toolsArray = subcategory.tools;
      targetTool = toolsArray[toolIndex];
    } else if (category.tools) {
      toolsArray = category.tools;
      targetTool = toolsArray[toolIndex];
    }
    
    if (!targetTool || !toolsArray) return null;
    
    // 创建新的工具对象，而不是直接修改原始对象
    const updatedTool = { ...targetTool, count: targetTool.count + 1 };
    
    // 创建新的工具数组副本
    const updatedTools = [...toolsArray];
    updatedTools[toolIndex] = updatedTool;
    
    // 只有在需要时才排序（当前工具的计数发生变化可能会改变排序）
    if (toolsArray.length > 1) {
      updatedTools.sort((a: ToolItem, b: ToolItem) => b.count - a.count);
    }
    
    // 创建更新后的分类结构
    const newCategories = { ...toolCategories };
    if (category.subcategories && activeSubcategory[categoryKey]) {
      newCategories[categoryKey] = {
        ...category,
        subcategories: {
          ...category.subcategories,
          [activeSubcategory[categoryKey]]: {
            ...category.subcategories[activeSubcategory[categoryKey]],
            tools: updatedTools
          }
        }
      };
    } else if (category.tools) {
      newCategories[categoryKey] = {
        ...category,
        tools: updatedTools
      };
    }
    
    setToolCategories(newCategories);
    
    // 优化localStorage更新：只获取当前工具的计数，然后更新
    try {
      const savedCounts = localStorage.getItem('toolCounts');
      const currentCounts = savedCounts ? JSON.parse(savedCounts) : {};
      currentCounts[targetTool.url] = updatedTool.count;
      localStorage.setItem('toolCounts', JSON.stringify(currentCounts));
    } catch (error) {
      console.error('保存工具计数失败:', error);
    }
    
    return updatedTool.url;
  }, [toolCategories]);

  return {
    toolCategories,
    updateToolCount
  };
};