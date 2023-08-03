1. Try to sort the array ```const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7]```. 
    - Use ```sort()``` method.
    - What is the output? Why this is happening? It is not a bug in JavaScript, it is the expected behavior.
    - ["The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
1. From the given array:
    - Find all admins
    - Find all people form Alaska
    - Find the average age of the users
    - Create a new field for each object in the array and call it `lastModified`. As a value use `new Date()`. Be careful with mutations.

      ```javascript
      const users = [
      {
        name: "Alice",
        age: 20,
        isAdmin: false,
        address: {
          country: "USA",
          state: "Alaska"
        }
      },
      {
        name: "Billy",
        age: 15,
        isAdmin: true,
        address: {
          country: "USA",
          state: "California"
        }
      },
      {
        name: "Cleo",
        age: 35,
        isAdmin: false,
        address: {
          country: "USA",
          state: "Florida"
        }
      },
      {
        name: "Danny",
        age: 61,
        isAdmin: true,
        address: {
          country: "USA",
          state: "Alaska"
        }
      },
      {
        name: "Elton",
        age: 61,
        isAdmin: true,
        address: {
          country: "USA",
          state: "Hawaii"
        }
      },
      ];
      ```
1. Create a function `add`, which adds two numbers

   - Check if any of the arguments is not a number and throw an Error

   - Use try catch to catch the error

     ```js
     try {
       add('Hello', 1, 2);
     } catch (error) {
       console.log(error.message);
     }
     ```

1. Now create functions `subtract`, `multiply` and `divide`. Make them work just like the `add` function.


1. Extract the check as external function `checkIfNumber` and reuse it in all functions above

1. Extend the function `add` to accept any number of arguments, add them together and return the result

1. Create a calculator function that accepts two numbers and any of the first four functions as third parameter (not the extended add function, but the one with two parameters). It invokes the passed function with the two numbers and returns the result

1. Create a function, called `makePromiseWithConstructor(shouldResolve)`. Use the Promise constructor to create a promise that will:
  - resolve if `shouldResolve` is truthy
  - reject if `shouldResolve` is falsy

```javascript
const makePromiseWithConstructor = (shouldResolve) => {
  // Return a promise
}
```
1. Create a function that accepts a value and a delay in ms. The function should return a promise, which resolves with the value after the given delay.
```javascript
const makeDelayPromise = (value, delayInMs) => {
  // Return a promise that resolves with the value after delayInMs
}
```
1. In this exercise, we will use then and catch for their most basic use: to consume the result of a successful async process, or to handle the error of a failed async process. We will be given a promise, a consumer, and a handler. Set it up so that, if the promise resolves, the consumer will be called with the result, and if the promise rejects, the handler will be called with the error.

```javascript
const consumePromise = (promise, consumer, handler) => {

}
```
