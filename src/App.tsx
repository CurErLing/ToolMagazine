import React, { useState, useRef, useEffect } from 'react';
import { ToolItem, ToolCategoryWithSub, ToolSubCategory, initialToolCategories } from './data/toolData';
import {
  Github,
  Twitter,
  Mail
} from 'lucide-react';

// 导入组件和数据
import { testimonials, searchEngines, faqs } from './data/siteData';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEngine, setSelectedEngine] = useState(searchEngines[0] || {});
  const [showEngineDropdown, setShowEngineDropdown] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeSubcategory, setActiveSubcategory] = useState<Record<string, string>>({
    tools: 'ai', // 默认显示AI助手
    resources: 'music',
    explore: 'zoom'
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // 优化初始加载：从localStorage中获取工具计数
  const getInitialToolCategories = (): Record<string, ToolCategoryWithSub> => {
    try {
      const savedCounts = localStorage.getItem('toolCounts');
      if (!savedCounts) return initialToolCategories;
      
      const counts = JSON.parse(savedCounts);
      
      // 深度克隆初始分类，避免修改原始对象
      const categoriesWithCounts = JSON.parse(JSON.stringify(initialToolCategories));
      
      Object.keys(categoriesWithCounts).forEach((categoryKey: string) => {
        const category = categoriesWithCounts[categoryKey];
        if (category.subcategories) {
          Object.keys(category.subcategories).forEach(subKey => {
            const tools = category.subcategories![subKey].tools;
            // 只在有计数时更新
            if (tools && Array.isArray(tools)) {
              tools.forEach((tool: ToolItem) => {
                if (counts[tool.url] !== undefined) {
                  tool.count = counts[tool.url];
                }
              });
              // 只有在需要时排序
              if (tools.length > 1) {
                tools.sort((a: ToolItem, b: ToolItem) => b.count - a.count);
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
              category.tools.sort((a: ToolItem, b: ToolItem) => b.count - a.count);
            }
          }
        }
      });
      
      return categoriesWithCounts;
    } catch (error) {
      console.error('Error loading tool categories from localStorage:', error);
      return initialToolCategories;
    }
  };

  const [toolCategories, setToolCategories] = useState<Record<string, ToolCategoryWithSub>>(getInitialToolCategories);

  useEffect(() => {
    // 设置文档标题 - 只在组件挂载时执行一次
    document.title = '凌同学工具库';
  }, []);

  useEffect(() => {
    // 处理暗模式 - 只有在模式改变时执行
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  const scrollToCategory = (categoryKey: string): void => {
    categoryRefs.current[categoryKey]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleSearch = (): void => {
    if (searchTerm.trim()) {
      window.open(selectedEngine.url + encodeURIComponent(searchTerm), '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleToolClick = (categoryKey: string, toolIndex: number): void => {
    // 找到目标工具
    let targetTool: ToolItem | null = null;
    let toolsArray: ToolItem[] | null = null;
    
    const category = toolCategories[categoryKey] as ToolCategoryWithSub;
    
    if (category.subcategories && activeSubcategory[categoryKey]) {
      const subcategory = category.subcategories[activeSubcategory[categoryKey]] as ToolSubCategory;
      toolsArray = subcategory.tools;
      targetTool = toolsArray[toolIndex];
    } else if (category.tools) {
      toolsArray = category.tools;
      targetTool = toolsArray[toolIndex];
    }
    
    if (!targetTool || !toolsArray) return;
    
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
    const savedCounts = localStorage.getItem('toolCounts');
    const currentCounts = savedCounts ? JSON.parse(savedCounts) : {};
    currentCounts[targetTool.url] = updatedTool.count;
    localStorage.setItem('toolCounts', JSON.stringify(currentCounts));
    
    // 最后打开工具链接
    window.open(targetTool.url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header 
        toolCategories={toolCategories}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onCategoryClick={scrollToCategory}
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            发现最实用的在线工具
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            精选优质工具，提升工作效率
          </p>
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedEngine={selectedEngine}
            setSelectedEngine={setSelectedEngine}
            showEngineDropdown={showEngineDropdown}
            setShowEngineDropdown={setShowEngineDropdown}
            searchEngines={searchEngines}
            onSearch={handleSearch}
            onKeyPress={handleKeyPress}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(toolCategories).map(([key, category]: [string, ToolCategoryWithSub]) => (
          <div
            key={key}
            className="mb-16"
            ref={(el) => (categoryRefs.current[key] = el)}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {category.title}
            </h2>
            
            {/* 二级导航 - 仅在有子分类时显示 */}
            {category.subcategories && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(category.subcategories).map(([subKey, subcategory]: [string, ToolSubCategory]) => (
                    <button
                      key={subKey}
                      onClick={() => setActiveSubcategory(prev => ({ ...prev, [key]: subKey }))}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        activeSubcategory[key] === subKey
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {subcategory.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(category.subcategories && activeSubcategory[key] 
                ? category.subcategories[activeSubcategory[key]].tools 
                : category.tools || []
              ).map((tool: ToolItem, index: number) => (
                <ToolCard 
                  key={tool.url}
                  tool={tool}
                  onClick={() => handleToolClick(key, index)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <Testimonials testimonials={testimonials} />
      <FAQ 
        faqs={faqs} 
        activeFaq={activeFaq} 
        setActiveFaq={setActiveFaq} 
      />

      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-gray-400">
                凌同学工具库致力于为用户提供优质的在线工具导航服务。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    工具分类
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    最新推荐
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    关于我们
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">订阅更新</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入邮箱地址"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200">
                  订阅
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 凌同学工具库. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;