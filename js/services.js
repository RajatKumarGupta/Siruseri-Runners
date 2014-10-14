angular.module('angularjs.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('Quotes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var quotes=[
	{"Quote":"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."},
    {"Quote":"Keep your eyes on the stars, and your feet on the ground."},
    {"Quote":"Always do your best. What you plant now, you will harvest later"},
    {"Quote":"You are never too old to set another goal or to dream a new dream"},
    {"Quote":"The secret of getting ahead is getting started."},
    {"Quote":"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy."},
    {"Quote":"The key is to keep company only with people who uplift you, whose presence calls forth your best."},      
    {"Quote":"Expect problems and eat them for breakfast."},
    {"Quote":"With the new day comes new strength and new thoughts."},
    {"Quote":"Do you want to know who you are? Don't ask. Act! Action will delineate and define you."},
    {"Quote":"I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be."},
    {"Quote":"A creative man is motivated by the desire to achieve, not by the desire to beat others."},
    {"Quote":"In order to succeed, we must first believe that we can."},
    {"Quote":"Without hard work, nothing grows but weeds."},
    {"Quote":"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much."}
	];
	return {
    all: function() {
      return quotes;
    },
    get: function(quoteId) {
      // Simple index lookup
      return quotes[quoteId];
    }
  }
});