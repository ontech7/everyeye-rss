const jsdom  = require('jsdom');
const cheerio = require('cheerio');

const { JSDOM } = jsdom;

var news_maxLength = 5;
var news_title = [];
var news_description = [];
var news_link = [];
var news_creator = [];
var news_pubDate = [];

var patterns = [/(<!\-\-\[CDATA\[|\]\]\-\->)/g, 
    /(<!\-\-\[CDATA\[|\]\]\-\->|<[^br].*?>|<br\/>|<br><br><a.*?>.*?<\/a>)/g,
    /<br><br>/g];

JSDOM.fromURL("https://www.everyeye.it/feed/feed_news_rss.asp", { referrer: "https://www.everyere.it/feed/feed_news_rss.asp" }).then(dom => {
    const $ = cheerio.load(dom.serialize());

    var articles = $('item');

    for(var i = (news_maxLength > articles.length ? articles.length : news_maxLength); i >= 0; i--) {
        news_title[i] = ($($(articles[i]).find('title')[0]).html()).replace(patterns[0], "");
        news_description[i] = (($($(articles[i]).find('description')[0]).html()).replace(patterns[1], "")).replace(patterns[2], "\n");
        news_link[i] = $($(articles[i]).find('guid')[0]).text();
        news_creator[i] = $($(articles[i]).find('dc\\:creator')[0]).text();
        news_pubDate[i] = $($(articles[i]).find('pubDate')[0]).text();
    }
    console.log(news_title);
    console.log(news_description);
    console.log(news_link);
    console.log(news_creator);
    console.log(news_pubDate);
});

//exports.news_maxLength = news_maxLength;
//exports.news_title = news_title;
//exports.news_description = news_description;
//exports.news_link = news_link;
//exports.news_creator = news_creator;
//exports.news_pubDate = news_pubDate;
