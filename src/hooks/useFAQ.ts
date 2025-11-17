import { useState, useCallback } from 'react';

export const useFAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // 切换FAQ展开状态
  const toggleFaq = useCallback((index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  }, [activeFaq]);

  return {
    activeFaq,
    toggleFaq
  };
};