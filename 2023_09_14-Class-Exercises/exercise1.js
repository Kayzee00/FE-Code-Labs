//Objective: Understand the Observer design pattern.

//Instructions:


// I. Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// II. When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// III. Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.
// https://www.codelabsdash.com/lessons/frontend/javascript/advance-concepts //


class Subject {
  constructor() {
    this.observers = [];
  }
  // Add methods here
  addObserver(observer) {
  
  }

  removeObservers(observer) {

  }

  notifyObservers(data) {

  }
}

class Observer {
  update() {
    console.log('Observe updated!');
  }
}