var everyeye = require('./index');

everyeye.rss(5, function(result) {
    console.log(result.title);
});
