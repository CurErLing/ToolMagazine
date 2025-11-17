import { useState, useEffect, useCallback } from 'react';
import { initialToolCategories } from '../data/toolData';

export interface ToolCounter {
  [toolName: string]: number;
}

export const useToolCounters = () => {
  const [counters, setCounters] = useState<ToolCounter>({});

  // 从localStorage加载计数数据
  useEffect(() => {
    const savedCounters = localStorage.getItem('toolCounters');
    if (savedCounters) {
      try {
        setCounters(JSON.parse(savedCounters));
      } catch (error) {
        console.error('Failed to load tool counters from localStorage:', error);
      }
    }
  }, []);

  // 保存计数数据到localStorage
  useEffect(() => {
    if (Object.keys(counters).length > 0) {
      localStorage.setItem('toolCounters', JSON.stringify(counters));
    }
  }, [counters]);

  // 增加工具访问计数
  const incrementToolCount = useCallback((toolName: string) => {
    setCounters(prev => ({
      ...prev,
      [toolName]: (prev[toolName] || 0) + 1
    }));
  }, []);

  // 获取工具的当前访问次数
  const getToolCount = useCallback((toolName: string): number => {
    return counters[toolName] || 0;
  }, [counters]);

  // 重置所有计数（可选功能）
  const resetAllCounters = useCallback(() => {
    setCounters({});
    localStorage.removeItem('toolCounters');
  }, []);

  return {
    counters,
    incrementToolCount,
    getToolCount,
    resetAllCounters
  };
};
