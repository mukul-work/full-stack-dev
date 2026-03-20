import axios from 'axios';

const promise = new Promise((resolve, reject) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
});

promise
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });