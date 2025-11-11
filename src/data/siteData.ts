export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface SearchEngine {
  name: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const testimonials: Testimonial[] = [
  {
    name: '张工',
    role: '全栈开发者',
    content: '这个工具导航让我的工作效率提升了不少，强烈推荐！',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: '李设计',
    role: 'UI设计师',
    content: '分类清晰，界面美观，找工具变得特别方便。',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
];

export const searchEngines: SearchEngine[] = [
  {
    name: '百度',
    url: 'https://www.baidu.com/s?wd=',
  },
  {
    name: '必应',
    url: 'https://www.bing.com/search?q=',
  },
  {
    name: '谷歌',
    url: 'https://www.google.com/search?q=',
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