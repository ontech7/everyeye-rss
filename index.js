const jsdom  = require('jsdom');
const cheerio = require('cheerio');

const { JSDOM } = jsdom;

var patterns = [/(<!\[CDATA\[|\]\]>)/g, 
    /(<!\[CDATA\[|\]\]>|<[^br].*?>|<br\/>|<br><br><a.*?>.*?<\/a>)/g,
    /<br><br>/g];

var rss = async function(maxLength, simulation) {
    if(simulation == null || !simulation)
        var dom = await JSDOM.fromURL("https://www.everyeye.it/feed/feed_news_rss.asp", { referrer: "https://www.everyere.it/feed/feed_news_rss.asp" });
    else
        var dom = await JSDOM.fromFile("simulation.xml", {  });

    var news = { titles: [],
                 descriptions: [],
                 links: [],
                 creators: [],
                 pubDates: [] };

    const $ = cheerio.load(dom.serialize(), { decodeEntities: false });

    var articles = $('item');
    var length = maxLength > articles.length ? articles.length : maxLength;

    for(var i = length - 1; i >= 0; i--) {
        news.titles[i] = ($($(articles[i]).find('title')[0]).html()).replace(patterns[0], "");
        news.descriptions[i] = ((($($(articles[i]).find('description')[0]).html()).replace(patterns[1], "")).replace(patterns[2], "\n")).replace(/<br>/g, "");
        news.links[i] = $($(articles[i]).find('guid')[0]).text();
        news.creators[i] = $($(articles[i]).find('dc\\:creator')[0]).text();
        news.pubDates[i] = $($(articles[i]).find('pubDate')[0]).text();
    }

    return new Promise(function(resolve, reject) { resolve(news) });
}

exports.rss = rss;
