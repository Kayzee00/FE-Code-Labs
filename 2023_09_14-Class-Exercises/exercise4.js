//Objective: Asynchronous Observer with Destructuring

//Instructions:

// I. Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
// II. The data passed to each observer's update method should be the list of posts fetched.
// III. Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
// IV. Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
// V. Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.
// https://www.codelabsdash.com/lessons/frontend/javascript/advance-concepts //

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    // TODO: Add observer to the list
  }

  removeObserver(observer) {
    //TODO: Remove observer from the list
  }

  notifyObservers(data) {
    // TODO: Notify all observers with given data
  }

  async fetchAndNotify() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    // TODO: Fetch data from the API and notify observers
  }
}

class Observer {
  update(data) {
    // TODO: Handle the received data. If it's an error message, log it.
    // If it's the list of posts, destructure and log the title of the first post.
  }
}

// TODO: Instantiate the Subject, add observers, and call the fetchNotify method.