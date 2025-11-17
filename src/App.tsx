import { useEffect, useCallback } from 'react';
import { validateToolData } from './data/toolData';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ToolCategorySection from './components/ToolCategorySection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { testimonials, faqs, searchEngines } from './data/siteData';
import { useToolCounts } from './hooks/useToolCounts';
import { useDarkMode } from './hooks/useDarkMode';
import { useSearch } from './hooks/useSearch';
import { useFAQ } from './hooks/useFAQ';
import { useSubcategories } from './hooks/useSubcategories';

export default function App() {
  // 使用自定义Hooks管理状态
  const { toolCategories, updateToolCount } = useToolCounts();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { searchTerm, setSearchTerm, selectedEngine, setSelectedEngine, handleSearch } = useSearch(searchEngines);
  const { activeFaq, toggleFaq } = useFAQ();
  const { activeSubcategory, switchSubcategory } = useSubcategories();
  
  // 处理工具点击
  const handleToolClick = useCallback((categoryKey: string, toolIndex: number) => {
    const toolUrl = updateToolCount(categoryKey, toolIndex, activeSubcategory);
    if (toolUrl) {
      window.open(toolUrl, '_blank');
    }
  }, [updateToolCount, activeSubcategory]);
  
  // 在开发环境下验证数据
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const isValid = validateToolData();
      if (!isValid) {
        console.warn('工具数据验证失败，请检查数据格式');
      }
    }
  }, []);

  // 设置文档标题 - 只在组件挂载时执行一次
  useEffect(() => {
    document.title = '凌同学工具库';
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header 
            toolCategories={toolCategories}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          
          {/* 搜索区域 */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" aria-labelledby="main-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 id="main-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  凌同学工具库
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  发现并使用最优质的在线工具，提升您的工作效率
                </p>
                <SearchBar 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedEngine={selectedEngine}
                  onEngineSelect={setSelectedEngine}
                  onSearch={handleSearch}
                  searchEngines={searchEngines}
                />
              </div>
            </div>
          </section>
          
          {/* 工具分类展示 */}
          <section id="tools" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* 移除了精选工具分类标题和描述 */}
              
              {Object.entries(toolCategories).map(([key, category]) => (
                <ErrorBoundary key={key}>
                  <ToolCategorySection
                    categoryKey={key}
                    category={category}
                    activeSubcategory={activeSubcategory}
                    onSubcategoryChange={switchSubcategory}
                    onToolClick={handleToolClick}
                  />
                </ErrorBoundary>
              ))}
            </div>
          </section>
          
          {/* 用户评价 */}
          <section id="testimonials" aria-labelledby="testimonials-heading">
            <ErrorBoundary>
              <Testimonials testimonials={testimonials} />
            </ErrorBoundary>
          </section>
          
          {/* FAQ部分 */}
          <section id="faq" aria-labelledby="faq-heading">
            <ErrorBoundary>
              <FAQ faqs={faqs} activeFaq={activeFaq} toggleFaq={toggleFaq} />
            </ErrorBoundary>
          </section>
          
          {/* 页脚 */}
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
          
          {/* 返回顶部按钮 */}
          <BackToTop />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}