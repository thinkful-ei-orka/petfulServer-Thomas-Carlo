const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const dog = pets.dogs.show();
    const cat = pets.cats.show();

    return [dog, cat]
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type.toLowerCase() === 'dog') {
      return pets.dogs.dequeue();
    } else if(type.toLowerCase() === 'cat') {
      return pets.cats.dequeue();
    } else {
      return 'Error: Invalid Type.';
    }
  }
}
