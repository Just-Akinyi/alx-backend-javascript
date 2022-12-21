export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      })
        .then(() => {
          console.log('Got a response from the API');
        });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
