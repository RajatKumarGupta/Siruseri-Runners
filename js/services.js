angular.module('angularjs.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Results', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results=[
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
	];
	return {
    all: function() {
      return results;
    }
  }
})

.factory('Events', function() {
  var events=[
  {name:"Heritage Run 2014",date:"12-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:1},
  {name:"Dusk to Dawn Run 2014",date:"20-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:2},
  {name:"Heritage Run 2014",date:"12-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:3},
  {name:"Dusk to Dawn Run 2014",date:"20-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:4},
  {name:"Heritage Run 2014",date:"12-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:5},
  {name:"Dusk to Dawn Run 2014",date:"20-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:6},
  {name:"Heritage Run 2014",date:"12-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:7},
  {name:"Dusk to Dawn Run 2014",date:"20-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:8},
  {name:"Heritage Run 2014",date:"12-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:9},
  {name:"Dusk to Dawn Run",date:"20-09-2014",description:"We live in a country full of rich diversities and wide cultural heritage to be proud of. Ancient buildings and monuments speak of our roots and ancestors and so the intention to conserve them for our children to enjoy is nothing but joyful. The Madras Heritage Marathon pays tribute to our rich culture and heritage by bringing in people from all walks of life to celebrate togetherness and spread the message 'Preserve our heritage for generations to come.",id:10} 
  ];
  
  return {
   all:function(){
     return events;
   }
  }
});