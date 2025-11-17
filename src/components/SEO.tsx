import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = '凌同学工具库 - 发现并使用最优质的在线工具',
  description = '凌同学工具库致力于为用户提供优质的在线工具导航服务，让工作更高效，学习更轻松。我们精心挑选了各类实用工具，覆盖工作、学习和生活的方方面面。',
  keywords = '在线工具,工具导航,效率工具,学习工具,工作工具,生活工具,工具集合',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  siteName = '凌同学工具库',
  author = '凌同学',
  lang = 'zh-CN'
}) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        // 基础元标签
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'author', content: author },
        
        // Open Graph 标签
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: lang },
        
        // Twitter Card 标签
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        
        // 移动端优化
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: siteName },
        
        // 图标
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Manifest
        { rel: 'manifest', href: '/manifest.json' },
        
        // Cananical URL
        { rel: 'canonical', href: url }
      ]}
      script={[
        // 结构化数据
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            description,
            url,
            image,
            author: {
              '@type': 'Person',
              name: author
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: `${url}?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          })
        }
      ]}
    />
  );
};

export default SEO;