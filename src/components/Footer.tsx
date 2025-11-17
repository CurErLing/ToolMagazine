import React, { useState } from 'react';
import { Github, Twitter, Mail, Heart, ArrowUp, Send, Globe, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // 这里可以添加实际的订阅逻辑
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              关于我们
            </h3>
            <p className="text-gray-400 leading-relaxed">
              凌同学工具库致力于为用户提供优质的在线工具导航服务，让工作更高效，学习更轻松。
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>用</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>精心打造</span>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tools" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                  <span className="ml-2">工具分类</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                  <span className="ml-2">用户评价</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                  <span className="ml-2">常见问题</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* 联系我们 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-blue-400" />
              联系我们
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* 订阅更新 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">订阅更新</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="输入邮箱地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-800 dark:bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  aria-label="订阅"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm">订阅成功！感谢您的关注。</p>
              )}
            </form>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 凌同学工具库. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="返回顶部"
            >
              <span>返回顶部</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;