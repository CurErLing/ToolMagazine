import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ToolItem } from '../data/toolData';

interface ToolCardProps {
  tool: ToolItem;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer relative"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <tool.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="ml-2 text-base font-semibold text-gray-900 dark:text-white">
            {tool.name}
          </h3>
        </div>
        <ExternalLink 
          className="h-4 w-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
          aria-hidden="true" 
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.desc}</p>
      {tool.count > 0 && (
        <div className="absolute bottom-2 right-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
          {tool.count}
        </div>
      )}
    </div>
  );
};

export default ToolCard;