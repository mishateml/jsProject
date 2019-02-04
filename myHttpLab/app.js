const http = new EasyHTTP();

//get req
//
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//

// user data

const data = {
    name: 'misha',
    userName: 'mishateml',
    email: 'm@gmail.com'
}

// post req
//         http.post('https://jsonplaceholder.typicode.com/users', data)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));

// put rec
//         http.put('https://jsonplaceholder.typicode.com/users/1', data)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));

// delete rec
        http.delete('https://jsonplaceholder.typicode.com/users/1')
            .then(res => console.log(res))


