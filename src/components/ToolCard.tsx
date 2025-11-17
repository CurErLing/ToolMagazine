import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ToolItem } from '../data/toolData';

interface ToolCardProps {
  tool: ToolItem;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  // 获取工具图标组件
  const ToolIcon = tool.icon as React.ComponentType<{ className?: string }>;

  return (
    <article
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`group bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 transition-all duration-200 cursor-pointer relative ${
        isPressed 
          ? 'shadow-lg transform scale-95' 
          : 'hover:shadow-md hover:-translate-y-1'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`工具: ${tool.name}, 描述: ${tool.desc}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {typeof ToolIcon === 'function' ? (
            <ToolIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />
          ) : (
            <div className="h-5 w-5 bg-blue-600 rounded-full" aria-hidden="true" />
          )}
          <h3 className="ml-2 text-base font-semibold text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300">
            {tool.name}
          </h3>
        </div>
        <ExternalLink 
          className="h-4 w-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1" 
          aria-hidden="true" 
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{tool.desc}</p>
      {tool.count > 0 && (
        <div className="absolute bottom-2 right-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800" aria-label={`包含 ${tool.count} 个工具`}>
          {tool.count}
        </div>
      )}
    </article>
  );
};

export default ToolCard;