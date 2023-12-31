// Facade pattern helps make it easier for your code to be changed in the future.//

function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId: userId
  })
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name)
      console.log(posts.length)
    })
  })
})

/*function getFetch(url, params = {}) {
  const queryString = Object.entries(params).map(param =>  {
    return `${param[0]}=${param[1]}`
  }).join('&')
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: {"Content-Type": "application/json" }
  }).then(res => res.json())
} */

function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params
  }).then(res => res.data)
} // Using axios, we had to change it in only one place - instead of having to change it in every single place that was used with Fetch.// 

// The idea of the facade pattern is to take some form of api that's either difficult to use/ugly and create a nice api out of it - then we can use that nice api everywhere we were going to use the old api. It makes refactoring easier, bacause you only have to change your code in one place instead of having to change everywhere inside of all of your code. //