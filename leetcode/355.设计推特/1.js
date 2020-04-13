/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.time = 0;
  this.users = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.time += 1;
  if ( this.users[userId] === undefined)  this.users[userId] = [];
  if ( this.users[userId]['tweets'] === undefined)  this.users[userId]['tweets'] = [];
  let hasTweets = [];
  for (let tweet of  this.users[userId]['tweets']) {
    hasTweets.push(tweet.tweetId);
  }
  if (hasTweets.indexOf(tweetId) !== -1) return;
  this.users[userId]['tweets'].push({ tweetId, time: this.time });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  if ( this.users[userId] === undefined)  this.users[userId] = [];
  if ( this.users[userId]['tweets'] === undefined)  this.users[userId]['tweets'] = [];
  if ( this.users[userId]['follows'] === undefined)  this.users[userId]['follows'] = [];
  let list = [];
  let follows = this.users[userId]['follows'];
  if(follows === undefined){
    follows = []
  }
  let tweets = [];
  if(this.users[userId]['tweets'].length != 0){
    tweets.push(this.users[userId]['tweets'])
  }
  for(let follow of follows){
    tweets[0].push(this.users[follow]['tweets'][0])
  }
  tweets[0].sort((a,b) => b.time-a.time)
  // console.log(tweets[0])
  for(let tweet of tweets[0]){
    if(tweet.length !=0 ) list.push(tweet.tweetId)
  }
  return list;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if ( this.users[followerId] === undefined)  this.users[followerId] = [];
  if ( this.users[followerId]['tweets'] === undefined)  this.users[followerId]['tweets'] = [];
  if ( this.users[followerId]['follows'] === undefined)  this.users[followerId]['follows'] = [];
  if ( this.users[followeeId] === undefined)  this.users[followeeId] = [];
  if ( this.users[followeeId]['tweets'] === undefined)  this.users[followeeId]['tweets'] = [];
  if ( this.users[followeeId]['follows'] === undefined)  this.users[followeeId]['follows'] = [];
  if(followeeId === followerId) return 
  for(let follow of this.users[followerId]['follows']){
      if(follow === followeeId) return 
  }
  this.users[followerId]['follows'].push(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if ( this.users[followerId]['follows'] === undefined)  this.users[userId]['follows'] = [];
  if(followeeId === followerId) return 
  let index = this.users[followerId]['follows'].indexOf(followeeId);
  if(index === -1){
    return 
  }else{
    this.users[followerId]['follows'].splice(index,1)
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
const twitter = new Twitter();
twitter.postTweet(1, 5);
// twitter.postTweet(1, 3);
// console.log(twitter.users[1]['tweets'])
console.log(twitter.getNewsFeed(1));
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1));
twitter.unfollow(1, 2);
console.log(twitter.users[1]['tweets'])
console.log(twitter.getNewsFeed(1));