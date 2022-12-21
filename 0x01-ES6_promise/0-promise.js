export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const num = 3 + 2;
    if (num === 4) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  });
}
