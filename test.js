var everyeye = require('./index');

everyeye.rss(5).then((result) => console.log(result.title));
