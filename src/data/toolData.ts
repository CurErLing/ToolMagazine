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

export interface ToolItem {
  name: string;
  desc: string;
  icon: React.ElementType;
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

export const initialToolCategories: Record<string, ToolCategoryWithSub> = {
  tools: {
    title: '在线工具',
    subcategories: {
      ai: {
        title: 'AI助手',
        tools: [
          { name: "ChatGPT", desc: "全球领先AI对话平台", icon: Brain, url: "https://chatgpt.com/", count: 0 },
          { name: "Gemini", desc: "谷歌AI对话生成平台", icon: Brain, url: "https://gemini.google.com/app", count: 0 },
          { name: "豆包AI", desc: "字节AI智能对话助手", icon: Brain, url: "https://www.doubao.com/chat/?channel=cnblogs", count: 0 },
          { name: "讯飞星火", desc: "讯飞大模型交互平台", icon: Brain, url: "https://xinghuo.xfyun.cn/desk", count: 0 },
          { name: "DeepSeek", desc: "深度求索对话生成器", icon: Brain, url: "https://chat.deepseek.com", count: 0 },
          { name: "智谱清言", desc: "智谱AI聊天助手", icon: Brain, url: "https://chatglm.cn/main/alltoolsdetail?lang=zh", count: 0 },
          { name: "文心一言", desc: "百度大模型对话平台", icon: Brain, url: "https://chat.baidu.com/app", count: 0 },
        ],
      },
      design: {
        title: '办公工具',
        tools: [
          { name: 'Figma', desc: '在线协作设计平台', icon: Image, url: 'https://www.figma.com/', count: 0 },
          { name: 'Autodraw', desc: 'AI智能图标绘制器', icon: Image, url: 'https://www.autodraw.com/', count: 0 },   
          { name: 'GemDesign', desc: 'AI原型设计工具', icon: Image, url: 'https://design.gemcoder.com/', count: 0 },
          { name: '听脑AI', desc: 'AI语音录音记录助手', icon: FileText, url: 'https://itingnao.com/', count: 0 },
          { name: 'GitMind', desc: 'AI思维导图', icon: FileText, url: 'https://gitmind.cn/', count: 0 },
          { name: 'ProcessOn', desc: '在线思维导图', icon: FileText, url: 'https://www.processon.com', count: 0 },
          { name: 'anymind', desc: 'AI思维导图工具', icon: FileText, url: 'https://www.amymind.com', count: 0 },
          { name: '文字转语音工具', desc: 'AI语音', icon: FileText, url: 'https://huggingface.co/spaces/zomehwh/vits-models-genshin-bh3', count: 0 },
          { name: '灵感大师', desc: 'AI写作辅助', icon: FileText, url: 'https://chat.baidu.com/app', count: 0 },
          { name: "在线PS", desc: "网页版Photoshop工具", icon: Image, url: "https://zaixianps.net", count: 0 },
          { name: "猫啃网", desc: "设计字体与素材库", icon: FileText, url: "https://www.maoken.com", count: 0 },
          { name: '100font', desc: '免费商用字体', icon: FileText, url: 'https://www.100font.com', count: 0 },
        ],
      },
      image: {
        title: '图片处理',
        tools: [
          { name: '哩布哩布', desc: 'AI绘画图像生成器', icon: Image, url: 'https://www.liblib.art/', count: 0 },
          { name: '图像编辑模型', desc: 'AI智能绘图工具箱', icon: Image, url: 'https://lmarena.ai/', count: 0 },
          { name: '魔术橡皮擦', desc: 'AI图片背景去除器', icon: Image, url: 'https://magicstudio.com/zh/magiceraser', count: 0 },
          { name: '在线抠图工具', desc: 'AI一键抠图神器', icon: Image, url: 'https://www.remove.bg/zh', count: 0 },
          { name: '在线图像处理工具', desc: '便捷在线图像编辑', icon: Image, url: 'https://remove.photos/zh-cn/', count: 0 },
          { name: "会画AI修图", desc: "AI图像局部重绘", icon: Image, url: "https://www.ihuiwa.com/workspace/ai-image/partial-redraw", count: 0 },
          { name: 'Pixian抠图', desc: '快速精准图像抠图', icon: Image, url: 'https://pixian.ai/', count: 0 },
          { name: '图片无损放大', desc: 'AI清晰度增强工具', icon: Image, url: 'https://bigjpg.com/', count: 0 },
          { name: 'bgsub', desc: '智能抠图工具', icon: Image, url: 'https://bgsub.cn', count: 0 },
          { name: 'upscayl图片无损放大', desc: '开源图像放大工具', icon: Image, url: 'https://upscayl.org/', count: 0 },
          { name: '图贴士', desc: 'GIF与图片处理', icon: Image, url: 'https://tutieshi.com', count: 0 },
          { name: '腾讯混元3D', desc: '腾讯3D内容生成平台', icon: Image, url: 'https://3d.hunyuan.tencent.com/login', count: 0 },
          { name: 'Tripo AI', desc: '文图一键转3D模型', icon: Image, url: 'https://www.tripo3d.ai/', count: 0 },
        ],
      },
      video: {
        title: '视频处理',
        tools: [
          { name: 'BigMP4', desc: 'AI视频增强修复器', icon: FileVideo, url: 'https://bigmp4.com', count: 0 },
          { name: '即梦AI', desc: '字节AI视频创作平台', icon: FileVideo, url: 'https://jimeng.jianying.com/ai-tool/home', count: 0 },
          { name: '可灵AI', desc: '快手AI视频生成平台', icon: FileVideo, url: 'https://app.klingai.com/cn/', count: 0 },
          { name: '在线视频下载器', desc: '全网视频下载工具', icon: FileVideo, url: 'https://www.datatool.vip/', count: 0 },
          { name: 'B站视频下载', desc: 'Bilibili视频下载器', icon: FileVideo, url: 'https://weibo.iiilab.com/', count: 0 },
          { name: 'B站下载', desc: 'B站视频下载', icon: FileVideo, url: 'https://zhouql.vip/bilibili', count: 0 },     
          { name: 'Vip视频在线解析', desc: 'VIP 视频解析', icon: FileVideo, url: 'https://tool.liumingye.cn/video/', count: 0 },
        ],
      },
      common: {
        title: '常用工具',
        tools: [
          { name: '梯子BigME', desc: '高可用加速服务提供商', icon: FileText, url: 'https://1s.bigmeok.me/user#/register?code=fgCaDxLh', count: 0 },
          { name: '蓝奏云', desc: '文件存储', icon: FileText, url: 'https://www.lanzoui.com/', count: 0 },
          { name: 'GitHub', desc: '全球最大的开源平台', icon: Code, url: 'https://github.com/', count: 0 },
          { name: 'Gitee', desc: '国内代码托管平台', icon: Code, url: 'https://gitee.com/explore', count: 0 },        
          { name: 'iLovePDF', desc: 'PDF转换工具', icon: FileText, url: 'https://www.ilovepdf.com/zh-cn', count: 0 },
          { name: 'alltoall', desc: '多格式文件转换', icon: FileText, url: 'https://www.alltoall.net', count: 0 },     
          { name: 'CDKM在线文件转换', desc: '文件转换', icon: FileText, url: 'https://cdkm.com/cn/?src=www.jspoo.com', count: 0 },
          { name: '文叔叔', desc: '大文件传输工具', icon: Upload, url: 'https://www.wenshushu.cn', count: 0 },
          { name: '135编辑器', desc: '公众号排版', icon: PenTool, url: 'https://www.135editor.com', count: 0 },
          { name: '小蚂蚁编辑器', desc: '微信公众号编辑', icon: FileText, url: 'https://www.xmyeditor.com', count: 0 },
          { name: '慢慢买', desc: '全网比价历史价', icon: ShoppingCart, url: 'https://www.manmanbuy.com', count: 0 },
          { name: '软仓', desc: '专业软件下载站', icon: Download, url: 'https://www.ruancang.net', count: 0 },      
          { name: 'Hemingway Editor', desc: '英语写作优化', icon: FileText, url: 'https://www.hemingwayapp.com', count: 0 },
          { name: '动漫图片溯源', desc: '动漫工具', icon: Image, url: 'https://trace.moe/', count: 0 },
          { name: '动漫取景地', desc: '地理信息', icon: Image, url: 'https://anitabi.cn/', count: 0 },
          { name: '文案变现营', desc: '创作资源', icon: Brain, url: 'https://www.aliyundrive.com/s/FFxwJ6UuRzP', count: 0 },
          { name: '爱纯净', desc: '系统安装与U盘工具', icon: Server, url: 'https://www.aichunjing.com', count: 0 },
          { name: '临时邮箱', desc: '临时邮箱服务', icon: Mail, url: 'https://www.linshiyou.com', count: 0 },
          { name: 'receive-sms', desc: '临时手机号接码', icon: Phone, url: 'https://receive-sms.cc', count: 0 },
          { name: '在线屏幕录制', desc: '网页录屏工具', icon: Monitor, url: 'https://toolwa.com/record', count: 0 },
          { name: '在线屏幕测试', desc: '屏幕检测工具', icon: Monitor, url: 'https://screen.bmcx.com', count: 0 },
          { name: '在线网速测试', desc: '网速测试', icon: Wifi, url: 'https://tool.jy6d.com/netspeed', count: 0 },
          { name: 'UFO帧率测试', desc: '显示器帧率测试', icon: Monitor, url: 'https://testufo.com', count: 0 },
          { name: '游戏手柄测试', desc: '手柄按键检测', icon: Gamepad2, url: 'https://hardwaretester.com', count: 0 },
          { name: 'Onlinemictest', desc: '摄像头麦克风检测', icon: Camera, url: 'https://www.onlinemictest.com', count: 0 },
          { name: '网络安全检测', desc: '网站安全检测', icon: Shield, url: 'https://www.urlvoid.com', count: 0 },
          { name: 'OLOCR', desc: '在线OCR识别', icon: FileText, url: 'https://olocr.com', count: 0 },
          { name: '视频字幕拼接', desc: '视频字幕图片工具', icon: FileVideo, url: 'https://imagestool.com', count: 0 },
          { name: '简历本', desc: '简历模板与攻略', icon: FileText, url: 'https://www.jianliben.com', count: 0 },
          { name: '码工具', desc: '通用开发工具集', icon: Code, url: 'https://www.matools.com', count: 0 },
          { name: 'TOolfk工具网', desc: '在线工具合集', icon: PenTool, url: 'https://www.toolfk.com', count: 0 },
          { name: 'Flow EPUB阅读器', desc: '在线阅读电子书', icon: Book, url: 'https://www.flowoss.com', count: 0 },
          { name: '音乐鱼', desc: '音轨分离与音乐下载', icon: Music, url: 'https://jfjmusic.top', count: 0 },
          { name: 'Word联盟', desc: '办公软件学习平台', icon: FileText, url: 'https://www.wordlm3.com/', count: 0 },
          { name: '麦当当营养计算器', desc: '食品热量计算', icon: Utensils, url: 'https://www.mcdonalds.com.cn/nutrition_calculator', count: 0 },
          { name: '奔跑中的奶酪', desc: '高效工具方法合集', icon: PenTool, url: 'https://runningcheese.com', count: 0 },
          { name: '帮小忙工具箱', desc: 'QQ 浏览器在线工具箱', icon: PenTool, url: 'https://tool.browser.qq.com/', count: 0 },
          { name: 'NumberEmpire', desc: '在线数学工具集合', icon: FileText, url: 'https://zh.numberempire.com/', count: 0 },
          { name: '易筏 TXT 在线阅读器', desc: '在线 TXT 阅读', icon: Book, url: 'https://reader.yijian.app/', count: 0 },
          { name: '网名生成器', desc: '昵称与网名生成', icon: FileText, url: 'https://www.qmsjmfb.com/', count: 0 },
          { name: '多网址合一', desc: '将多个链接合并', icon: FileText, url: 'https://listurls.com/', count: 0 },
          { name: '新浪短链接', desc: '长链接转短链接', icon: FileText, url: 'https://sina.lt/', count: 0 },
          { name: 'WiFi转二维码', desc: 'WiFi 配网二维码', icon: Wifi, url: 'https://qifi.org/', count: 0 },
          { name: '表格转换器', desc: 'Excel 转 Markdown 等', icon: FileText, url: 'https://tableconvert.com/zh-cn/', count: 0 },
          { name: 'Midomi听歌识曲', desc: '用嗓音搜索歌曲', icon: Music, url: 'https://www.midomi.com', count: 0 },
          { name: '音乐解锁', desc: '加密音乐解锁', icon: Music, url: 'https://www.sanwe.xyz/tools/unlock-music/', count: 0 },
          { name: 'Rename批量改名', desc: '批量处理文件名', icon: FileText, url: 'https://rename.jgrass.xyz', count: 0 },
        ],
      },
    },
  },
  resources: {
    title: '资源探索',
    subcategories: {
      music: {
        title: '资源搜索',
        tools: [
          { name: 'Gamer520', desc: '电脑/模拟器游戏', icon: Gamepad2, url: 'https://www.gamer520.com', count: 0 },
          { name: '六音无损音乐', desc: '六音无损音乐', icon: Music, url: 'https://flac.life/', count: 0 },
          { name: '磁力音乐', desc: '音乐资源', icon: Music, url: 'https://www.hifini.com/', count: 0 },
          { name: '轻之国度', desc: '轻小说社群', icon: Book, url: 'https://www.lightnovel.us/?465518', count: 0 },
          { name: '魔笔小说', desc: '免费轻小说资源', icon: Book, url: 'https://mobinovels.com/', count: 0 },
          { name: '鸠摩搜书', desc: '电子书搜索', icon: Book, url: 'https://www.jiumodiary.com', count: 0 },
          { name: '六月听书', desc: '在线听书平台', icon: Book, url: 'https://www.6yueting.com/', count: 0 },
        ],
      },
      // 视频动漫分类
      videos: {
        title: '视频动漫',
        tools: [
      //视频资源    
          { name: '影视资源搜索', desc: '视频资源', icon: FileVideo, url: 'https://svip.bljiex.cc/', count: 0 },
          { name: '茶杯狐影视', desc: '视频资源', icon: FileVideo, url: 'https://cupfox.app/', count: 0 },
          { name: 'MYD影视', desc: '视频资源', icon: FileVideo, url: 'https://myd04.com/', count: 0 },
          { name: '追影猫', desc: '视频资源', icon: FileVideo, url: 'https://zhuiyingmao5.com/', count: 0 },
          { name: 'DDDOG影视', desc: '视频资源', icon: FileVideo, url: 'https://www.dddog.cn/movie/', count: 0 },
          { name: '影合影视', desc: '视频资源', icon: FileVideo, url: 'https://yinghe.app/', count: 0 },
          { name: '追剧猫', desc: '影视搜索', icon: FileVideo, url: 'https://www.czzy77.com/', count: 0 },
          { name: '硬核资源', desc: '影视搜索', icon: FileVideo, url: 'https://yinghezhinan.com/', count: 0 },
          { name: '4K HDR', desc: '4K高清视频', icon: FileVideo, url: 'https://4khdr.cn', count: 0 },     
          { name: '爱看机器人', desc: '全网影视聚合', icon: FileVideo, url: 'https://v.ikanbot.com', count: 0 },


      //动漫资源          
          { name: 'AGE动漫', desc: '动漫网站合集', icon: FileVideo, url: 'https://www.agedm.org/', count: 0 },
          { name: 'gesamTV', desc: '动漫在线播放', icon: FileVideo, url: 'https://www.mitang.tv/', count: 0 },
          { name: 'Anime1', desc: '动漫在线播放', icon: FileVideo, url: 'https://anime1.me/', count: 0 },
          { name: 'BimiACG', desc: '动漫在线播放', icon: FileVideo, url: 'https://www.bimiacg4.net/', count: 0 },
          { name: '樱花动漫', desc: '动漫在线播放', icon: FileVideo, url: 'https://www.yhmgo.com/', count: 0 },
          { name: 'NYA Fun', desc: '动漫在线播放', icon: FileVideo, url: 'https://www.nyafun.net/', count: 0 },
          { name: '铃兰动漫', desc: '动漫在线播放', icon: FileVideo, url: 'https://www.lldm.net/', count: 0 },
              //漫画资源
          
          { name: 'G站漫画', desc: '漫画资源', icon: Book, url: 'https://godamh.com/', count: 0 },
          { name: 'mangacopy', desc: '漫画阅读网站', icon: Book, url: 'https://www.mangacopy.com', count: 0 },
          { name: 'colamanga', desc: '漫画在线阅读', icon: Book, url: 'https://www.colamanga.com', count: 0 },
          { name: 'gufengmh', desc: '古风漫画网', icon: Book, url: 'https://www.gufengmh.com', count: 0 },
          { name: 'baozimh', desc: '国漫资源网站', icon: Book, url: 'https://cn.baozimh.com', count: 0 },
          { name: 'comic.idmzj', desc: '动漫之家漫画', icon: Book, url: 'https://comic.idmzj.com', count: 0 },
              
    ],

      },

      // 其他子分类...
              study:{
        title:'学习相关',
          tools: [
          //英语学习
          { name: '英语真题在线', desc: '英语真题学习', icon: FileText, url: 'https://zhenti.burningvocabulary.com', count: 0 },
          { name: 'LingoHut', desc: '免费外语学习', icon: Globe, url: 'https://www.lingohut.com', count: 0 },
          { name: '英语学习助手', desc: '语言学习', icon: FileText, url: 'https://getyarn.io/', count: 0 },
          { name: '英语发音矫正器', desc: '英语发音矫正', icon: Book, url: 'https://corrector.justsong.cn', count: 0 },
          { name: 'Youzack 精听', desc: '英语听力精听', icon: Book, url: 'https://www.youzack.com', count: 0 },
          { name: '英语阅读网', desc: '英语阅读资料', icon: Book, url: 'https://www.enread.com', count: 0 },
          { name: 'Loecsen', desc: '极简外语学习', icon: Globe, url: 'https://www.loecsen.com/zh', count: 0 },
          { name: '词频背单词', desc: '按词频背单词', icon: Book, url: 'https://www.cipindanci.com/', count: 0 },
          { name: 'Visuwords', desc: '可视化英语单词关联', icon: Book, url: 'https://visuwords.com/', count: 0 },
          { name: '爱发音', desc: '英美音标发音教学', icon: Book, url: 'https://fayin.love', count: 0 },


            
          { name: 'Toucan', desc: '浏览网页时学外语扩展', icon: Globe, url: 'https://jointoucan.com/', count: 0 },
          { name: '英语拼写打字练习', desc: '英文打字练习', icon: Keyboard, url: 'https://qwerty.liumingye.cn/', count: 0 },
          
          { name: '腾讯交互翻译', desc: '文档与多语言翻译', icon: FileText, url: 'https://transmart.qq.com', count: 0 },
          { name: 'CNKI 翻译助手', desc: '学术翻译工具', icon: FileText, url: 'https://dict.cnki.net/index#', count: 0 },

            


          
          { name: 'アニメ・まんがの日本語', desc: '看漫画学日语', icon: Book, url: 'https://anime-manga.jp/zh/', count: 0 },
          { name: '识典古籍', desc: '古籍阅读与对照', icon: Book, url: 'https://www.shidianguji.com', count: 0 },
          { name: '中国哲学书电子化计划', desc: '最全中文古籍库', icon: Book, url: 'https://ctext.org/zhs', count: 0 },
          { name: '古登堡计划', desc: '公共领域电子书库', icon: Book, url: 'https://www.gutenberg.org/', count: 0 },
          { name: '可汗学院', desc: '免费数学教学平台', icon: Book, url: 'https://zh.khanacademy.org', count: 0 },


          
          { name: '编程自学之路', desc: '编程路线与资源', icon: Code, url: 'https://r2coding.com', count: 0 },
          { name: '菜鸟教程', desc: '免费编程教程网站', icon: Code, url: 'https://www.runoob.com', count: 0 },
          { name: 'oeasy', desc: '实用教学资源', icon: Book, url: 'https://oeasy.org', count: 0 },


          { name: '吴师兄学算法', desc: '图解面试算法与刷题', icon: Code, url: 'https://cxyxiaowu.com', count: 0 },
          { name: 'doyoudo', desc: '设计与剪辑在线学习', icon: Image, url: 'https://www.doyoudo.com/free', count: 0 },
          
          { name: 'edX', desc: '麻省理工与哈佛在线课程平台', icon: Book, url: 'https://www.edx.org/', count: 0 },
          { name: '学堂在线', desc: '高校在线课程平台', icon: Book, url: 'https://www.xuetangx.com/', count: 0 },

          
          { name: '默沙东诊疗手册', desc: '医学诊疗百科', icon: Book, url: 'https://www.msdmanuals.cn', count: 0 },
          { name: '丁香园用药助手', desc: '医疗用药查询', icon: Book, url: 'https://drugs.dxy.cn/pc', count: 0 },

          
          { name: '知识图谱', desc: '历史名人知识图谱', icon: Database, url: 'https://cnkgraph.com', count: 0 },
          { name: 'Crash Course', desc: '高质量课程视频（中文组）', icon: Book, url: 'https://crashcourse.club', count: 0 },
          
          { name: '国家哲学社会科学数据库', desc: '学术期刊与论文库', icon: Book, url: 'http://www.nssd.org', count: 0 },
          
          { name: '运营笔记导航', desc: '运营学习导航', icon: PenTool, url: 'https://yunyingbiji.cn', count: 0 },
          { name: '知识船舱', desc: '知识资源', icon: Database, url: 'http://zscc.ysepan.com', count: 0 },
          
          { name: 'ExamCoo', desc: '在线考试资源', icon: FileText, url: 'https://www.examcoo.com', count: 0 },
          { name: '永久免费考试系统', desc: '永久免费考试系统', icon: Globe, url: 'https://www.examcoo.com/', count: 0 },
 ],
      },
      other:{
        title: '其他资源',
        tools: [
   
          


      //ppt
        { name: 'PPT超级市场', desc: 'AI PPT模板网站', icon: FileText, url: 'https://ppt.sotary.com', count: 0 },
        { name: 'PPT设计教程网', desc: 'PPT 教程与模板', icon: FileText, url: 'https://www.pptfans.cn/pptcourse', count: 0 },
        { name: '优品PPT', desc: 'PPT模板', icon: FileText, url: 'https://www.ypppt.com', count: 0 },
        { name: '第一PPT', desc: 'PPT资源', icon: FileText, url: 'https://www.1ppt.com', count: 0 },
        { name: 'AIPPT', desc: 'AI智能PPT生成工具', icon: FileText, url: 'https://www.aippt.cn/', count: 0 },
        { name: 'PPT模板宝', desc: 'PPT模板资源', icon: FileText, url: 'https://www.51pptmoban.com/', count: 0 },
        { name: 'PPT汇', desc: 'PPT模板资源', icon: FileText, url: 'https://www.ppthui.com/', count: 0 },

        { name: '盘库吧', desc: '网盘资源全网在线搜索神器', icon: Database, url: 'https://panku8.com/', count: 0 },

        { name: '免费查重', desc: '论文查重工具', icon: FileText, url: 'https://www.paperfree.cn', count: 0 },
        { name: '小纸条', desc: '开放资源网站', icon: FileText, url: 'https://gitcafe.ink', count: 0 },

        { name: 'mvcat', desc: '个性化电影推荐', icon: FileVideo, url: 'https://www.mvcat.com', count: 0 },
        { name: '千帆搜索', desc: '聚合网盘搜索', icon: FileText, url: 'https://pan.qianfan.app/', count: 0 },
        { name: 'AnyBT', desc: '磁力搜索', icon: Download, url: 'https://anybt.eth.limo/', count: 0 },
        { name: "What's the link?", desc: '磁力链接内容预览', icon: Download, url: 'https://whatslink.info', count: 0 },
        { name: 'Justlive', desc: '多平台直播聚合', icon: FileVideo, url: 'https://live.yj1211.work', count: 0 },
    ],          
      }
    },
  },
  explore: {
    title: '在线探索',
    subcategories:{
          zoom:{
            title: '探索观测',
            tools:[
                //探索观测
              { name: '实时地球', desc: '全球卫星地图观测', icon: Building2, url: 'https://zoom.earth/', count: 0 },
              { name: '深海探索', desc: '交互式深海探索', icon: Globe, url: 'https://neal.fun/deep-sea', count: 0 },
              { name: '海底世界', desc: '海洋生态互动教育', icon: Building2, url: 'https://www.bluemarinefoundation.com/the-sea-we-breathe/', count: 0 },
              { name: '随机街景', desc: '随机探索街景', icon: Building2, url: 'https://randomstreetview.com/', count: 0 },
              { name: '天际摄像头', desc: '全球实景直播', icon: Building2, url: 'https://www.skylinewebcams.com/', count: 0 },
              { name: '鲨鱼追踪器', desc: '鲨鱼迁徙观测', icon: Building2, url: 'https://www.ocearch.org/tracker/', count: 0 },
              { name: '3D地球模型', desc: '3D交互地球模型', icon: Building2, url: 'https://3d-app.yunser.com/earth/', count: 0 },
              { name: '远古地球', desc: '板块运动可视化', icon: Building2, url: 'https://3d-app.yunser.com/plateMotion/', count: 0 },
              { name: '光污染地图', desc: '全球光污染地图', icon: Building2, url: 'https://www.lightpollutionmap.info/', count: 0 },
              { name: '地球时钟', desc: '地球卫星时钟', icon: Building2, url: 'https://earthclock.cwandt.com/', count: 0 },
              { name: 'Ventusky', desc: '气象数据可视化', icon: Building2, url: 'https://www.ventusky.com/', count: 0 },
                      
              { name: '流星雨观测', desc: '流星雨可视化', icon: Building2, url: 'https://www.meteorshowers.org/', count: 0 },
              { name: '航班追踪', desc: '航班实时追踪', icon: Building2, url: 'https://zh.flightaware.com/', count: 0 },
              { name: '全球网络攻击图', desc: '实时网络攻击图', icon: Shield, url: 'https://cybermap.kaspersky.com', count: 0 },

                ]
              },
              art:{
                title: '文化艺术',
                tools:[ //文化艺术
                { name: 'CyArk', desc: '古迹3D数字化平台', icon: Building2, url: 'https://www.cyark.org/', count: 0 },
                { name: '故宫全景', desc: '故宫全景虚拟游览', icon: Building2, url: 'https://pano.dpm.org.cn/', count: 0 },
                { name: '故宫数字文物', desc: '故宫藏品高清浏览', icon: Building2, url: 'https://digicol.dpm.org.cn/', count: 0 },
                { name: '中华珍宝馆', desc: '书画数字资源馆', icon: Building2, url: 'https://g2.ltfc.net/', count: 0 },
                { name: '陕西博物馆', desc: '陕西博物馆线上展厅', icon: Building2, url: 'https://www.sxhm.com/online.html', count: 0 },
                { name: '上海博物馆AR', desc: '上博增强现实体验', icon: Building2, url: 'https://www.shanghaimuseum.net/mu/frontend/pg/index', count: 0 },
                { name: '国博VR', desc: '国博虚拟现实游览', icon: Building2, url: 'http://www.chnmuseum.cn/Portals/0/web/vr/', count: 0 },
                { name: '千亿像素中国', desc: '城市超清全景图', icon: Building2, url: 'http://bigpixel.cn/', count: 0 },
                { name: '历史照片库', desc: '近代中国影像库', icon: Building2, url: 'https://www.hpcbristol.net/', count: 0 },
                { name: '荷兰国家博物馆', desc: '荷兰国立艺术馆', icon: Building2, url: 'https://www.rijksmuseum.nl/nl', count: 0 },
                { name: 'AirPano', desc: '全球全景旅游', icon: Globe, url: 'https://www.airpano.org.cn', count: 0 },
                { name: '卢浮宫藏品库', desc: '卢浮宫数字典藏', icon: Building2, url: 'https://collections.louvre.fr/', count: 0 },
                { name: '波斯波利斯', desc: '波斯古城复原', icon: Building2, url: 'https://persepolis.getty.edu/', count: 0 },

                { name: '苏联海报库', desc: '苏联海报收藏', icon: Building2, url: 'https://reddirect.ru/', count: 0 },
                { name: '艺术公域', desc: '高清艺术公域图', icon: Building2, url: 
                'https://artvee.com/', count: 0 },        
                  { name: '中国物种名录', desc: '权威生物名录', icon: Building2, url: 'http://sp2000.org.cn/', count: 0 },

                
                { name: '全历史', desc: '可视化历史百科', icon: Database, url: 'https://www.allhistory.com', count: 0 },
                { name: '书格', desc: '古籍善本数字馆', icon: Book, url: 'https://new.shuge.org', count: 0 },
                { name: '知妖', desc: '中国妖怪文化志', icon: Database, url: 'http://www.cbaigui.com', count: 0 },
                { name: '乡音苑', desc: '中文方言采录', icon: Database, url: 'https://phonemica.net', count: 0 },
                { name: '故事谷', desc: '植根于人民的故事网站', icon: Book, url: 'https://www.gushigu.cn/', count: 0 },
                { name: '历史故事网·烟雨阁', desc: '民间故事与野史', icon: Book, url: 'https://www.yanyuzhai.cn/', count: 0 },

          
                { name: 'How Music Taste Evolved', desc: '音乐历史可视化', icon: Music, url: 'https://pudding.cool/2017/03/music-history', count: 0 },

                { name: '百家讲坛', desc: '传统文化普及栏目', icon: Building2, url: 'https://tv.cctv.com/lm/bjjt/', count: 0 },
                { name: '历史上的今天', desc: '了解历史上的今日', icon: Building2, url: 'https://baike.baidu.com/calendar/', count: 0 },
                { name: '观沧海', desc: '历史地图研究', icon: Building2, url: 'https://www.ageeye.cn/', count: 0 },


    ]
          },
          art2:{
            title: '娱乐互动',
            tools: [
      //娱乐互动
              { name: '红警网页版', desc: '红警在线游玩', icon: Gamepad2, url: 'https://game.chronodivide.com', count: 0 },
              { name: '植物大战僵尸', desc: '网页版植物大战僵尸', icon: Gamepad2, url: 'https://pvz.heheda.top', count: 0 },
              { name: '小霸王', desc: '在线怀旧街机', icon: Gamepad2, url: 'https://www.yikm.net', count: 0 },
              { name: '美少女生成器', desc: '随机动漫少女', icon: Image, url: 'https://thiswaifudoesnotexist.net', count: 0 },
              { name: '动漫捏脸', desc: '动漫角色捏脸', icon: Image, url: 'https://picrew.me/ja', count: 0 },
              { name: '查无此人', desc: '随机生成人脸', icon: Image, url: 'https://thispersondoesnotexist.com', count: 0 },
              { name: '虚拟乐器', desc: '网页乐器演奏', icon: Music, url: 'https://www.virtualmusicalinstruments.com', count: 0 },
              { name: '在线钢琴', desc: '键盘弹琴模拟', icon: Music, url: 'https://www.xiwnn.com/piano', count: 0 },
              { name: 'tetr.io', desc: '在线俄罗斯方块', icon: Gamepad2, url: 'https://tetr.io', count: 0 },
              { name: '信任的进化', desc: '心理博弈小游戏', icon: Gamepad2, url: 'https://dccxi.com', count: 0 },
              { name: '人生重开模拟器', desc: '文字人生游戏', icon: Gamepad2, url: 'https://syaro.io', count: 0 },
              { name: 'slapkirk', desc: '打脸小游戏', icon: Gamepad2, url: 'https://www.slapkirk.com/play', count: 0 },
              
              { name: 'AI 随机图像', desc: 'AI 随机生成图片', icon: Image, url: 'https://airandomimage.art/', count: 0 },
              { name: '营销号生成器', desc: '营销文案生成', icon: FileText, url: 'https://kaseidis.gitee.io/interesting_gadgets/marketing_generator', count: 0 },
              { name: '打字打字', desc: '在线打字练习', icon: Keyboard, url: 'https://www.dazidazi.com', count: 0 },
              { name: '反应测试', desc: '反应速度测试', icon: Gamepad2, url: 'https://humanbenchmark.com/tests/reactiontime', count: 0 },




              
    ],
          },
          art3:{
            title: '数据工具',
            tools: [
        //数据工具
      
      { name: '全球贸易数据', desc: '全球贸易可视化', icon: Building2, url: 'http://globe.cid.harvard.edu/', count: 0 },
      { name: '公共钢琴地图', desc: '公共钢琴位置地图', icon: Building2, url: 'https://pianos.pub/', count: 0 },
      { name: '井盖地图', desc: '井盖文化地图', icon: Building2, url: 'https://manhole.co.il/', count: 0 },
      { name: '电力设施地图', desc: '全球能源设施地图', icon: Building2, url: 'https://openinframap.org/', count: 0 },
      { name: '护照博物馆', desc: '护照签证信息库', icon: Building2, url: 'https://www.passportindex.org/', count: 0 },    
      { name: 'UI设计史', desc: '界面演化资料库', icon: Building2, url: 'https://history.user-interface.io/', count: 0 },
      { name: '世界国旗库', desc: '世界国旗百科库', icon: Building2, url: 'https://world-flags.org/', count: 0 },
      { name: 'Dollar Street', desc: '全球家庭生活对比', icon: Building2, url: 'https://www.gapminder.org/dollar-street/', count: 0 },
      { name: '数字游民指南', desc: '城市评分与远程', icon: Building2, url: 'https://nomadlist.com/', count: 0 },
      { name: '地平说协会', desc: '平地理论社区', icon: Building2, url: 'https://www.tfes.org/', count: 0 },
      { name: '机械键盘图鉴', desc: '机械键盘收藏志', icon: Building2, url: 'https://scrapbox.io/MECHKEYS/', count: 0 },      
      { name: '核弹模拟器', desc: '核爆影响模拟器', icon: Building2, url: 'https://nuclearsecrecy.com/nukemap/', count: 0 },
      { name: '地球时间线', desc: '地球历史时间轴', icon: Building2, url: 'https://timelineofearth.com/', count: 0 },
      { name: '克苏鲁公社', desc: '克苏鲁文化社区', icon: Building2, url: 'https://www.cthulhuclub.com/', count: 0 },
      { name: '极像素', desc: '超高清全景图库', icon: Building2, url: 'https://www.sigoo.com/', count: 0 },
      { name: 'OEC数据', desc: '国际贸易数据', icon: Building2, url: 'https://oec.world/', count: 0 },    
      { name: '木材数据库', desc: '木材材料特性库', icon: Building2, url: 'https://www.wood-database.com/', count: 0 },
      { name: '无限美术馆', desc: '在线3D艺术展', icon: Building2, url: 'https://gallery.nowaythis.works/', count: 0 },


    

     



       
      { name: '萌宠网站「今天吃什么」', desc: '随机美食推荐', icon: Utensils, url: 'https://chi.hillcloud.net', count: 0 },
      { name: '网址导航「你不会百度吗」', desc: '懒人问答网站', icon: PenTool, url: 'https://buhuibaidu.me', count: 0 },
      { name: '答案之书在线版', desc: '在线答案占卜', icon: Book, url: 'https://www.myanswersbook.com', count: 0 },
      { name: '假装升级', desc: '假装系统更新', icon: Server, url: 'https://fakeupdate.net', count: 0 },
 
      { name: '全球直播摄像头', desc: '全球直播摄像集合', icon: Building2, url: 'https://www.webcamtaxi.com/', count: 0 },
     
   
      { name: '模拟器博物馆', desc: '经典系统模拟器', icon: Building2, url: 'http://www.famicn.com/', count: 0 },
      { name: 'ArchDaily', desc: '建筑设计资讯站', icon: Building2, url: 'https://www.archdaily.cn/cn/', count: 0 },
 


      { name: '8values测试', desc: '政治倾向测试', icon: Building2, url: 'https://songyon.github.io/8valuescn/', count: 0 },
      { name: '网页时光机', desc: '十年前网页回顾', icon: Building2, url: 'https://neal.fun/ten-years-ago/', count: 0 },

      { name: '古典音乐库', desc: '古典MIDI下载', icon: Building2, url: 'https://www.kunstderfuge.com/', count: 0 },
      { name: '英特尔博物馆', desc: '英特尔虚拟博物馆', icon: Building2, url: 'https://virtualmuseum.intel.com/', count: 0 },
      { name: '铅笔图鉴', desc: '铅笔品牌图鉴', icon: Building2, url: 'https://brandnamepencils.com/', count: 0 },
      { name: '物流艺术', desc: '快递路径可视化', icon: Building2, url: 'https://logisticsartproject.com/', count: 0 },
      { name: '方言档案馆', desc: '全球口音语料库', icon: Building2, url: 'https://www.dialectsarchive.com/', count: 0 },
      { name: '行星年龄计算', desc: '行星年龄换算', icon: Building2, url: 'https://exploratorium.edu/ronh/age/', count: 0 },
      { name: '公共领域音乐', desc: '公共领域音乐库', icon: Building2, url: 'https://www.locserendipity.com/PushPlay.html', count: 0 },
      { name: '人口时钟', desc: '全球人口动态', icon: Building2, url: 'https://countrymeters.info/cn/', count: 0 },
      { name: '17Track 全球物流', desc: '国际物流查询', icon: Truck, url: 'https://www.17track.net/zh-cn', count: 0 },
   
      { name: '手机博物馆', desc: '手机发展史图鉴', icon: Database, url: 'https://www.mobilephonemuseum.com/catalogue', count: 0 },
      { name: '汤姆科技指南', desc: '硬件测评指南', icon: Database, url: 'https://TomsGuide.com', count: 0 },
      { name: 'anyknew 热点', desc: '热点资讯聚合', icon: Building2, url: 'https://www.anyknew.com/#/', count: 0 },
      { name: 'BibiGPT', desc: '音视频AI总结', icon: Brain, url: 'https://bibigpt.co', count: 0 },
      { name: '薪情', desc: '全球薪资查询', icon: Database, url: 'https://www.51salary.com', count: 0 },  

      { name: '移轴摄影世界', desc: '微缩景观摄影', icon: Building2, url: 'https://www.littlebigworld.de/', count: 0 },


    ],
          }
      }
  }
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

// 由于原始代码中resources部分被省略了很多，这里为了保持简洁，我们只保留了部分数据

