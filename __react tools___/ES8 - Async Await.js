// non async method
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(console.log)
// async method
async function fetch_users(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = resp.json();
    console.log(data);
}

// promise.all non async
const urls = ["https://jsonplaceholder.typicode.com/users",
"https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/albums"];

// Using Promise.all
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums', array[2]);
}).catch(error => console.error('oops', error));

// Using async/await
async function get_data() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.error('oops', error);
    }
}

// Call the async function
get_data();


// promise.all  async with catch error
async function get_data() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('oops', err);
    }
}

    
