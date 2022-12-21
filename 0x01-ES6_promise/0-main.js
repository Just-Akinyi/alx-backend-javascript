import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
// response.then((message) => {
//   console.log(message);
// }).catch((message) => {
//   console.log(message);
// });
