var express = require('express'),
    app = express(),
    fs = require('fs');

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname))

app.get('/photos',function(req,res){
    var images = [];
    var files = fs.readdirSync('./photos');
    for (var i in files) {
      images.push(files[i]);
    }
    res.send(images);
});

app.get('/about',function(req,res){
    res.send([
        {"Id":"0","Name":"Keshor Mahalingam","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"1","Name":"Panneer Dhamodharan","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"2","Name":"Rekha Rajendran","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"3","Name":"Anjanadevi Kannan","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"4","Name":"Dhinesh Viswanathan","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"5","Name":"Thirunavukkarasu Muthuswamy","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"6","Name":"Kavitha Iyer","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"7","Name":"Sathees Sadhanatham","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"8","Name":"Janani Gopalakrishnan","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"}, 
        {"Id":"9","Name":"Mariselvi Santhanam","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"10","Name":"Bhuvanesh KV","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"},
        {"Id":"11","Name":"Arun Subramaniyan","Picture":"profile.jpg","Special":"The Speedster.This frontline runner not only runs fast, but also talks fast.","First_Step":"Started running in the year 2008 and since then there has been no looking back.","Recent_Accomplishments":"Ran about 323 Kms. in the month of March 2013. Started off with 13X13 run and then continued the momentum till the end of the month","Frequency":"3-4 runs a week, followed by a long run 19-25K on weekends","Why_Run":"Started off as fun, but got hooked on to running when I discovered my ability to run 21 km. I can run alone anytime anywhere, but of course, it is always fun to run with The_Team!","Motivation_to_Run":"Running makes me feel fit and look much younger compared to peers of same age.","Favourite_Route":"Running along the Elliots beach, in and around Adyar, Kotturpuram and IIT.","The_Team":"Dream runners as a group, means everything to me in fitness. Known for our punctual runs, we have been a benchmark and inspiration to many people in Besant Nagar"}        
    ]);
});
app.get('/results',function(req,res){
    res.send([
	{"Runner":"Kavitha Iyer","Lap_1":10.28,"Lap_2":11.26,"Lap_3":12.04,"Lap_4":12.6,"Timing":46.18},
	{"Runner":"Sathees ","Lap_1":8.09,"Lap_2":8.42,"Lap_3":9.53,"Lap_4":9,"Timing":35.04},
	{"Runner":"Keshor","Lap_1":6.21,"Lap_2":7.03,"Lap_3":7.2,"Lap_4":7.76,"Timing":28.2},
	{"Runner":"Siva rama krishnan","Lap_1":8.21,"Lap_2":9.81,"Lap_3":10.17,"Lap_4":10.23,"Timing":38.42},
	{"Runner":"Arun Kumar","Lap_1":8.12,"Lap_2":8.32,"Lap_3":15.71,"Lap_4":0,"Timing":0},
	{"Runner":"Surya Sethuraman","Lap_1":12.02,"Lap_2":13.28,"Lap_3":0,"Lap_4":0,"Timing":0},
	{"Runner":"Praveen Kumar","Lap_1":10.26,"Lap_2":17.18,"Lap_3":0,"Lap_4":0,"Timing":0},
	{"Runner":"Siva Kumar","Lap_1":10.26,"Lap_2":16.85,"Lap_3":0,"Lap_4":0,"Timing":0},
	{"Runner":"Shyam Kumar","Lap_1":11.48,"Lap_2":10.76,"Lap_3":10,"Lap_4":0,"Timing":0},
	{"Runner":"Prabhu Shankar","Lap_1":8.5,"Lap_2":10.84,"Lap_3":11.97,"Lap_4":12.76,"Timing":44.07},
	{"Runner":"Thirunavukkarasu","Lap_1":5.58,"Lap_2":6.64,"Lap_3":6.8,"Lap_4":7.02,"Timing":26.04},
	{"Runner":"Kumaravel","Lap_1":6.2,"Lap_2":6.05,"Lap_3":6.79,"Lap_4":6.16,"Timing":25.2},
	{"Runner":"Prabhakaran","Lap_1":6.26,"Lap_2":7.99,"Lap_3":9.17,"Lap_4":8.07,"Timing":31.49},
	{"Runner":"Ajith Kamal","Lap_1":9.59,"Lap_2":9.68,"Lap_3":9.87,"Lap_4":10.14,"Timing":39.28},
	{"Runner":"Thobith","Lap_1":8.01,"Lap_2":8.42,"Lap_3":10.96,"Lap_4":13.76,"Timing":41.15},
	{"Runner":"Brindha","Lap_1":11.2,"Lap_2":14.05,"Lap_3":13.87,"Lap_4":13.07,"Timing":52.19}
	]);
});

app.get('/events',function(req,res){
  var request = require('request'),
    cheerio = require('cheerio'),
    Q = require('q'),
    event = [],
    json = {marathon:"",details:""},
    url  = 'http://marathons.ahotu.com/calendar/half-marathon/india?page=1';

var gatherEvents = function(callback)
{
    var deferred = Q.defer(); 
    request(url,function(err,response,body){
        $ = cheerio.load(body);
        $('.col-md-9 .list-group a h4').filter(function(index,marathon){
            callback($(marathon).text());
        });
         deferred.resolve();
    });
    return deferred.promise;
}

var callback = function(json){
    event.push(json);
}

var pushArray = function(){
    var deferred = Q.defer();  
    deferred.resolve();
    res.send(event);
    return deferred.promise;
}

gatherEvents(callback).then(pushArray).done();
});

app.get('/quotes',function(req,res){
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
    res.send(quotesBunch);
    return deferred.promise;
}

gatherQuotes(callback).then(pushArray).done();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});