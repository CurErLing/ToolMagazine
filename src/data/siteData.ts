import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  name: string;
  title: string;  // 修改为title，与Testimonials组件中的使用一致
  content: string;
  rating: number; // 添加rating属性
}

export interface SearchEngine {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const testimonials: Testimonial[] = [
  {
    name: '张工',
    title: '全栈开发者',  // 修改为title
    content: '这个工具导航让我的工作效率提升了不少，强烈推荐！',
    rating: 5,  // 添加rating
  },
  {
    name: '李设计',
    title: 'UI设计师',  // 修改为title
    content: '分类清晰，界面美观，找工具变得特别方便。',
    rating: 5,  // 添加rating
  },
];

import { Search, Globe, Chrome } from 'lucide-react';

export const searchEngines: SearchEngine[] = [
  {
    id: 'baidu',
    name: '百度',
    url: 'https://www.baidu.com/s?wd=',
    icon: Search
  },
  {
    id: 'bing',
    name: '必应',
    url: 'https://www.bing.com/search?q=',
    icon: Globe
  },
  {
    id: 'google',
    name: '谷歌',
    url: 'https://www.google.com/search?q=',
    icon: Chrome
  },
];

export const faqs: FAQ[] = [
  {
    question: '如何提交新工具？',
    answer: '您可以通过页面底部的联系方式向我们提交新工具建议。我们会在审核后及时添加。',
  },
  {
    question: '收录标准是什么？',
    answer: '我们主要考虑工具的实用性、可靠性和用户评价。确保每个收录的工具都能真正帮助到用户。',
  },
];