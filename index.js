const jsdom  = require('jsdom');
const cheerio = require('cheerio');

const { JSDOM } = jsdom;

var patterns = [/(<!\[CDATA\[|\]\]>)/g, 
    /(<!\[CDATA\[|\]\]>|<[^br].*?>|<br\/>|<br><br><a.*?>.*?<\/a>)/g,
    /<br><br>/g];

var rss = async function(maxLength) {
    var dom = await JSDOM.fromURL("https://www.everyeye.it/feed/feed_news_rss.asp", { referrer: "https://www.everyere.it/feed/feed_news_rss.asp" });

    var news = { title: [],
                 description: [],
                 link: [],
                 creator: [],
                 pubDate: [] };

    const $ = cheerio.load(dom.serialize(), { decodeEntities: false });

    var articles = $('item');
    var length = maxLength > articles.length ? articles.length : maxLength;

    for(var i = length - 1; i >= 0; i--) {
        news.title[i] = ($($(articles[i]).find('title')[0]).html()).replace(patterns[0], "");
        news.description[i] = ((($($(articles[i]).find('description')[0]).html()).replace(patterns[1], "")).replace(patterns[2], "\n")).replace(/<br>/g, "");
        news.link[i] = $($(articles[i]).find('guid')[0]).text();
        news.creator[i] = $($(articles[i]).find('dc\\:creator')[0]).text();
        news.pubDate[i] = $($(articles[i]).find('pubDate')[0]).text();
    }

    return new Promise(function(resolve, reject) { resolve(news) });
}

exports.rss = rss;
