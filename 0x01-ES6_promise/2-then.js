// export default function handleResponseFromAPI(promise){
//   return new Promise((resolve,reject)=>{
//     if(promise){
//       resolve({
//         status: 200,
//         body: 'success'
//       })
//     }else{
//       reject(new Error('please'))
//     }
//   })
// }
// const res = handleResponseFromAPI()
// res.then(()=>{
//   message = 'Got a response from the API'
//   console.log(message)
// }).catch((message)=> message)

export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
