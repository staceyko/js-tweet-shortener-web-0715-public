'use strict';

  var tweetShortener = {
      wordSubstituter: function (tweet) {
        return tweet.replace(/ to | two | too /g,' 2 ').replace(/ and /g,' & ').replace(/for\b/gi,'4').replace(/be\b/g,'b').replace(/ at /g,' @ ').replace(/ you /g,' u ');
      },
  bulkShortener: function(tweets){
    var shortened_tweets = [];
    for (var i = 0; i<tweets.length; i++){
      shortened_tweets.push(this.wordSubstituter(tweets[i]))
    }
      return shortened_tweets
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet)
      } else {
      return tweet
    };

  },
  shortenedTruncator: function(tweet){
    // debugger;
    var shortened_tweet = this.wordSubstituter(tweet);
    if(shortened_tweet.length > 140){
      return shortened_tweet.slice(0, 137) + '...';
    } else {
      return tweet
    }

  },
};
