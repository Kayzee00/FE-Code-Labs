/* OBSERVABLE PATTERN*/
// An object (the subject) maintains a list of dependents (observers) and notifies them when state changes, usually by calling a broadcast method.// 

/* example: observable with a class */

/* class Observable {
  constructor(){
    this.subscribers = []
  }

  subscribe(fn){
    this.subscribers.push(fn);
  }

  unsubscribe(fn){
    this.subscribers = this.subscribers.filter((item) => item !== fn);
  }

  broadcast(data){
    for(let i = 0; i< this.subscribers.length; i++){
      this.subscribers[i](data);
    }
  }
}

const observer = new Observable()

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable"); */




/* example: observable with a function: */

/* function createObservable() {

  return {
    subscribers: [],
    subscribe(fn){
      this.subscribers.push(fn);
    },
  
    unsubscribe(fn){
      this.subscribers = this.subscribers.filter((item) => item !== fn);
    },
  
    broadcast(data){
      for(let i = 0; i< this.subscribers.length; i++){
        this.subscribers[i](data);
      }
    },
  };
}

const observer = createObservable()

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable"); */




/* PRACTICAL EXAMPLE*/

function createObservable() {

  return {
    subscribers: [],
    subscribe(fn){
      this.subscribers.push(fn);
    },
  
    unsubscribe(fn){
      this.subscribers = this.subscribers.filter((item) => item !== fn);
    },
  
    broadcast(data){
      for(let i = 0; i< this.subscribers.length; i++){
        this.subscribers[i](data);
      }
    },
  };
}
