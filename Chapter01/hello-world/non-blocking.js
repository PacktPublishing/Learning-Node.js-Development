var getUser = require('getUser');

console.log('starting user1');
getUser('123', function (user1) {
  console.log('user1', user1);
});

console.log('starting user2');
getUser('321', function (user2) {
  console.log('user2', user2);
});

var sum = 1 + 2;
console.log('The sum is ' + sum);
