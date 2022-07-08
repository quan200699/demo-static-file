const axios = require('axios');

function getData() {
    return new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(data => resolve(data));
    })
}

async function getDataUsingAwait() {
    return await axios.get('http://jsonplaceholder.typicode.com/posts/2');
}

// let promise = getData();
// promise.then(data => console.log(data));

let promise2 = getDataUsingAwait();
promise2.then(data => console.log(data));
