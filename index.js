const jsdom  = require('jsdom');
const cheerio = require('cheerio');

const { JSDOM } = jsdom;

var news_maxLength = 30;
var news_title = [];
var news_description = [];
var news_link = [];
var news_creator = [];
var news_pubDate = [];

JSDOM.fromURL("https://www.everyeye.it/feed/feed_news_rss.asp", { referrer: "https://www.everyere.it/feed/feed_news_rss.asp" }).then(dom => {
    const $ = cheerio.load(dom.serialize());

    var articles = $('item');

    for(var i = (news_maxLength > articles.length ? articles.length : news_maxLength); i >= 0; i--) {
        news_title[i] = ($($(articles[i]).find('title')[0]).text()).replace(/(<!\[CDATA\[|\]\]>)/g, "");
        news_description[i] = ($($(articles[i]).find('description')[0]).text()).replace(/(<!\[CDATA\[|\]\]>)/g, "");
        news_link[i] = $($(articles[i]).find('guid')[0]).text();
        news_creator[i] = $($(articles[i]).find('dc\\:creator')[0]).text();
        news_pubDate[i] = $($(articles[i]).find('pubDate')[0]).text();
    }
});

//exports.news_maxLength = news_maxLength;
//exports.news_title = news_title;
//exports.news_description = news_description;
//exports.news_link = news_link;
//exports.news_creator = news_creator;
//exports.news_pubDate = news_pubDate;
