const jsdom  = require('jsdom');
const cheerio = require('cheerio');

const { JSDOM } = jsdom;

var news = { title: [],
             description: [],
             link: [],
             creator: [],
             pubDate: [] };

var patterns = [/(<!\-\-\[CDATA\[|\]\]\-\->)/g, 
    /(<!\-\-\[CDATA\[|\]\]\-\->|<[^br].*?>|<br\/>|<br><br><a.*?>.*?<\/a>)/g,
    /<br><br>/g];

var rss = function(maxLength, callback) {
    JSDOM.fromURL("https://www.everyeye.it/feed/feed_news_rss.asp", { referrer: "https://www.everyere.it/feed/feed_news_rss.asp" }).then(dom => {
        const $ = cheerio.load(dom.serialize());

        var articles = $('item');

        for(var i = (maxLength - 1 > articles.length - 1 ? articles.length - 1 : maxLength - 1); i >= 0; i--) {
            news.title[i] = ($($(articles[i]).find('title')[0]).html()).replace(patterns[0], "");
            news.description[i] = (($($(articles[i]).find('description')[0]).html()).replace(patterns[1], "")).replace(patterns[2], "\n");
            news.link[i] = $($(articles[i]).find('guid')[0]).text();
            news.creator[i] = $($(articles[i]).find('dc\\:creator')[0]).text();
            news.pubDate[i] = $($(articles[i]).find('pubDate')[0]).text();
        }

        callback(news);
    });
}

exports.rss = rss;
