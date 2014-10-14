var request = require('request'),
    cheerio = require('cheerio'),
    Q = require('q'),
    quotesBunch = [],
    urls = ["http://www.brainyquote.com/quotes/topics/topic_motivational1.html",
            "http://www.brainyquote.com/quotes/topics/topic_motivational2.html",
            "http://www.brainyquote.com/quotes/topics/topic_motivational3.html",
            "http://www.brainyquote.com/quotes/topics/topic_motivational4.html"];

var gatherQuotes = function(callback)
{
    var deferred = Q.defer(); 
    for(var i=0; i< urls.length;i++)
    {
         request(urls[i],function(err,response,body){
            $ = cheerio.load(body);
            $('#quotesList .bqQuoteLink a').each(function(index,quotes){
                callback($(quotes).text());
             });
             deferred.resolve();
       });
    }
    return deferred.promise;
}

var callback = function(quotes){
    quotesBunch.push(quotes);
}

var pushArray = function(){
    var deferred = Q.defer();  
    deferred.resolve();
    console.log(quotesBunch);
    return deferred.promise;
}

exports.gatherQuotes = gatherQuotes;
exports.callback = callback;
exports.pushArray = pushArray;
