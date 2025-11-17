import React from 'react';
import { ToolItem } from '../data/toolData';
import {
  Brain,
  Image,
  FileText,
  FileVideo,
  Code,
  PenTool,
  Upload,
  ShoppingCart,
  Music,
  Server,
  Phone,
  Monitor,
  Wifi,
  Camera,
  Shield,
  Book,
  Gamepad2,
  Building2,
  Database,
  Keyboard,
  Download,
  Truck,
  Utensils,
  Globe,
  Mail
} from 'lucide-react';

interface ToolCardProps {
  tool: ToolItem;
  onClick: (e: React.MouseEvent) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  // 渲染图标的函数
  const renderIcon = () => {
    if (!tool.icon) {
      return <div className="h-5 w-5 bg-blue-600 rounded-full" aria-hidden="true" />;
    }
    
    try {
      // 添加调试信息
      console.log(`Tool: ${tool.name}, Icon type: ${typeof tool.icon}, Icon:`, tool.icon);
      
      // AI助手类工具
      if (tool.name.includes('ChatGPT') || tool.name.includes('Gemini') || tool.name.includes('豆包AI') || 
          tool.name.includes('讯飞星火') || tool.name.includes('DeepSeek') || tool.name.includes('智谱清言') || 
          tool.name.includes('文心一言') || tool.name.includes('文案变现营')) {
        return <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 图片处理类工具
      if (tool.name.includes('Figma') || tool.name.includes('Autodraw') || tool.name.includes('GemDesign') || 
          tool.name.includes('在线PS') || tool.name.includes('哩布哩布') || tool.name.includes('图像编辑模型') || 
          tool.name.includes('魔术橡皮擦') || tool.name.includes('在线抠图工具') || tool.name.includes('在线图像处理工具') || 
          tool.name.includes('会画AI修图') || tool.name.includes('Pixian抠图') || tool.name.includes('图片无损放大') || 
          tool.name.includes('bgsub') || tool.name.includes('upscayl图片无损放大') || tool.name.includes('图贴士') || 
          tool.name.includes('腾讯混元3D') || tool.name.includes('Tripo AI') || tool.name.includes('动漫图片溯源') || 
          tool.name.includes('动漫取景地') || tool.name.includes('美少女生成器') || tool.name.includes('动漫捏脸') || 
          tool.name.includes('查无此人') || tool.name.includes('AI 随机图像')) {
        return <Image className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 文档处理类工具
      if (tool.name.includes('听脑AI') || tool.name.includes('GitMind') || tool.name.includes('ProcessOn') || 
          tool.name.includes('anymind') || tool.name.includes('文字转语音工具') || tool.name.includes('灵感大师') || 
          tool.name.includes('猫啃网') || tool.name.includes('100font') || tool.name.includes('梯子BigME') || 
          tool.name.includes('蓝奏云') || tool.name.includes('iLovePDF') || tool.name.includes('alltoall') || 
          tool.name.includes('CDKM在线文件转换') || tool.name.includes('小蚂蚁编辑器') || tool.name.includes('慢慢买') || 
          tool.name.includes('Hemingway Editor') || tool.name.includes('OLOCR') || tool.name.includes('视频字幕拼接') || 
          tool.name.includes('简历本') || tool.name.includes('NumberEmpire') || tool.name.includes('易筏 TXT 在线阅读器') || 
          tool.name.includes('网名生成器') || tool.name.includes('多网址合一') || tool.name.includes('新浪短链接') || 
          tool.name.includes('表格转换器') || tool.name.includes('Rename批量改名') || tool.name.includes('Word联盟') ||
          tool.name.includes('PPT超级市场') || tool.name.includes('PPT设计教程网') || tool.name.includes('优品PPT') || 
          tool.name.includes('第一PPT') || tool.name.includes('AIPPT') || tool.name.includes('PPT模板宝') || 
          tool.name.includes('PPT汇') || tool.name.includes('免费查重') || tool.name.includes('小纸条') || 
          tool.name.includes('营销号生成器') || tool.name.includes('英语真题在线') || tool.name.includes('LingoHut') || 
          tool.name.includes('英语学习助手') || tool.name.includes('英语发音矫正器') || tool.name.includes('Youzack 精听') || 
          tool.name.includes('英语阅读网') || tool.name.includes('Loecsen') || tool.name.includes('词频背单词') || 
          tool.name.includes('Visuwords') || tool.name.includes('爱发音') || tool.name.includes('腾讯交互翻译') || 
          tool.name.includes('CNKI 翻译助手') || tool.name.includes('ExamCoo') || tool.name.includes('永久免费考试系统')) {
        return <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 视频处理类工具
      if (tool.name.includes('BigMP4') || tool.name.includes('即梦AI') || tool.name.includes('可灵AI') || 
          tool.name.includes('在线视频下载器') || tool.name.includes('B站视频下载') || tool.name.includes('B站下载') || 
          tool.name.includes('Vip视频在线解析') || tool.name.includes('影视资源搜索') || tool.name.includes('茶杯狐影视') || 
          tool.name.includes('MYD影视') || tool.name.includes('追影猫') || tool.name.includes('DDDOG影视') || 
          tool.name.includes('影合影视') || tool.name.includes('追剧猫') || tool.name.includes('硬核资源') || 
          tool.name.includes('4K HDR') || tool.name.includes('爱看机器人') || tool.name.includes('AGE动漫') || 
          tool.name.includes('gesamTV') || tool.name.includes('Anime1') || tool.name.includes('BimiACG') || 
          tool.name.includes('樱花动漫') || tool.name.includes('NYA Fun') || tool.name.includes('铃兰动漫') || 
          tool.name.includes('mvcat') || tool.name.includes('Justlive')) {
        return <FileVideo className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 代码工具
      if (tool.name.includes('GitHub') || tool.name.includes('Gitee') || tool.name.includes('码工具') || 
          tool.name.includes('编程自学之路') || tool.name.includes('菜鸟教程') || tool.name.includes('吴师兄学算法')) {
        return <Code className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 编辑器工具
      if (tool.name.includes('135编辑器') || tool.name.includes('TOolfk工具网') || tool.name.includes('帮小忙工具箱') || 
          tool.name.includes('奔跑中的奶酪') || tool.name.includes('网址导航「你不会百度吗」')) {
        return <PenTool className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 上传工具
      if (tool.name.includes('文叔叔')) {
        return <Upload className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 购物工具
      if (tool.name.includes('慢慢买')) {
        return <ShoppingCart className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 音乐工具
      if (tool.name.includes('六音无损音乐') || tool.name.includes('磁力音乐') || tool.name.includes('Midomi听歌识曲') || 
          tool.name.includes('音乐解锁') || tool.name.includes('音乐鱼') || tool.name.includes('How Music Taste Evolved') || 
          tool.name.includes('虚拟乐器') || tool.name.includes('在线钢琴') || tool.name.includes('古典音乐库') || 
          tool.name.includes('公共领域音乐')) {
        return <Music className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 服务器工具
      if (tool.name.includes('爱纯净') || tool.name.includes('假装升级')) {
        return <Server className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 电话工具
      if (tool.name.includes('receive-sms')) {
        return <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 屏幕工具
      if (tool.name.includes('在线屏幕录制') || tool.name.includes('在线屏幕测试') || tool.name.includes('UFO帧率测试')) {
        return <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 网络工具
      if (tool.name.includes('在线网速测试') || tool.name.includes('WiFi转二维码')) {
        return <Wifi className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 相机工具
      if (tool.name.includes('Onlinemictest')) {
        return <Camera className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 安全工具
      if (tool.name.includes('网络安全检测') || tool.name.includes('全球网络攻击图')) {
        return <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 书籍工具
      if (tool.name.includes('轻之国度') || tool.name.includes('魔笔小说') || tool.name.includes('鸠摩搜书') || 
          tool.name.includes('六月听书') || tool.name.includes('Flow EPUB阅读器') || tool.name.includes('书格') || 
          tool.name.includes('故事谷') || tool.name.includes('历史故事网·烟雨阁') || tool.name.includes('答案之书在线版') ||
          tool.name.includes('G站漫画') || tool.name.includes('mangacopy') || tool.name.includes('colamanga') || 
          tool.name.includes('gufengmh') || tool.name.includes('baozimh') || tool.name.includes('comic.idmzj')) {
        return <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 游戏工具
      if (tool.name.includes('Gamer520') || tool.name.includes('游戏手柄测试') || tool.name.includes('红警网页版') || 
          tool.name.includes('植物大战僵尸') || tool.name.includes('小霸王') || tool.name.includes('tetr.io') || 
          tool.name.includes('信任的进化') || tool.name.includes('人生重开模拟器') || tool.name.includes('slapkirk') || 
          tool.name.includes('反应测试')) {
        return <Gamepad2 className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 下载工具
      if (tool.name.includes('软仓') || tool.name.includes('AnyBT') || tool.name.includes("What's the link?")) {
        return <Download className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 餐饮工具
      if (tool.name.includes('麦当当营养计算器') || tool.name.includes('萌宠网站「今天吃什么」')) {
        return <Utensils className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 邮件工具
      if (tool.name.includes('临时邮箱')) {
        return <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 建筑工具
      if (tool.name.includes('实时地球') || tool.name.includes('海底世界') || tool.name.includes('随机街景') || 
          tool.name.includes('天际摄像头') || tool.name.includes('鲨鱼追踪器') || tool.name.includes('3D地球模型') || 
          tool.name.includes('远古地球') || tool.name.includes('光污染地图') || tool.name.includes('地球时钟') || 
          tool.name.includes('Ventusky') || tool.name.includes('流星雨观测') || tool.name.includes('航班追踪') || 
          tool.name.includes('CyArk') || tool.name.includes('故宫全景') || tool.name.includes('故宫数字文物') || 
          tool.name.includes('中华珍宝馆') || tool.name.includes('陕西博物馆') || tool.name.includes('上海博物馆AR') || 
          tool.name.includes('国博VR') || tool.name.includes('千亿像素中国') || tool.name.includes('历史照片库') || 
          tool.name.includes('荷兰国家博物馆') || tool.name.includes('卢浮宫藏品库') || tool.name.includes('波斯波利斯') || 
          tool.name.includes('苏联海报库') || tool.name.includes('艺术公域') || tool.name.includes('中国物种名录') || 
          tool.name.includes('百家讲坛') || tool.name.includes('历史上的今天') || tool.name.includes('观沧海') || 
          tool.name.includes('全球贸易数据') || tool.name.includes('公共钢琴地图') || tool.name.includes('井盖地图') || 
          tool.name.includes('电力设施地图') || tool.name.includes('护照博物馆') || tool.name.includes('UI设计史') || 
          tool.name.includes('世界国旗库') || tool.name.includes('Dollar Street') || tool.name.includes('数字游民指南') || 
          tool.name.includes('地平说协会') || tool.name.includes('机械键盘图鉴') || tool.name.includes('核弹模拟器') || 
          tool.name.includes('地球时间线') || tool.name.includes('克苏鲁公社') || tool.name.includes('极像素') || 
          tool.name.includes('OEC数据') || tool.name.includes('木材数据库') || tool.name.includes('无限美术馆') || 
          tool.name.includes('全球直播摄像头') || tool.name.includes('模拟器博物馆') || tool.name.includes('ArchDaily') || 
          tool.name.includes('8values测试') || tool.name.includes('网页时光机') || tool.name.includes('英特尔博物馆') || 
          tool.name.includes('铅笔图鉴') || tool.name.includes('物流艺术') || tool.name.includes('方言档案馆') || 
          tool.name.includes('行星年龄计算') || tool.name.includes('人口时钟') || tool.name.includes('移轴摄影世界') || 
          tool.name.includes('anyknew 热点')) {
        return <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 数据库工具
      if (tool.name.includes('全历史') || tool.name.includes('知妖') || tool.name.includes('乡音苑') || 
          tool.name.includes('知识图谱') || tool.name.includes('盘库吧') || tool.name.includes('手机博物馆') || 
          tool.name.includes('汤姆科技指南') || tool.name.includes('薪情')) {
        return <Database className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 键盘工具
      if (tool.name.includes('英语拼写打字练习') || tool.name.includes('打字打字')) {
        return <Keyboard className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 物流工具
      if (tool.name.includes('17Track 全球物流')) {
        return <Truck className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 全球工具
      if (tool.name.includes('深海探索') || tool.name.includes('AirPano') || tool.name.includes('Toucan') || 
          tool.name.includes('アニメ・まんがの日本語') || tool.name.includes('古登堡计划') || tool.name.includes('可汗学院') || 
          tool.name.includes('edX') || tool.name.includes('学堂在线')) {
        return <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // AI工具
      if (tool.name.includes('BibiGPT')) {
        return <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300" aria-hidden="true" />;
      }
      
      // 默认显示蓝点
      return <div className="h-5 w-5 bg-blue-600 rounded-full" aria-hidden="true" />;
    } catch (error) {
      console.error("Error rendering icon for tool:", tool.name, error);
      return <div className="h-5 w-5 bg-blue-600 rounded-full" aria-hidden="true" />;
    }
  };
  
  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="relative p-4">
        <div className="flex items-start space-x-3">
          {/* 图标区域 - 使用工具名称匹配图标 */}
          <div className="flex-shrink-0 mt-1">
            {renderIcon()}
          </div>
          
          {/* 内容区域 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
              {tool.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {tool.desc}
            </p>
          </div>
        </div>
        
        {/* 悬停效果 */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </div>
  );
};

export default ToolCard;