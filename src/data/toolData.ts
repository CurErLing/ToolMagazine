import * as Icons from 'lucide-react';

// 导入所有需要的图标
const {
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
  Mail,
  TrendingUp,
  Users,
  Calculator,
  Smartphone,
  BarChart,
  Clock
} = Icons;

// 图标映射，简化数据中的图标引用
const iconMap = {
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
  Mail,
  TrendingUp,
  Users,
  Calculator,
  Smartphone,
  BarChart,
  Clock
} as const;

export type IconName = keyof typeof iconMap;
export { iconMap };

export interface ToolItem {
  name: string;
  desc: string;
  icon: IconName;
  url: string;
  count: number;
}

export interface ToolSubCategory {
  title: string;
  tools: ToolItem[];
}

export interface ToolCategoryWithSub {
  title: string;
  subcategories?: Record<string, ToolSubCategory>;
  tools?: ToolItem[];
}

export type ToolCategories = Record<string, ToolCategoryWithSub>;

// 辅助函数，简化工具创建
const createTool = (name: string, desc: string, icon: IconName, url: string, count = 0): ToolItem => ({
  name,
  desc,
  icon,
  url,
  count
});

// 辅助函数，简化子分类创建  
const createSubCategory = (title: string, tools: ToolItem[]): ToolSubCategory => ({
  title,
  tools
});

export const initialToolCategories: ToolCategories = {
  tools: {
    title: '在线工具',
    subcategories: {
      ai: createSubCategory('AI助手', [
        createTool("ChatGPT", "全球领先AI对话平台", "Brain", "https://chatgpt.com/"),
        createTool("Gemini", "谷歌AI对话生成平台", "Brain", "https://gemini.google.com/app"),
        createTool("豆包AI", "字节AI智能对话助手", "Brain", "https://www.doubao.com/chat/?channel=cnblogs"),
        createTool("讯飞星火", "讯飞大模型交互平台", "Brain", "https://xinghuo.xfyun.cn/desk"),
        createTool("DeepSeek", "深度求索对话生成器", "Brain", "https://chat.deepseek.com"),
        createTool("Kimi", "月之暗面智能对话助手", "Brain", "https://kimi.moonshot.cn/"),
        createTool("Claude", "Anthropic智能对话助手", "Brain", "https://claude.ai/"),
        createTool("Perplexity", "AI搜索引擎助手", "Brain", "https://www.perplexity.ai/"),
        createTool("通义千问", "阿里大模型对话平台", "Brain", "https://tongyi.aliyun.com/"),
        createTool("腾讯混元", "腾讯大模型智能助手", "Brain", "https://hunyuan.tencent.com/"),
        createTool("秘塔AI", "专业AI搜索对话助手", "Brain", "https://metaso.cn/"),
        createTool("智谱清言", "智谱AI聊天助手", "Brain", "https://chatglm.cn/main/alltoolsdetail?lang=zh"),
        createTool("文心一言", "百度大模型对话平台", "Brain", "https://chat.baidu.com/app"),
      ]),
      design: createSubCategory('办公工具', [
        createTool('Figma', '在线协作设计平台', 'Image', 'https://www.figma.com/'),
        createTool('Autodraw', 'AI智能图标绘制器', 'Image', 'https://www.autodraw.com/'),   
        createTool('GemDesign', 'AI原型设计工具', 'Image', 'https://design.gemcoder.com/'),
        createTool('听脑AI', 'AI语音录音记录助手', 'FileText', 'https://itingnao.com/'),
        createTool('GitMind', 'AI思维导图', 'FileText', 'https://gitmind.cn/'),
        createTool('ProcessOn', '在线思维导图', 'FileText', 'https://www.processon.com'),
        createTool('anymind', 'AI思维导图工具', 'FileText', 'https://www.amymind.com'),
        createTool('文字转语音工具', 'AI语音', 'FileText', 'https://huggingface.co/spaces/zomehwh/vits-models-genshin-bh3'),
        createTool('灵感大师', 'AI写作辅助', 'FileText', 'https://chat.baidu.com/app'),
        createTool("在线PS", "网页版Photoshop工具", "Image", "https://zaixianps.net"),
        createTool("猫啃网", "设计字体与素材库", "FileText", "https://www.maoken.com"),
        createTool('100font', '免费商用字体', 'FileText', 'https://www.100font.com'),
      ]),
      image: createSubCategory('图片处理', [
        createTool('哩布哩布', 'AI绘画图像生成器', 'Image', 'https://www.liblib.art/'),
        createTool('图像编辑模型', 'AI智能绘图工具箱', 'Image', 'https://lmarena.ai/'),
        createTool('魔术橡皮擦', 'AI图片背景去除器', 'Image', 'https://magicstudio.com/zh/magiceraser'),
        createTool('在线抠图工具', 'AI一键抠图神器', 'Image', 'https://www.remove.bg/zh'),
        createTool('在线图像处理工具', '便捷在线图像编辑', 'Image', 'https://remove.photos/zh-cn/'),
        createTool("会画AI修图", "AI图像局部重绘", "Image", "https://www.ihuiwa.com/workspace/ai-image/partial-redraw"),
        createTool('Pixian抠图', '快速精准图像抠图', 'Image', 'https://pixian.ai/'),
        createTool('图片无损放大', 'AI清晰度增强工具', 'Image', 'https://bigjpg.com/'),
        createTool('bgsub', '智能抠图工具', 'Image', 'https://bgsub.cn'),
        createTool('upscayl图片无损放大', '开源图像放大工具', 'Image', 'https://upscayl.org/'),
        createTool('图贴士', 'GIF与图片处理', 'Image', 'https://tutieshi.com'),
        createTool('腾讯混元3D', '腾讯3D内容生成平台', 'Image', 'https://3d.hunyuan.tencent.com/login'),
        createTool('Tripo AI', '文图一键转3D模型', 'Image', 'https://www.tripo3d.ai/'),
      ]),
      video: createSubCategory('视频处理', [
        createTool('BigMP4', 'AI视频增强修复器', 'FileVideo', 'https://bigmp4.com'),
        createTool('即梦AI', '字节AI视频创作平台', 'FileVideo', 'https://jimeng.jianying.com/ai-tool/home'),
        createTool('可灵AI', '快手AI视频生成平台', 'FileVideo', 'https://app.klingai.com/cn/'),
        createTool('在线视频下载器', '全网视频下载工具', 'FileVideo', 'https://www.datatool.vip/'),
        createTool('B站视频下载', 'Bilibili视频下载器', 'FileVideo', 'https://weibo.iiilab.com/'),
        createTool('B站下载', 'B站视频下载', 'FileVideo', 'https://zhouql.vip/bilibili'),
        createTool('Vip视频在线解析', 'VIP 视频解析', 'FileVideo', 'https://tool.liumingye.cn/video/'),
      ]),
      common: createSubCategory('常用工具', [
        createTool('梯子BigME', '高可用加速服务提供商', 'FileText', 'https://1s.bigmeok.me/user#/register?code=fgCaDxLh'),
        createTool('蓝奏云', '文件存储', 'FileText', 'https://www.lanzoui.com/'),
        createTool('GitHub', '全球最大的开源平台', 'Code', 'https://github.com/'),
        createTool('Gitee', '国内代码托管平台', 'Code', 'https://gitee.com/explore'),        
        createTool('iLovePDF', 'PDF转换工具', 'FileText', 'https://www.ilovepdf.com/zh-cn'),
        createTool('alltoall', '多格式文件转换', 'FileText', 'https://www.alltoall.net'),
        createTool('CDKM在线文件转换', '文件转换', 'FileText', 'https://cdkm.com/cn/?src=www.jspoo.com'),
        createTool('文叔叔', '大文件传输工具', 'Upload', 'https://www.wenshushu.cn'),
        createTool('135编辑器', '公众号排版', 'PenTool', 'https://www.135editor.com'),
        createTool('小蚂蚁编辑器', '微信公众号编辑', 'FileText', 'https://www.xmyeditor.com'),
        createTool('慢慢买', '全网比价历史价', 'ShoppingCart', 'https://www.manmanbuy.com'),
        createTool('软仓', '专业软件下载站', 'Download', 'https://www.ruancang.net'),
        createTool('Hemingway Editor', '英语写作优化', 'FileText', 'https://www.hemingwayapp.com'),
        createTool('动漫图片溯源', '动漫工具', 'Image', 'https://trace.moe/'),
        createTool('动漫取景地', '地理信息', 'Image', 'https://anitabi.cn/'),
        createTool('文案变现营', '创作资源', 'Brain', 'https://www.aliyundrive.com/s/FFxwJ6UuRzP'),
        createTool('爱纯净', '系统安装与U盘工具', 'Server', 'https://www.aichunjing.com'),
        createTool('临时邮箱', '临时邮箱服务', 'Mail', 'https://www.linshiyou.com'),
        createTool('receive-sms', '临时手机号接码', 'Phone', 'https://receive-sms.cc'),
        createTool('在线屏幕录制', '网页录屏工具', 'Monitor', 'https://toolwa.com/record'),
        createTool('在线屏幕测试', '屏幕检测工具', 'Monitor', 'https://screen.bmcx.com'),
        createTool('在线网速测试', '网速测试', 'Wifi', 'https://tool.jy6d.com/netspeed'),
        createTool('UFO帧率测试', '显示器帧率测试', 'Monitor', 'https://testufo.com'),
        createTool('游戏手柄测试', '手柄按键检测', 'Gamepad2', 'https://hardwaretester.com'),
        createTool('Onlinemictest', '摄像头麦克风检测', 'Camera', 'https://www.onlinemictest.com'),
        createTool('网络安全检测', '网站安全检测', 'Shield', 'https://www.urlvoid.com'),
        createTool('OLOCR', '在线OCR识别', 'FileText', 'https://olocr.com'),
        createTool('视频字幕拼接', '视频字幕图片工具', 'FileVideo', 'https://imagestool.com'),
        createTool('简历本', '简历模板与攻略', 'FileText', 'https://www.jianliben.com'),
        createTool('码工具', '通用开发工具集', 'Code', 'https://www.matools.com'),
        createTool('TOolfk工具网', '在线工具合集', 'PenTool', 'https://www.toolfk.com'),
        createTool('Flow EPUB阅读器', '在线阅读电子书', 'Book', 'https://www.flowoss.com'),
        createTool('音乐鱼', '音轨分离与音乐下载', 'Music', 'https://jfjmusic.top'),
        createTool('Word联盟', '办公软件学习平台', 'FileText', 'https://www.wordlm3.com/'),
        createTool('麦当当营养计算器', '食品热量计算', 'Utensils', 'https://www.mcdonalds.com.cn/nutrition_calculator'),
        createTool('奔跑中的奶酪', '高效工具方法合集', 'PenTool', 'https://runningcheese.com'),
        createTool('帮小忙工具箱', 'QQ 浏览器在线工具箱', 'PenTool', 'https://tool.browser.qq.com/'),
        createTool('NumberEmpire', '在线数学工具集合', 'FileText', 'https://zh.numberempire.com/'),
        createTool('易筏 TXT 在线阅读器', '在线 TXT 阅读', 'Book', 'https://reader.yijian.app/'),
        createTool('网名生成器', '昵称与网名生成', 'FileText', 'https://www.qmsjmfb.com/'),
        createTool('多网址合一', '将多个链接合并', 'FileText', 'https://listurls.com/'),
        createTool('新浪短链接', '长链接转短链接', 'FileText', 'https://sina.lt/'),
        createTool('WiFi转二维码', 'WiFi 配网二维码', 'Wifi', 'https://qifi.org/'),
        createTool('表格转换器', 'Excel 转 Markdown 等', 'FileText', 'https://tableconvert.com/zh-cn/'),
        createTool('Midomi听歌识曲', '用嗓音搜索歌曲', 'Music', 'https://www.midomi.com'),
        createTool('音乐解锁', '加密音乐解锁', 'Music', 'https://www.sanwe.xyz/tools/unlock-music/'),
        createTool('Rename批量改名', '批量处理文件名', 'FileText', 'https://rename.jgrass.xyz'),
      ]),
    },
  },
  resources: {
    title: '资源探索',
    subcategories: {
      music: createSubCategory('资源搜索', [
        createTool('Gamer520', '电脑/模拟器游戏', 'Gamepad2', 'https://www.gamer520.com'),
        createTool('六音无损音乐', '六音无损音乐', 'Music', 'https://flac.life/'),
        createTool('磁力音乐', '音乐资源', 'Music', 'https://www.hifini.com/'),
        createTool('轻之国度', '轻小说社群', 'Book', 'https://www.lightnovel.us/?465518'),
        createTool('魔笔小说', '免费轻小说资源', 'Book', 'https://mobinovels.com/'),
        createTool('鸠摩搜书', '电子书搜索', 'Book', 'https://www.jiumodiary.com'),
        createTool('六月听书', '在线听书平台', 'Book', 'https://www.6yueting.com/'),
      ]),
      videos: createSubCategory('视频动漫', [
        // 视频资源
        createTool('影视资源搜索', '视频资源', 'FileVideo', 'https://svip.bljiex.cc/'),
        createTool('茶杯狐影视', '视频资源', 'FileVideo', 'https://cupfox.app/'),
        createTool('MYD影视', '视频资源', 'FileVideo', 'https://myd04.com/'),
        createTool('追影猫', '视频资源', 'FileVideo', 'https://zhuiyingmao5.com/'),
        createTool('DDDOG影视', '视频资源', 'FileVideo', 'https://www.dddog.cn/movie/'),
        createTool('影合影视', '视频资源', 'FileVideo', 'https://yinghe.app/'),
        createTool('追剧猫', '影视搜索', 'FileVideo', 'https://www.czzy77.com/'),
        createTool('硬核资源', '影视搜索', 'FileVideo', 'https://yinghezhinan.com/'),
        createTool('4K HDR', '4K高清视频', 'FileVideo', 'https://4khdr.cn'),
        createTool('爱看机器人', '全网影视聚合', 'FileVideo', 'https://v.ikanbot.com'),
        // 动漫资源
        createTool('AGE动漫', '动漫网站合集', 'FileVideo', 'https://www.agedm.org/'),
        createTool('gesamTV', '动漫在线播放', 'FileVideo', 'https://www.mitang.tv/'),
        createTool('Anime1', '动漫在线播放', 'FileVideo', 'https://anime1.me/'),
        createTool('BimiACG', '动漫在线播放', 'FileVideo', 'https://www.bimiacg4.net/'),
        createTool('樱花动漫', '动漫在线播放', 'FileVideo', 'https://www.yhmgo.com/'),
        createTool('NYA Fun', '动漫在线播放', 'FileVideo', 'https://www.nyafun.net/'),
        createTool('铃兰动漫', '动漫在线播放', 'FileVideo', 'https://www.lldm.net/'),
        // 漫画资源
        createTool('G站漫画', '漫画资源', 'Book', 'https://godamh.com/'),
        createTool('mangacopy', '漫画阅读网站', 'Book', 'https://www.mangacopy.com'),
        createTool('colamanga', '漫画在线阅读', 'Book', 'https://www.colamanga.com'),
        createTool('gufengmh', '古风漫画网', 'Book', 'https://www.gufengmh.com'),
        createTool('baozimh', '国漫资源网站', 'Book', 'https://cn.baozimh.com'),
        createTool('comic.idmzj', '动漫之家漫画', 'Book', 'https://comic.idmzj.com'),
      ]),

      study: createSubCategory('学习相关', [
        // 英语学习
        createTool('英语真题在线', '英语真题学习', 'FileText', 'https://zhenti.burningvocabulary.com'),
        createTool('LingoHut', '免费外语学习', 'Globe', 'https://www.lingohut.com'),
        createTool('英语学习助手', '语言学习', 'FileText', 'https://getyarn.io/'),
        createTool('英语发音矫正器', '英语发音矫正', 'Book', 'https://corrector.justsong.cn'),
        createTool('Youzack 精听', '英语听力精听', 'Book', 'https://www.youzack.com'),
        createTool('英语阅读网', '英语阅读资料', 'Book', 'https://www.enread.com'),
        createTool('Loecsen', '极简外语学习', 'Globe', 'https://www.loecsen.com/zh'),
        createTool('词频背单词', '按词频背单词', 'Book', 'https://www.cipindanci.com/'),
        createTool('Visuwords', '可视化英语单词关联', 'Book', 'https://visuwords.com/'),
        createTool('爱发音', '英美音标发音教学', 'Book', 'https://fayin.love'),
        createTool('Toucan', '浏览网页时学外语扩展', 'Globe', 'https://jointoucan.com/'),
        createTool('英语拼写打字练习', '英文打字练习', 'Keyboard', 'https://qwerty.liumingye.cn/'),
        // 翻译工具
        createTool('腾讯交互翻译', '文档与多语言翻译', 'FileText', 'https://transmart.qq.com'),
        createTool('CNKI 翻译助手', '学术翻译工具', 'FileText', 'https://dict.cnki.net/index#'),
        // 其他语言学习
        createTool('アニメ・まんがの日本語', '看漫画学日语', 'Book', 'https://anime-manga.jp/zh/'),
        // 古籍阅读
        createTool('识典古籍', '古籍阅读与对照', 'Book', 'https://www.shidianguji.com'),
        createTool('中国哲学书电子化计划', '最全中文古籍库', 'Book', 'https://ctext.org/zhs'),
        createTool('古登堡计划', '公共领域电子书库', 'Book', 'https://www.gutenberg.org/'),
        // 学术资源
        createTool('可汗学院', '免费数学教学平台', 'Book', 'https://zh.khanacademy.org'),
        createTool('编程自学之路', '编程路线与资源', 'Code', 'https://r2coding.com'),
        createTool('菜鸟教程', '免费编程教程网站', 'Code', 'https://www.runoob.com'),
        createTool('oeasy', '实用教学资源', 'Book', 'https://oeasy.org'),
        createTool('吴师兄学算法', '图解面试算法与刷题', 'Code', 'https://cxyxiaowu.com'),
        createTool('doyoudo', '设计与剪辑在线学习', 'Image', 'https://www.doyoudo.com/free'),
        createTool('edX', '麻省理工与哈佛在线课程平台', 'Book', 'https://www.edx.org/'),
        createTool('学堂在线', '高校在线课程平台', 'Book', 'https://www.xuetangx.com/'),
        // 医学学习
        createTool('默沙东诊疗手册', '医学诊疗百科', 'Book', 'https://www.msdmanuals.cn'),
        createTool('丁香园用药助手', '医疗用药查询', 'Book', 'https://drugs.dxy.cn/pc'),
        // 其他学习资源
        createTool('知识图谱', '历史名人知识图谱', 'Database', 'https://cnkgraph.com'),
        createTool('Crash Course', '高质量课程视频（中文组）', 'Book', 'https://crashcourse.club'),
        createTool('国家哲学社会科学数据库', '学术期刊与论文库', 'Book', 'http://www.nssd.org'),
        createTool('运营笔记导航', '运营学习导航', 'PenTool', 'https://yunyingbiji.cn'),
        createTool('知识船舱', '知识资源', 'Database', 'http://zscc.ysepan.com'),
        createTool('ExamCoo', '在线考试资源', 'FileText', 'https://www.examcoo.com'),
        createTool('永久免费考试系统', '永久免费考试系统', 'Globe', 'https://www.examcoo.com/'),
      ]),
      other: createSubCategory('其他资源', [
        // PPT资源
        createTool('PPT超级市场', 'AI PPT模板网站', 'FileText', 'https://ppt.sotary.com'),
        createTool('PPT设计教程网', 'PPT 教程与模板', 'FileText', 'https://www.pptfans.cn/pptcourse'),
        createTool('优品PPT', 'PPT模板', 'FileText', 'https://www.ypppt.com'),
        createTool('第一PPT', 'PPT资源', 'FileText', 'https://www.1ppt.com'),
        createTool('AIPPT', 'AI智能PPT生成工具', 'FileText', 'https://www.aippt.cn/'),
        createTool('PPT模板宝', 'PPT模板资源', 'FileText', 'https://www.51pptmoban.com/'),
        createTool('PPT汇', 'PPT模板资源', 'FileText', 'https://www.ppthui.com/'),
        // 其他资源
        createTool('盘库吧', '网盘资源全网在线搜索神器', 'Database', 'https://panku8.com/'),
        createTool('免费查重', '论文查重工具', 'FileText', 'https://www.paperfree.cn'),
        createTool('小纸条', '开放资源网站', 'FileText', 'https://gitcafe.ink'),
        createTool('mvcat', '个性化电影推荐', 'FileVideo', 'https://www.mvcat.com'),
        createTool('千帆搜索', '聚合网盘搜索', 'FileText', 'https://pan.qianfan.app/'),
        createTool('AnyBT', '磁力搜索', 'Download', 'https://anybt.eth.limo/'),
        createTool("What's the link?", '磁力链接内容预览', 'Download', 'https://whatslink.info'),
        createTool('Justlive', '多平台直播聚合', 'FileVideo', 'https://live.yj1211.work'),
      ]),
    },
  },
  explore: {
    title: '在线探索',
    subcategories: {
      zoom: createSubCategory('探索观测', [
        createTool('实时地球', '全球卫星地图观测', 'Building2', 'https://zoom.earth/'),
        createTool('深海探索', '交互式深海探索', 'Globe', 'https://neal.fun/deep-sea'),
        createTool('海底世界', '海洋生态互动教育', 'Building2', 'https://www.bluemarinefoundation.com/the-sea-we-breathe/'),
        createTool('随机街景', '随机探索街景', 'Building2', 'https://randomstreetview.com/'),
        createTool('天际摄像头', '全球实景直播', 'Building2', 'https://www.skylinewebcams.com/'),
        createTool('鲨鱼追踪器', '鲨鱼迁徙观测', 'Building2', 'https://www.ocearch.org/tracker/'),
        createTool('3D地球模型', '3D交互地球模型', 'Building2', 'https://3d-app.yunser.com/earth/'),
        createTool('远古地球', '板块运动可视化', 'Building2', 'https://3d-app.yunser.com/plateMotion/'),
        createTool('光污染地图', '全球光污染地图', 'Building2', 'https://www.lightpollutionmap.info/'),
        createTool('地球时钟', '地球卫星时钟', 'Building2', 'https://earthclock.cwandt.com/'),
        createTool('Ventusky', '气象数据可视化', 'Building2', 'https://www.ventusky.com/'),
        createTool('流星雨观测', '流星雨可视化', 'Building2', 'https://www.meteorshowers.org/'),
        createTool('航班追踪', '航班实时追踪', 'Building2', 'https://zh.flightaware.com/'),
        createTool('全球网络攻击图', '实时网络攻击图', 'Shield', 'https://cybermap.kaspersky.com'),
      ]),
      art: createSubCategory('文化艺术', [
        createTool('CyArk', '古迹3D数字化平台', 'Building2', 'https://www.cyark.org/'),
        createTool('故宫全景', '故宫全景虚拟游览', 'Building2', 'https://pano.dpm.org.cn/'),
        createTool('故宫数字文物', '故宫藏品高清浏览', 'Building2', 'https://digicol.dpm.org.cn/'),
        createTool('中华珍宝馆', '书画数字资源馆', 'Building2', 'https://g2.ltfc.net/'),
        createTool('陕西博物馆', '陕西博物馆线上展厅', 'Building2', 'https://www.sxhm.com/online.html'),
        createTool('上海博物馆AR', '上博增强现实体验', 'Building2', 'https://www.shanghaimuseum.net/mu/frontend/pg/index'),
        createTool('国博VR', '国博虚拟现实游览', 'Building2', 'http://www.chnmuseum.cn/Portals/0/web/vr/'),
        createTool('千亿像素中国', '城市超清全景图', 'Building2', 'http://bigpixel.cn/'),
        createTool('历史照片库', '近代中国影像库', 'Building2', 'https://www.hpcbristol.net/'),
        createTool('荷兰国家博物馆', '荷兰国立艺术馆', 'Building2', 'https://www.rijksmuseum.nl/nl'),
        createTool('AirPano', '全球全景旅游', 'Globe', 'https://www.airpano.org.cn'),
        createTool('卢浮宫藏品库', '卢浮宫数字典藏', 'Building2', 'https://collections.louvre.fr/'),
        createTool('波斯波利斯', '波斯古城复原', 'Building2', 'https://persepolis.getty.edu/'),
        createTool('苏联海报库', '苏联海报收藏', 'Building2', 'https://reddirect.ru/'),
        createTool('艺术公域', '高清艺术公域图', 'Building2', 'https://artvee.com/'),
        createTool('中国物种名录', '权威生物名录', 'Building2', 'http://sp2000.org.cn/'),
        createTool('全历史', '可视化历史百科', 'Database', 'https://www.allhistory.com'),
        createTool('书格', '古籍善本数字馆', 'Book', 'https://new.shuge.org'),
        createTool('知妖', '中国妖怪文化志', 'Database', 'http://www.cbaigui.com'),
        createTool('乡音苑', '中文方言采录', 'Database', 'https://phonemica.net'),
        createTool('故事谷', '植根于人民的故事网站', 'Book', 'https://www.gushigu.cn/'),
        createTool('历史故事网·烟雨阁', '民间故事与野史', 'Book', 'https://www.yanyuzhai.cn/'),
        createTool('How Music Taste Evolved', '音乐历史可视化', 'Music', 'https://pudding.cool/2017/03/music-history'),
        createTool('百家讲坛', '传统文化普及栏目', 'Building2', 'https://tv.cctv.com/lm/bjjt/'),
        createTool('历史上的今天', '了解历史上的今日', 'Building2', 'https://baike.baidu.com/calendar/'),
        createTool('观沧海', '历史地图研究', 'Building2', 'https://www.ageeye.cn/'),
      ]),
      art2: createSubCategory('娱乐互动', [
        createTool('红警网页版', '红警在线游玩', 'Gamepad2', 'https://game.chronodivide.com'),
        createTool('植物大战僵尸', '网页版植物大战僵尸', 'Gamepad2', 'https://pvz.heheda.top'),
        createTool('小霸王', '在线怀旧街机', 'Gamepad2', 'https://www.yikm.net'),
        createTool('美少女生成器', '随机动漫少女', 'Image', 'https://thiswaifudoesnotexist.net'),
        createTool('动漫捏脸', '动漫角色捏脸', 'Image', 'https://picrew.me/ja'),
        createTool('查无此人', '随机生成人脸', 'Image', 'https://thispersondoesnotexist.com'),
        createTool('虚拟乐器', '网页乐器演奏', 'Music', 'https://www.virtualmusicalinstruments.com'),
        createTool('在线钢琴', '键盘弹琴模拟', 'Music', 'https://www.xiwnn.com/piano'),
        createTool('tetr.io', '在线俄罗斯方块', 'Gamepad2', 'https://tetr.io'),
        createTool('信任的进化', '心理博弈小游戏', 'Gamepad2', 'https://dccxi.com'),
        createTool('人生重开模拟器', '文字人生游戏', 'Gamepad2', 'https://syaro.io'),
        createTool('slapkirk', '打脸小游戏', 'Gamepad2', 'https://www.slapkirk.com/play'),
        createTool('AI 随机图像', 'AI 随机生成图片', 'Image', 'https://airandomimage.art/'),
        createTool('营销号生成器', '营销文案生成', 'FileText', 'https://kaseidis.gitee.io/interesting_gadgets/marketing_generator'),
        createTool('打字打字', '在线打字练习', 'Keyboard', 'https://www.dazidazi.com'),
        createTool('反应测试', '反应速度测试', 'Gamepad2', 'https://humanbenchmark.com/tests/reactiontime'),
      ]),
      art3: createSubCategory('数据工具', [
        createTool('全球贸易数据', '全球贸易可视化', 'Globe', 'http://globe.cid.harvard.edu/'),
        createTool('公共钢琴地图', '公共钢琴位置地图', 'Globe', 'https://pianos.pub/'),
        createTool('井盖地图', '井盖文化地图', 'Globe', 'https://manhole.co.il/'),
        createTool('电力设施地图', '全球能源设施地图', 'Globe', 'https://openinframap.org/'),
        createTool('护照博物馆', '护照签证信息库', 'Globe', 'https://www.passportindex.org/'),
        createTool('UI设计史', '界面演化资料库', 'Globe', 'https://history.user-interface.io/'),
        createTool('世界国旗库', '世界国旗百科库', 'Globe', 'https://world-flags.org/'),
        createTool('Dollar Street', '全球家庭生活对比', 'Globe', 'https://www.gapminder.org/dollar-street/'),
        createTool('数字游民指南', '城市评分与远程', 'Globe', 'https://nomadlist.com/'),
        createTool('地平说协会', '平地理论社区', 'Globe', 'https://www.tfes.org/'),
        createTool('机械键盘图鉴', '机械键盘收藏志', 'Keyboard', 'https://scrapbox.io/MECHKEYS/'),
        createTool('核弹模拟器', '核爆影响模拟器', 'Shield', 'https://nuclearsecrecy.com/nukemap/'),
        createTool('地球时间线', '地球历史时间轴', 'Clock', 'https://timelineofearth.com/'),
        createTool('克苏鲁公社', '克苏鲁文化社区', 'Building2', 'https://www.cthulhuclub.com/'),
        createTool('极像素', '超高清全景图库', 'Image', 'https://www.sigoo.com/'),
        createTool('OEC数据', '国际贸易数据', 'Database', 'https://oec.world/'),
        createTool('木材数据库', '木材材料特性库', 'Database', 'https://www.wood-database.com/'),
        createTool('无限美术馆', '在线3D艺术展', 'Building2', 'https://gallery.nowaythis.works/'),
        createTool('萌宠网站「今天吃什么」', '随机美食推荐', 'Utensils', 'https://chi.hillcloud.net'),
        createTool('网址导航「你不会百度吗」', '懒人问答网站', 'PenTool', 'https://buhuibaidu.me'),
        createTool('答案之书在线版', '在线答案占卜', 'Book', 'https://www.myanswersbook.com'),
        createTool('假装升级', '假装系统更新', 'Server', 'https://fakeupdate.net'),
        createTool('全球直播摄像头', '全球直播摄像集合', 'Camera', 'https://www.webcamtaxi.com/'),
        createTool('模拟器博物馆', '经典系统模拟器', 'Gamepad2', 'http://www.famicn.com/'),
        createTool('ArchDaily', '建筑设计资讯站', 'Building2', 'https://www.archdaily.cn/cn/'),
        createTool('8values测试', '政治倾向测试', 'BarChart', 'https://songyon.github.io/8valuescn/'),
        createTool('网页时光机', '十年前网页回顾', 'Clock', 'https://neal.fun/ten-years-ago/'),
        createTool('古典音乐库', '古典MIDI下载', 'Music', 'https://www.kunstderfuge.com/'),
        createTool('英特尔博物馆', '英特尔虚拟博物馆', 'Building2', 'https://virtualmuseum.intel.com/'),
        createTool('铅笔图鉴', '铅笔品牌图鉴', 'Database', 'https://brandnamepencils.com/'),
        createTool('物流艺术', '快递路径可视化', 'Truck', 'https://logisticsartproject.com/'),
        createTool('方言档案馆', '全球口音语料库', 'Database', 'https://www.dialectsarchive.com/'),
        createTool('行星年龄计算', '行星年龄换算', 'Calculator', 'https://exploratorium.edu/ronh/age/'),
        createTool('公共领域音乐', '公共领域音乐库', 'Music', 'https://www.locserendipity.com/PushPlay.html'),
        createTool('人口时钟', '全球人口动态', 'Users', 'https://countrymeters.info/cn/'),
        createTool('17Track 全球物流', '国际物流查询', 'Truck', 'https://www.17track.net/zh-cn'),
        createTool('手机博物馆', '手机发展史图鉴', 'Smartphone', 'https://www.mobilephonemuseum.com/catalogue'),
        createTool('汤姆科技指南', '硬件测评指南', 'Database', 'https://TomsGuide.com'),
        createTool('anyknew 热点', '热点资讯聚合', 'TrendingUp', 'https://www.anyknew.com/#/'),
        createTool('BibiGPT', '音视频AI总结', 'Brain', 'https://bibigpt.co'),
        createTool('薪情', '全球薪资查询', 'Database', 'https://www.51salary.com'),
        createTool('移轴摄影世界', '微缩景观摄影', 'Camera', 'https://www.littlebigworld.de/'),
      ]),
    },
  },
};

// 数据结构完整性检查
export const validateToolData = (): boolean => {
  try {
    // 验证所有分类都有有效的子分类或工具
    Object.entries(initialToolCategories).forEach(([key, category]) => {
      if (!category.title) {
        console.warn(`分类 ${key} 缺少标题`);
        return false;
      }
      
      if (category.subcategories) {
        Object.entries(category.subcategories).forEach(([subKey, subCategory]) => {
          if (!subCategory.title) {
            console.warn(`子分类 ${key}.${subKey} 缺少标题`);
            return false;
          }
          if (!Array.isArray(subCategory.tools) || subCategory.tools.length === 0) {
            console.warn(`子分类 ${key}.${subKey} 没有工具或工具不是数组`);
            return false;
          }
        });
      }
      
      if (category.tools && !Array.isArray(category.tools)) {
        console.warn(`分类 ${key} 的 tools 属性不是数组`);
        return false;
      }
    });
    
    return true;
  } catch (error) {
    console.error('工具数据验证失败:', error);
    return false;
  }
};