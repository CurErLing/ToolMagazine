import React from 'react';
import { ToolCategoryWithSub, ToolItem } from '../data/toolData';
import ToolCard from './ToolCard';

interface ToolCategorySectionProps {
  categoryKey: string;
  category: ToolCategoryWithSub;
  activeSubcategory: { [key: string]: string };
  onSubcategoryChange: (categoryKey: string, subKey: string) => void;
  onToolClick: (categoryKey: string, toolIndex: number) => void;
}

const ToolCategorySection: React.FC<ToolCategorySectionProps> = ({
  categoryKey,
  category,
  activeSubcategory,
  onSubcategoryChange,
  onToolClick
}) => {
  return (
    <section className="mb-16 scroll-mt-20" id={categoryKey} aria-labelledby={`${categoryKey}-heading`}>
      <h2 id={`${categoryKey}-heading`} className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
        {category.title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </h2>
      
      {/* 二级导航 - 仅在有子分类时显示 */}
      {category.subcategories && (
        <nav className="mb-6" aria-label={`${category.title} 子分类`}>
          <div className="flex flex-wrap gap-2 mb-4" role="tablist">
            {Object.entries(category.subcategories).map(([subKey, subcategory]) => (
              <button
                key={subKey}
                onClick={() => onSubcategoryChange(categoryKey, subKey)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeSubcategory[categoryKey] === subKey
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                role="tab"
                aria-selected={activeSubcategory[categoryKey] === subKey}
                aria-controls={`${categoryKey}-${subKey}-panel`}
                id={`${categoryKey}-${subKey}-tab`}
              >
                {subcategory.title}
              </button>
            ))}
          </div>
        </nav>
      )}
      
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        role="tabpanel"
        id={category.subcategories && activeSubcategory[categoryKey] ? `${categoryKey}-${activeSubcategory[categoryKey]}-panel` : undefined}
        aria-labelledby={category.subcategories && activeSubcategory[categoryKey] ? `${categoryKey}-${activeSubcategory[categoryKey]}-tab` : undefined}
      >
        {(category.subcategories && activeSubcategory[categoryKey] 
          ? (category.subcategories[activeSubcategory[categoryKey]]?.tools || [])
          : category.tools || []
        ).map((tool: ToolItem, index: number) => (
          <ToolCard 
            key={tool.url}
            tool={tool}
            onClick={() => onToolClick(categoryKey, index)}
          />
        ))}
      </div>
      
      {/* 添加分隔线 */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700"></div>
    </section>
  );
};

export default ToolCategorySection;