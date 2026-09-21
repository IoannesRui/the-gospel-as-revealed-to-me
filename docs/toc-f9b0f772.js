// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><span>第一册：玛利亚和耶稣诞生及其隐居生活 / 1-43</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/0.序言.html">0.序言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/1.引言.html">1.引言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/2.雅敬与安纳（圣母玛利亚的双亲）向天主许愿.html">2.雅敬与安纳（圣母玛利亚的双亲）向天主许愿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/3.参加帐棚节——雅敬与安纳充满智慧.html">3.参加帐棚节——雅敬与安纳充满智慧</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/4.安纳以诗歌报告她已做母亲的心情（她怀孕了无染原罪的玛利亚）.html">4.安纳以诗歌报告她已做母亲的心情（她怀孕了无染原罪的玛利亚）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/5.圣母的诞生（她的童贞早己在天父永远的意念中）.html">5.圣母的诞生（她的童贞早己在天父永远的意念中）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/6.安纳的取洁礼及奉献玛利亚于圣殿.html">6.安纳的取洁礼及奉献玛利亚于圣殿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/7.玛利亚的童年和父母亲的生活.html">7.玛利亚的童年和父母亲的生活</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/8.奉献玛利亚于圣殿.html">8.奉献玛利亚于圣殿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/9.雅敬和安纳的去世.html">9.雅敬和安纳的去世</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/10.玛利亚的赞颂曲.html">10.玛利亚的赞颂曲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/11.玛利亚向大司祭表明自己的誓愿.html">11.玛利亚向大司祭表明自己的誓愿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/12.若瑟被指定为童贞女玛利亚的配偶.html">12.若瑟被指定为童贞女玛利亚的配偶</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/13.童贞女与若瑟的订婚仪式.html">13.童贞女与若瑟的订婚仪式</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/14.若瑟和玛利亚抵达纳匝肋.html">14.若瑟和玛利亚抵达纳匝肋</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/15.结束福音以前的部分.html">15.结束福音以前的部分</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/16.圣母领报（或天使报喜）.html">16.圣母领报（或天使报喜）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/17.厄娃的背命和玛利亚的服从.html">17.厄娃的背命和玛利亚的服从</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/18.玛利亚告诉若瑟：依撒伯尔已怀孕；并恳请天主为自己说明.html">18.玛利亚告诉若瑟：依撒伯尔已怀孕；并恳请天主为自己说明</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/19.玛利亚与若瑟启程前往耶路撒冷.html">19.玛利亚与若瑟启程前往耶路撒冷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/20.从耶路撒冷到匝加利亚的家.html">20.从耶路撒冷到匝加利亚的家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/21.玛利亚抵达赫贝龙——依撒伯尔的家.html">21.玛利亚抵达赫贝龙——依撒伯尔的家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/22.玛利亚在赫贝龙.html">22.玛利亚在赫贝龙</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/23.洗者若翰诞生.html">23.洗者若翰诞生</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/24.若翰的割损礼.html">24.若翰的割损礼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/25.奉献洗者若翰于圣殿.html">25.奉献洗者若翰于圣殿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/26.若瑟向玛利亚请求宽恕.html">26.若瑟向玛利亚请求宽恕</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/27.登记户口的谕旨，论爱配偶和信赖天主.html">27.登记户口的谕旨，论爱配偶和信赖天主</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/28.前往白冷.html">28.前往白冷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/29.耶稣诞生（玫瑰经欢喜三端）.html">29.耶稣诞生（玫瑰经欢喜三端）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/30.给牧羊人报喜讯.html">30.给牧羊人报喜讯</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/31.匝加利亚的探访.html">31.匝加利亚的探访</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/32.献耶稣于圣殿（玫瑰经欢喜四端）.html">32.献耶稣于圣殿（玫瑰经欢喜四端）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/33.童贞女的催眠曲.html">33.童贞女的催眠曲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/34.贤士们朝拜耶稣——这是“信德的福音”.html">34.贤士们朝拜耶稣——这是“信德的福音”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/35.逃难埃及.html">35.逃难埃及</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/36.圣家在埃及.html">36.圣家在埃及</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/37.耶稣首次上木匠课.html">37.耶稣首次上木匠课</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/38.玛利亚当了耶稣，犹大和雅格的老师.html">38.玛利亚当了耶稣，犹大和雅格的老师</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/39.准备耶稣的成年礼和前往耶路撒冷.html">39.准备耶稣的成年礼和前往耶路撒冷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/40.耶稣在圣殿接受成年仪式的考试.html">40.耶稣在圣殿接受成年仪式的考试</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/41.耶稣在圣殿与法学士辩论（欢喜五端）.html">41.耶稣在圣殿与法学士辩论（欢喜五端）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/42.圣若瑟的去世.html">42.圣若瑟的去世</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1.第一册：玛利亚和耶稣诞生及其隐居生活/43.隐居生活的结束.html">43.隐居生活的结束</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第二册：耶稣的苦难 / 599-616</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/0.序言.html">0.序言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/599.到达最后晚餐厅，耶稣向母亲告别.html">599.到达最后晚餐厅，耶稣向母亲告别</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/600.逾越节晚餐（玫瑰经光明第五端）.html">600.逾越节晚餐（玫瑰经光明第五端）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/601.序幕.html">601.序幕</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/602.耶稣偕同十一位宗徒前往革责玛尼山园.html">602.耶稣偕同十一位宗徒前往革责玛尼山园</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/603.默想耶稣在革责玛尼山园祈祷.html">603.默想耶稣在革责玛尼山园祈祷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/604.各样的审讯，伯铎否认耶稣，耶稣对比拉多的评语.html">604.各样的审讯，伯铎否认耶稣，耶稣对比拉多的评语</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/605.犹达斯若悔改本来可以得救.html">605.犹达斯若悔改本来可以得救</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/606.耶稣，玛利亚和亚当，厄娃的相互对照.html">606.耶稣，玛利亚和亚当，厄娃的相互对照</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/607.若望去接圣母.html">607.若望去接圣母</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/608.苦路，由总督府到加尔瓦略山.html">608.苦路，由总督府到加尔瓦略山</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/609.耶稣被钉，圣死，卸下圣尸.html">609.耶稣被钉，圣死，卸下圣尸</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/610.安葬耶稣，圣母哀悼.html">610.安葬耶稣，圣母哀悼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/611.封闭墓门，返回晚餐厅.html">611.封闭墓门，返回晚餐厅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/612.圣周五的黑夜，圣童贞的哀悼.html">612.圣周五的黑夜，圣童贞的哀悼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/613.关于耶稣及玛利亚所受的苦难.html">613.关于耶稣及玛利亚所受的苦难</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/614.圣周六.html">614.圣周六</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/615.圣周六的夜晚.html">615.圣周六的夜晚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="2.第二册：耶稣的苦难/616.复活日的黎明，圣母的祈祷.html">616.复活日的黎明，圣母的祈祷</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第三册：耶稣光荣的复活至圣母蒙召升天 / 617-651</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/0.序言.html">0.序言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/617.耶稣复活.html">617.耶稣复活</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/618.耶稣复活显现给圣母.html">618.耶稣复活显现给圣母</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/619.虔诚的妇女们赴圣墓.html">619.虔诚的妇女们赴圣墓</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/620.对耶稣复活的省思.html">620.对耶稣复活的省思</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/621.耶稣显现给拉匝禄.html">621.耶稣显现给拉匝禄</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/622.耶稣显现给雇撒的约翰纳.html">622.耶稣显现给雇撒的约翰纳</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/623.耶稣显现给阿黎玛特雅的若瑟，尼苛德摩，玛纳恒.html">623.耶稣显现给阿黎玛特雅的若瑟，尼苛德摩，玛纳恒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/624.耶稣显现给牧羊人.html">624.耶稣显现给牧羊人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/625.耶稣显现给厄玛乌的两位门徒.html">625.耶稣显现给厄玛乌的两位门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/626.外邦人来拜访圣母，转述显现的事迹.html">626.外邦人来拜访圣母，转述显现的事迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/627.晚餐厅中，耶稣显现给宗徒们.html">627.晚餐厅中，耶稣显现给宗徒们</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/628.多默归来，不信耶稣复活.html">628.多默归来，不信耶稣复活</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/629.耶稣再次显现给宗徒，多默也在。耶稣向宗徒们讲论圣秩圣事.html">629.耶稣再次显现给宗徒，多默也在。耶稣向宗徒们讲论圣秩圣事</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/630.耶稣要宗徒到革责玛尼山园；教导他们如何默想天主经.html">630.耶稣要宗徒到革责玛尼山园；教导他们如何默想天主经</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/631.宗徒们去哥耳哥达，再回晚餐厅接受耶稣训话.html">631.宗徒们去哥耳哥达，再回晚餐厅接受耶稣训话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/632.耶稣在不同的地方显现给不同的人.html">632.耶稣在不同的地方显现给不同的人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/633.耶稣在提庇黎雅湖边显现给宗徒；授首席权位予伯铎.html">633.耶稣在提庇黎雅湖边显现给宗徒；授首席权位予伯铎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/634.耶稣在大博尔山教诲宗徒及门徒安慰玛尔奇安.html">634.耶稣在大博尔山教诲宗徒及门徒安慰玛尔奇安</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/635.耶稣教导七件圣事预言教会的未来.html">635.耶稣教导七件圣事预言教会的未来</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/636.补行逾越节.html">636.补行逾越节</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/637.耶稣回归父家向母亲告别.html">637.耶稣回归父家向母亲告别</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/638.革责玛尼最后的训言；耶稣告别及升天.html">638.革责玛尼最后的训言；耶稣告别及升天</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/639.玛弟亚被选为宗徒.html">639.玛弟亚被选为宗徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/640.圣神降临—默西亚在世的时期宣告结束.html">640.圣神降临—默西亚在世的时期宣告结束</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/641.初期基督信徒的集会，伯铎举行感恩祭.html">641.初期基督信徒的集会，伯铎举行感恩祭</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/642.至圣童贞定居革责玛尼山园；若望陪侍并预言圣母升天.html">642.至圣童贞定居革责玛尼山园；若望陪侍并预言圣母升天</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/643.至圣童贞玛利亚和若望到耶稣受难的地方.html">643.至圣童贞玛利亚和若望到耶稣受难的地方</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/644.建立主日制度；加玛里耳走向基督两块殓布.html">644.建立主日制度；加玛里耳走向基督两块殓布</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/645.斯德望受审—被乱石砸死；扫禄和加玛里耳走相反的道路.html">645.斯德望受审—被乱石砸死；扫禄和加玛里耳走相反的道路</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/646.斯德望下葬，教会开始受迫害.html">646.斯德望下葬，教会开始受迫害</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/647.加玛里耳皈依成为基督信徒.html">647.加玛里耳皈依成为基督信徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/648.伯铎与若望沟通，伯铎叩别至圣童贞玛利亚.html">648.伯铎与若望沟通，伯铎叩别至圣童贞玛利亚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/649.圣母安眠.html">649.圣母安眠</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/650.至圣童贞玛利亚灵肉光荣被提升天.html">650.至圣童贞玛利亚灵肉光荣被提升天</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3.第三册：耶稣光荣的复活至圣母蒙召升天/651.论圣母逝世和升天以及母后尊位.html">651.论圣母逝世和升天以及母后尊位</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第四册：耶稣宣教第一年（上） / 44-87</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/0.序言.html">0.序言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/44.耶稣告别母亲离开纳匝肋.html">44.耶稣告别母亲离开纳匝肋</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/45.洗者若翰讲道.html">45.洗者若翰讲道</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/46.在旷野受魔鬼试探.html">46.在旷野受魔鬼试探</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/47.耶稣和若望以及雅各伯相遇.html">47.耶稣和若望以及雅各伯相遇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/48.若望和雅各伯向伯铎论及默西亚.html">48.若望和雅各伯向伯铎论及默西亚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/49.耶稣在会堂讲道后，初次遇见伯铎.html">49.耶稣在会堂讲道后，初次遇见伯铎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/50.耶稣在贝特赛达，伯铎家中与斐理和纳塔乃耳（巴尔多禄茂）相遇.html">50.耶稣在贝特赛达，伯铎家中与斐理和纳塔乃耳（巴尔多禄茂）相遇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/51.玛利亚打发犹大达陡去贝特赛达，请耶稣赴加纳婚宴.html">51.玛利亚打发犹大达陡去贝特赛达，请耶稣赴加纳婚宴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/52.加纳婚宴.html">52.加纳婚宴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/53.耶稣在圣殿驱逐商人.html">53.耶稣在圣殿驱逐商人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/54.耶稣遇见多默和依斯加略人犹达斯，治愈热诚者西满.html">54.耶稣遇见多默和依斯加略人犹达斯，治愈热诚者西满</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/55.耶稣委派多默任务.html">55.耶稣委派多默任务</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/56.热诚者西满和犹大达陡.html">56.热诚者西满和犹大达陡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/57.耶稣和犹大达陡.html">57.耶稣和犹大达陡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/58.耶稣在葛法翁讲论捕鱼的比喻治愈瞎子.html">58.耶稣在葛法翁讲论捕鱼的比喻治愈瞎子</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/59.在葛法翁会堂一场争辩之后驱魔.html">59.在葛法翁会堂一场争辩之后驱魔</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/60.耶稣治愈伯铎的岳母.html">60.耶稣治愈伯铎的岳母</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/61.耶稣在伯铎家中讲道，并显奇迹.html">61.耶稣在伯铎家中讲道，并显奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/62.耶稣破晓时分祈祷，门徒前去找祂.html">62.耶稣破晓时分祈祷，门徒前去找祂</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/63.耶稣在苛辣匝因治愈癞病人.html">63.耶稣在苛辣匝因治愈癞病人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/64.在葛法翁治愈瘫子.html">64.在葛法翁治愈瘫子</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/65.捕鱼奇迹.html">65.捕鱼奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/66.在革责玛尼山园耶稣勉强收犹达斯为徒.html">66.在革责玛尼山园耶稣勉强收犹达斯为徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/67.耶稣在鱼门显奇迹，粉碎两把菜刀.html">67.耶稣在鱼门显奇迹，粉碎两把菜刀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/68.耶稣在圣殿教导群众.html">68.耶稣在圣殿教导群众</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/69.耶稣教导犹达斯依斯加略.html">69.耶稣教导犹达斯依斯加略</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/70.耶稣和若望在革责玛尼庄园若望与犹达斯的对比.html">70.耶稣和若望在革责玛尼庄园若望与犹达斯的对比</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/71.耶稣介绍犹达斯依斯加略给热诚者西满和若望.html">71.耶稣介绍犹达斯依斯加略给热诚者西满和若望</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/72.耶稣，若望，热诚者西满，犹达斯往白冷镇.html">72.耶稣，若望，热诚者西满，犹达斯往白冷镇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/73.耶稣在白冷一村民家和前往祂诞生的山洞.html">73.耶稣在白冷一村民家和前往祂诞生的山洞</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/74.耶稣在白冷安娜家的废墟上宣讲.html">74.耶稣在白冷安娜家的废墟上宣讲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/75.耶稣寻访牧羊人：厄里亚和肋未以及若瑟.html">75.耶稣寻访牧羊人：厄里亚和肋未以及若瑟</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/76.耶稣与牧羊人依撒格在犹他遇.html">76.耶稣与牧羊人依撒格在犹他遇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/77.耶稣在赫贝龙，匝加利亚的家与阿格略相遇.html">77.耶稣在赫贝龙，匝加利亚的家与阿格略相遇</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/78.耶稣在克黎约特老撒乌耳去世.html">78.耶稣在克黎约特老撒乌耳去世</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/79.耶稣回程途中与牧羊人在赫贝龙近郊会面.html">79.耶稣回程途中与牧羊人在赫贝龙近郊会面</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/80.耶稣和三徒回守斋及受试探的地方.html">80.耶稣和三徒回守斋及受试探的地方</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/81.耶稣和门徒在约但河浅滩.html">81.耶稣和门徒在约但河浅滩</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/82.犹达斯卖掉阿格略的珠宝.html">82.犹达斯卖掉阿格略的珠宝</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/83.耶稣因犹达斯而流泪热诚者西满安慰祂.html">83.耶稣因犹达斯而流泪热诚者西满安慰祂</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/84.耶稣在伯达尼和拉匝禄会面.html">84.耶稣在伯达尼和拉匝禄会面</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/85.耶稣与西满去圣殿.html">85.耶稣与西满去圣殿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/86.耶稣在鱼门遇见士兵亚历山大.html">86.耶稣在鱼门遇见士兵亚历山大</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="4.第四册：耶稣宣教第一年（上）/87.耶稣和牧羊人以及门徒在多克依撒格留在犹大.html">87.耶稣和牧羊人以及门徒在多克依撒格留在犹大</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第五册：耶稣宣教第一年（中） / 88-116</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/88.耶稣在厄斯得隆平原会见牧羊祢约纳.html">88.耶稣在厄斯得隆平原会见牧羊祢约纳</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/89.耶稣告别约纳，返回纳匝肋.html">89.耶稣告别约纳，返回纳匝肋</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/90.翌日在纳匝肋的家.html">90.翌日在纳匝肋的家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/91.耶稣在纳匝肋的橄榄园中教导门徒.html">91.耶稣在纳匝肋的橄榄园中教导门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/92.耶稣在家附近教导门徒.html">92.耶稣在家附近教导门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/93.在纳匝肋花园，在至圣童贞面前，耶稣教导门徒.html">93.在纳匝肋花园，在至圣童贞面前，耶稣教导门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/94.耶稣治愈苛辣匝因的美女，并在葛法翁会堂宣讲.html">94.耶稣治愈苛辣匝因的美女，并在葛法翁会堂宣讲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/95.耶稣收阿尔斐的雅格为门徒，在玛窦税关附近宣讲.html">95.耶稣收阿尔斐的雅格为门徒，在玛窦税关附近宣讲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/96.耶稣在贝特赛达向群众宣讲.html">96.耶稣在贝特赛达向群众宣讲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/97.耶稣召叫玛窦为宗徒.html">97.耶稣召叫玛窦为宗徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/98.耶稣在提庇黎雅海（加里肋亚湖）附近城镇教导门徒.html">98.耶稣在提庇黎雅海（加里肋亚湖）附近城镇教导门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/99.耶稣在提庇黎雅，雇撒的家，寻找约纳堂.html">99.耶稣在提庇黎雅，雇撒的家，寻找约纳堂</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/100.耶稣在伯父阿尔斐的屋里及自己的家中.html">100.耶稣在伯父阿尔斐的屋里及自己的家中</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/101.耶稣咨询母亲对门徒的看法.html">101.耶稣咨询母亲对门徒的看法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/102.耶稣在加纳附近治愈雇撒的妻子约安纳（约翰纳）.html">102.耶稣在加纳附近治愈雇撒的妻子约安纳（约翰纳）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/103.耶稣和本雅明及达尼尔在黎巴嫩高地相聚.html">103.耶稣和本雅明及达尼尔在黎巴嫩高地相聚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/104.耶稣在海港城，接到有关约纳的信.html">104.耶稣在海港城，接到有关约纳的信</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/105.耶稣在伯父阿尔斐的家与堂兄西满和好.html">105.耶稣在伯父阿尔斐的家与堂兄西满和好</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/106.耶稣被赶出纳匝肋会堂，祂安慰母亲，四个默想的教导.html">106.耶稣被赶出纳匝肋会堂，祂安慰母亲，四个默想的教导</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/107.耶稣和母亲在雇撒的约安纳家中.html">107.耶稣和母亲在雇撒的约安纳家中</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/108.耶稣在安娜家中欢度葡萄丰收，为瘫痪儿童显神迹.html">108.耶稣在安娜家中欢度葡萄丰收，为瘫痪儿童显神迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/109.耶稣在多辣斯家，约纳的死亡.html">109.耶稣在多辣斯家，约纳的死亡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/110.耶稣在默龙湖附近，农夫雅各伯家中.html">110.耶稣在默龙湖附近，农夫雅各伯家中</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/111.返回耶里哥附近，约但河渡口.html">111.返回耶里哥附近，约但河渡口</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/112.耶稣在拉匝禄家，玛尔大谈起玛利德莲.html">112.耶稣在拉匝禄家，玛尔大谈起玛利德莲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/113.过了帐棚节，耶稣再次去拉匝禄家.html">113.过了帐棚节，耶稣再次去拉匝禄家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/114.在阿黎玛特雅，耶稣遇见加玛里耳及尼苛德摩.html">114.在阿黎玛特雅，耶稣遇见加玛里耳及尼苛德摩</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/115.祂治愈濒死的幼童，罗马士兵亚历山大寻觅耶稣.html">115.祂治愈濒死的幼童，罗马士兵亚历山大寻觅耶稣</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="5.第五册：耶稣宣教第一年（中）/116.耶稣在革责玛尼庄园；夜间与尼苛德摩论重生.html">116.耶稣在革责玛尼庄园；夜间与尼苛德摩论重生</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第六册：耶稣宣教第一年（下） / 117-140</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/117.去清水平之前，耶稣在拉匝禄家.html">117.去清水平之前，耶稣在拉匝禄家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/118.耶稣在清水准备与门徒.html">118.耶稣在清水准备与门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/119.耶稣在清水宣讲：“我是上主，你们的天主”.html">119.耶稣在清水宣讲：“我是上主，你们的天主”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/120.耶稣在清水宣讲：“除我以外，你不可有别的神。”.html">120.耶稣在清水宣讲：“除我以外，你不可有别的神。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/121.耶稣在清水宣讲：“不可妄呼上主，你天主的名。”.html">121.耶稣在清水宣讲：“不可妄呼上主，你天主的名。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/122.耶稣在清水宣讲：“应孝敬你的父母”.html">122.耶稣在清水宣讲：“应孝敬你的父母”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/123.耶稣在清水宣讲：“不可奸淫。”.html">123.耶稣在清水宣讲：“不可奸淫。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/124.在清水出现的蒙面妇人.html">124.在清水出现的蒙面妇人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/125.耶稣在清水宣讲：“遵守安息日，奉为圣日。”.html">125.耶稣在清水宣讲：“遵守安息日，奉为圣日。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/126.耶稣在清水宣讲：“不可杀人。”多辣斯的死亡.html">126.耶稣在清水宣讲：“不可杀人。”多辣斯的死亡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/127.耶稣在清水宣讲：“不可试探上主，你们的天主。”洗者若翰的三个门徒作见证.html">127.耶稣在清水宣讲：“不可试探上主，你们的天主。”洗者若翰的三个门徒作见证</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/128.耶稣在清水宣讲：“不可贪恋你近人的妻子”.html">128.耶稣在清水宣讲：“不可贪恋你近人的妻子”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/129.耶稣在清水治愈附魔的罗马人，并与他们谈话.html">129.耶稣在清水治愈附魔的罗马人，并与他们谈话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/130.耶稣在清水宣讲：“不可作假见证。”.html">130.耶稣在清水宣讲：“不可作假见证。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/131.耶稣在清水宣讲：“勿偷窃，勿贪恋他人妻女，勿贪图他人财物。”.html">131.耶稣在清水宣讲：“勿偷窃，勿贪恋他人妻女，勿贪图他人财物。”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/132.耶稣在清水，结束十诫的宣讲.html">132.耶稣在清水，结束十诫的宣讲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/133.典范使徒安德肋耶稣离开清水，走向伯达尼.html">133.典范使徒安德肋耶稣离开清水，走向伯达尼</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/134.在多克治愈患癌症的妇人耶露莎.html">134.在多克治愈患癌症的妇人耶露莎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/135.耶稣住在伯达尼，热诚者西满家.html">135.耶稣住在伯达尼，热诚者西满家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/136.耶稣在拉匝禄家中与牧羊人共度祝圣圣殿节.html">136.耶稣在拉匝禄家中与牧羊人共度祝圣圣殿节</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/137.重返清水.html">137.重返清水</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/138.耶稣收一位新门徒，启程往加里肋亚.html">138.耶稣收一位新门徒，启程往加里肋亚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/139.往厄玛乌的山路上，耶稣教导宗徒们.html">139.往厄玛乌的山路上，耶稣教导宗徒们</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="6.第六册：耶稣宣教第一年（下）/140.在厄玛乌会堂长克罗帕的家中——耶稣宣教第一年的结束——.html">140.在厄玛乌会堂长克罗帕的家中——耶稣宣教第一年的结束——</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第七册：耶解宣教第二年（甲） / 141-176</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/141.前往阿黎玛特雅的途中，耶稣教导门徒.html">141.前往阿黎玛特雅的途中，耶稣教导门徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/142.前往撒玛黎雅的途中，耶稣教导宗徒.html">142.前往撒玛黎雅的途中，耶稣教导宗徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/143.撤玛黎雅妇女，傅提乃.html">143.撤玛黎雅妇女，傅提乃</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/144.息哈尔城的人民.html">144.息哈尔城的人民</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/145.耶稣在息哈尔教.html">145.耶稣在息哈尔教</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/146.告别息哈尔人民.html">146.告别息哈尔人民</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/147.耶稣教导宗徒们，并在一位息啥尔妇人身上行奇迹.html">147.耶稣教导宗徒们，并在一位息啥尔妇人身上行奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/148.耶稣在艾农附近探望洗者若翰.html">148.耶稣在艾农附近探望洗者若翰</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/149.耶稣教导宗徒们.html">149.耶稣教导宗徒们</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/150.耶酥在纳匝助；我儿，我和你同行.html">150.耶酥在纳匝助；我儿，我和你同行</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/151.在加纳，苏搬纳的家一位王室官员.html">151.在加纳，苏搬纳的家一位王室官员</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/152.在载伯德家收撒罗默为徒.html">152.在载伯德家收撒罗默为徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/153.耶解向宗徒们谈论有关女性使徒.html">153.耶解向宗徒们谈论有关女性使徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/154.耶稣在海边的凯撒勒雅，向船舰划浆的奴隶喊话.html">154.耶稣在海边的凯撒勒雅，向船舰划浆的奴隶喊话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/155.在凯撒勒雅治愈罗马的女婴.html">155.在凯撒勒雅治愈罗马的女婴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/156.安纳利雅：第一位决定度奉献生活的贞女.html">156.安纳利雅：第一位决定度奉献生活的贞女</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/157.耶稣在纳匝助训育女门徒新的使命.html">157.耶稣在纳匝助训育女门徒新的使命</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/158.耶酥在革乃撒勒湖上和雇撤的约安纳谈话.html">158.耶酥在革乃撒勒湖上和雇撤的约安纳谈话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/159.耶稣在革尔革撤宣讲，若翰的门徒前来请益.html">159.耶稣在革尔革撤宣讲，若翰的门徒前来请益</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/160.从纳斐塔里前往基思卡拉，途中通见加玛里耳.html">160.从纳斐塔里前往基思卡拉，途中通见加玛里耳</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/161.耶稣治愈葛法翁法利塞人厄里的孙子.html">161.耶稣治愈葛法翁法利塞人厄里的孙子</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/162.法利塞人厄里和耶稣堂兄阿尔斐的西满，仅是表面上的皈依.html">162.法利塞人厄里和耶稣堂兄阿尔斐的西满，仅是表面上的皈依</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/163.在法利塞人尼里家的盛宴，讨论微税和默西更的国度.html">163.在法利塞人尼里家的盛宴，讨论微税和默西更的国度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/164.为了拣选宗徒上山避静.html">164.为了拣选宗徒上山避静</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/165.任命十二宗徒.html">165.任命十二宗徒</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/166.任命十二宗徒后，耶稣所行的一些奇迹，热诚者西满和若望第一次宣道.html">166.任命十二宗徒后，耶稣所行的一些奇迹，热诚者西满和若望第一次宣道</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/167.在雇撒的约安纳花园里与几位罗马妇女会面.html">167.在雇撒的约安纳花园里与几位罗马妇女会面</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/168.阿格略在纳匠肋，玛利亚的家.html">168.阿格略在纳匠肋，玛利亚的家</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/169.山中圣训之（一）：宗徒和使徒的任务.html">169.山中圣训之（一）：宗徒和使徒的任务</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/170.山中圣训之（二）：圣宠与真福的礼物.html">170.山中圣训之（二）：圣宠与真福的礼物</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/171.山中圣训之（三）：成全“旧法律”的福传劝谕.html">171.山中圣训之（三）：成全“旧法律”的福传劝谕</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/172.山中圣训之（四）：誓言，祈祷，禁食.html">172.山中圣训之（四）：誓言，祈祷，禁食</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/173.山中圣训之（五）：财富的运用，布施和对天主的信德.html">173.山中圣训之（五）：财富的运用，布施和对天主的信德</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/174.山中圣训之（六）：善与恶之间的选择，奸淫，休妻，不速之客玛利德莲.html">174.山中圣训之（六）：善与恶之间的选择，奸淫，休妻，不速之客玛利德莲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/175.在山脚下治愈一位癞病人；若望经师的慷概.html">175.在山脚下治愈一位癞病人；若望经师的慷概</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="7.第七册：耶解宣教第二年（甲）/176.安息日在山边的短暂停留，山中圣训最后一讲：爱天主的旨意.html">176.安息日在山边的短暂停留，山中圣训最后一讲：爱天主的旨意</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第八册：耶稣宣教第二年（乙） / 177-203</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/177.治愈百夫长的仆人.html">177.治愈百夫长的仆人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/178.三个男人想跟随耶稣.html">178.三个男人想跟随耶稣</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/179.撒种的比喻与新门徒厄里亚在苛辣匝因.html">179.撒种的比喻与新门徒厄里亚在苛辣匝因</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/180.在贝特赛达伯铎厨房里的谈话解释撒种的比喻洗者若翰第二次被捕的消息.html">180.在贝特赛达伯铎厨房里的谈话解释撒种的比喻洗者若翰第二次被捕的消息</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/181.麦子和莠子的比喻.html">181.麦子和莠子的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/182.耶稣与牧羊人孤雏匝加利亚谈话.html">182.耶稣与牧羊人孤雏匝加利亚谈话</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/183.在玛加丹的玛利亚（玛丽德莲）家中，治愈受伤的男人.html">183.在玛加丹的玛利亚（玛丽德莲）家中，治愈受伤的男人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/184.玛加丹的小本雅明和天国的两个比喻.html">184.玛加丹的小本雅明和天国的两个比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/185.这段福音我永远不会见到，因为它不太适合‘神视’。.html">185.这段福音我永远不会见到，因为它不太适合‘神视’。</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/186.在加达辣地区，两个附魔的人.html">186.在加达辣地区，两个附魔的人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/187.从塔利该亚去耶路撒冷参加逾越节庆若望爱上了大海.html">187.从塔利该亚去耶路撒冷参加逾越节庆若望爱上了大海</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/188.攀登大博尔山后，去恩多尔的女巫洞穴与腓力斯邂逅，他更名若望.html">188.攀登大博尔山后，去恩多尔的女巫洞穴与腓力斯邂逅，他更名若望</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/189.耶稣在纳因复活寡妇的独子.html">189.耶稣在纳因复活寡妇的独子</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/190.星期五黄昏抵达厄斯得隆平原.html">190.星期五黄昏抵达厄斯得隆平原</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/191.在厄斯得隆过安息日小雅贝和富翁与拉匝禄的比喻.html">191.在厄斯得隆过安息日小雅贝和富翁与拉匝禄的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/192.耶稣预言有关阿尔斐雅格的未来在默基多停留后，来到恩加宁.html">192.耶稣预言有关阿尔斐雅格的未来在默基多停留后，来到恩加宁</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/193.步行两天抵达舍根.html">193.步行两天抵达舍根</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/194.从舍根到比鲁的路程中耶稣预言小雅贝的未来.html">194.从舍根到比鲁的路程中耶稣预言小雅贝的未来</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/195.恩多尔的若望给依斯加略上了一课进入圣城耶路撒冷.html">195.恩多尔的若望给依斯加略上了一课进入圣城耶路撒冷</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/196.在革责玛尼庄园过安息日耶稣回忆圣母的童年并阐明各种层次的爱与影响力.html">196.在革责玛尼庄园过安息日耶稣回忆圣母的童年并阐明各种层次的爱与影响力</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/197.圣殿里遇见阿黎玛特雅人若瑟晚祭的时辰.html">197.圣殿里遇见阿黎玛特雅人若瑟晚祭的时辰</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/198.在伯达尼和玛利亚会面雅贝改名为玛尔奇安.html">198.在伯达尼和玛利亚会面雅贝改名为玛尔奇安</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/199.去史罗安和本希农癞病人的地方透过玛利亚，伯铎获得了养子玛尔奇安.html">199.去史罗安和本希农癞病人的地方透过玛利亚，伯铎获得了养子玛尔奇安</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/200.阿格略因得救的喜乐，奠祭珍贵的香水.html">200.阿格略因得救的喜乐，奠祭珍贵的香水</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/201.玛尔奇安的成年礼考试.html">201.玛尔奇安的成年礼考试</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/202.耶稣责备依斯加略人犹达斯来自臼卡纳的牧羊人.html">202.耶稣责备依斯加略人犹达斯来自臼卡纳的牧羊人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="8.第八册：耶稣宣教第二年（乙）/203.‘我们的天父’——天主经祷文.html">203.‘我们的天父’——天主经祷文</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第九册：耶稣宣教第二年（丙） / 204-225</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/204.透过神殿（建筑工法）的比喻，向外邦人解释信仰和灵魂.html">204.透过神殿（建筑工法）的比喻，向外邦人解释信仰和灵魂</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/205.恩多尔的若望第一项任务，荡子的比喻，圣母玛利亚带领依斯加略（犹达斯）回归耶稣.html">205.恩多尔的若望第一项任务，荡子的比喻，圣母玛利亚带领依斯加略（犹达斯）回归耶稣</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/206.天国的两个比喻（十个童女的比喻；婚宴的比喻），结束伯达尼之旅.html">206.天国的两个比喻（十个童女的比喻；婚宴的比喻），结束伯达尼之旅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/207.在白冷，圣母回忆起耶稣的诞生.html">207.在白冷，圣母回忆起耶稣的诞生</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/208.无辜幼童玛尔奇安的仇恨，圣母玛利亚再次看见牧羊人厄里亚，并和耶稣同去贝特族尔会晤厄丽莎.html">208.无辜幼童玛尔奇安的仇恨，圣母玛利亚再次看见牧羊人厄里亚，并和耶稣同去贝特族尔会晤厄丽莎</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/209.耶稣在贝特族尔，厄丽莎家中宣讲痛苦的力量.html">209.耶稣在贝特族尔，厄丽莎家中宣讲痛苦的力量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/210.前注赫贝龙途中，依斯加略人犹达斯的忧虑.html">210.前注赫贝龙途中，依斯加略人犹达斯的忧虑</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/211.返回赫贝龙，在洗者若翰屋子的花园里宣讲和显奇迹.html">211.返回赫贝龙，在洗者若翰屋子的花园里宣讲和显奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/212.耶稣在犹他，依撒格家中宣讲，群众人对他充满了热情与爱戴.html">212.耶稣在犹他，依撒格家中宣讲，群众人对他充满了热情与爱戴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/213.耶稣在克黎约特讲预言和宗徒们开始宣道.html">213.耶稣在克黎约特讲预言和宗徒们开始宣道</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/214.在热诚者西满的陪伴下，圣母抵达克黎约特，犹达斯的母亲向圣母吐露心声.html">214.在热诚者西满的陪伴下，圣母抵达克黎约特，犹达斯的母亲向圣母吐露心声</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/215.斐理和安德在贝特京纳（Bethginna）宣讲，耶稣治愈客栈老板精神错乱的女儿.html">215.斐理和安德在贝特京纳（Bethginna）宣讲，耶稣治愈客栈老板精神错乱的女儿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/216.蒲公英随风而散的比喻，形容门徒的不忠.html">216.蒲公英随风而散的比喻，形容门徒的不忠</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/217.在安息日掐麦穗.html">217.在安息日掐麦穗</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/218.在培肋舍特人的阿市刻隆地区邂逅几位外邦人.html">218.在培肋舍特人的阿市刻隆地区邂逅几位外邦人</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/219.在阿市刻隆城，宗徒们讲道的各种成果.html">219.在阿市刻隆城，宗徒们讲道的各种成果</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/220.米革达耳加得地区崇拜偶像，耶稣救了难产妇女的奇迹.html">220.米革达耳加得地区崇拜偶像，耶稣救了难产妇女的奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/221.宗徒们抗拒给外邦人传福音，和崎形儿的比喻.html">221.宗徒们抗拒给外邦人传福音，和崎形儿的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/222.若望宗徒的一个秘密.html">222.若望宗徒的一个秘密</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/223.耶稣的一段话，避免了结婚礼车遭受土匪的袭击.html">223.耶稣的一段话，避免了结婚礼车遭受土匪的袭击</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/224.若望宗徒的秘密显露出来，抵达雇撒的约安纳位于贝特的玫瑰园.html">224.若望宗徒的秘密显露出来，抵达雇撒的约安纳位于贝特的玫瑰园</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="9.第九册：耶稣宣教第二年（丙）/225.贝特匝达池塘边的瘫痪，与探讨天主子的工作.html">225.贝特匝达池塘边的瘫痪，与探讨天主子的工作</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>第十册：耶稣宣教第二年（丁） / 226-261</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/226.伯达尼的玛尔大去玛加丹探望玛利德莲，依市玛耳之死.html">226.伯达尼的玛尔大去玛加丹探望玛利德莲，依市玛耳之死</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/227.片断的神视.html">227.片断的神视</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/228.乘船回贝特赛达，将玛尔奇安委托给伯尔菲莉亚（伯铎之妻）.html">228.乘船回贝特赛达，将玛尔奇安委托给伯尔菲莉亚（伯铎之妻）</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/229.耶稣向贝特赛达居民讲述西满伯铎的仁慈.html">229.耶稣向贝特赛达居民讲述西满伯铎的仁慈</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/230.一位妇女碰触耶稣衣边而得痊愈复活雅依洛的女儿.html">230.一位妇女碰触耶稣衣边而得痊愈复活雅依洛的女儿</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/231.玛尔大在葛法翁求问耶稣，有关玛利德莲受折磨和挣扎的意义.html">231.玛尔大在葛法翁求问耶稣，有关玛利德莲受折磨和挣扎的意义</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/232.治愈两个盲人与附魔的哑巴.html">232.治愈两个盲人与附魔的哑巴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/233.广羊的比喻，玛加丹的玛利德莲偷偷旁听.html">233.广羊的比喻，玛加丹的玛利德莲偷偷旁听</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/234.玛利德莲归依前的三部曲.html">234.玛利德莲归依前的三部曲</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/235.玛尔大已经胜利在握.html">235.玛尔大已经胜利在握</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/236.法利塞人西满家中晚宴玛利德莲用香液敷抹耶稣的脚.html">236.法利塞人西满家中晚宴玛利德莲用香液敷抹耶稣的脚</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/237.庄稼多而工人少，天国就像埋在地里的宝藏，玛利德莲到纳匝肋与圣母一起.html">237.庄稼多而工人少，天国就像埋在地里的宝藏，玛利德莲到纳匝肋与圣母一起</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/238.圣母玛利亚陪同玛加丹的玛利亚（玛利德莲）来到葛法翁加入门徒的行列.html">238.圣母玛利亚陪同玛加丹的玛利亚（玛利德莲）来到葛法翁加入门徒的行列</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/239.渔夫和珍珠的比喻新旧教义的宝藏.html">239.渔夫和珍珠的比喻新旧教义的宝藏</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/240.在贝特赛达伯多禄和伯尔菲莉亚家玛尔奇安教玛利德莲“天主经”.html">240.在贝特赛达伯多禄和伯尔菲莉亚家玛尔奇安教玛利德莲“天主经”</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/241.斐理女儿蒙召唤抵达玛加丹，失钱的比喻.html">241.斐理女儿蒙召唤抵达玛加丹，失钱的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/242.耶稣在提底黎雅与玛利德莲同行罗马人克黎斯颇对真理的追求.html">242.耶稣在提底黎雅与玛利德莲同行罗马人克黎斯颇对真理的追求</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/243.在加纳，苏撒纳的家耶稣的外表声音和态度的描述，有关附魔和诱惑的辩论.html">243.在加纳，苏撒纳的家耶稣的外表声音和态度的描述，有关附魔和诱惑的辩论</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/244.若望重复耶稣在大博尔山的讲道：神圣的创造秩序.html">244.若望重复耶稣在大博尔山的讲道：神圣的创造秩序</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/245.纳匝肋人心怀不轨指控耶稣耶稣以取洁礼的癞病人做比喻.html">245.纳匝肋人心怀不轨指控耶稣耶稣以取洁礼的癞病人做比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/246.安息日耶稣在纳匝肋会堂以寓言努力改变乡亲无信和敌对的态度.html">246.安息日耶稣在纳匝肋会堂以寓言努力改变乡亲无信和敌对的态度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/247.圣母教导玛利德莲默祷，默想和默观.html">247.圣母教导玛利德莲默祷，默想和默观</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/248.耶稣在加里肋亚的白冷，阻止一件可怕的断案，以色人表面遵守法律后化林的比喻.html">248.耶稣在加里肋亚的白冷，阻止一件可怕的断案，以色人表面遵守法律后化林的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/249.去西卡米农的路上，圣母玛利亚对犹达斯明白表示：什么是人最重要的责任.html">249.去西卡米农的路上，圣母玛利亚对犹达斯明白表示：什么是人最重要的责任</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/250.在西卡米农会见依撒格领导的门徒，烂泥变成大焰的比喻，恩多尔若望的忏悔.html">250.在西卡米农会见依撒格领导的门徒，烂泥变成大焰的比喻，恩多尔若望的忏悔</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/251.在提洛耶稣向叙利腓尼基的渔民宣讲，阿市刻隆的尼玛斯特，论坚忍的比喻.html">251.在提洛耶稣向叙利腓尼基的渔民宣讲，阿市刻隆的尼玛斯特，论坚忍的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/252.回到西卡米农，信心的比喻.html">252.回到西卡米农，信心的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/253.阿尔斐玛利亚的悲伤，圣童贞属灵的母性，玛利德莲自力更生.html">253.阿尔斐玛利亚的悲伤，圣童贞属灵的母性，玛利德莲自力更生</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/254.希腊奴隶欣提赫坐船抵达凯撒勒雅.html">254.希腊奴隶欣提赫坐船抵达凯撒勒雅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/255.玛尔大，玛利和欣提赫离去奴隶法规正确的应用.html">255.玛尔大，玛利和欣提赫离去奴隶法规正确的应用</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/256.莆萄园丁一家人，让老者复明望德的比喻.html">256.莆萄园丁一家人，让老者复明望德的比喻</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/257.耶稣同他的室兄雅格登上加尔默耳山.html">257.耶稣同他的室兄雅格登上加尔默耳山</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/258.在加尔默耳山上，耶稣揭示了雅格未来的宗徒使命.html">258.在加尔默耳山上，耶稣揭示了雅格未来的宗徒使命</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/259.耶稣个别教导阿尔斐的雅格会关于未来教会和圣事的课程雅格以耶稣之名行治愈奇迹.html">259.耶稣个别教导阿尔斐的雅格会关于未来教会和圣事的课程雅格以耶稣之名行治愈奇迹</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/260.伯铎在厄斯得隆平原以寓言向多辣斯的农民宣讲爱的力量.html">260.伯铎在厄斯得隆平原以寓言向多辣斯的农民宣讲爱的力量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="10.第十册：耶稣宣教第二年（丁）/261.耶稣劝勉约哈南的人民以爱来完成职责.html">261.耶稣劝勉约哈南的人民以爱来完成职责</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

